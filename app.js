// ═══════════════════════════════════════
//  LUCIDE ICON HELPER
// ═══════════════════════════════════════

function icon(name, size = 16) {
  return `<i data-lucide="${name}" style="width:${size}px;height:${size}px;display:inline-flex;flex-shrink:0;"></i>`;
}

function refreshIcons() {
  if (window.lucide) lucide.createIcons();
}

// ═══════════════════════════════════════
//  STATE
// ═══════════════════════════════════════

let state = {
  currentModule: null,
  currentExercise: 0,
  score: 0,
  completed: new Set(),
  activeTab: 'theory',
  quizAnswers: {},
  quizSubmitted: false
};

// ═══════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════

function showPanel(panelId) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + panelId).classList.add('active');

  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));

  if (panelId === 'dashboard') {
    document.querySelector('.nav-item').classList.add('active');
    updateDashboard();
  } else if (panelId === 'errors') {
    document.querySelectorAll('.nav-item')[4].classList.add('active');
    renderErrors();
  }
}

function showModule(id) {
  state.currentModule = KB.modules.find(m => m.id === id);
  state.currentExercise = 0;
  state.quizAnswers = {};
  state.quizSubmitted = false;

  const heading = document.getElementById('module-heading');
  if (heading) heading.textContent = state.currentModule.title;

  document.querySelectorAll('.nav-item').forEach((b, i) => {
    b.classList.toggle('active', i === id);
  });

  switchTab('theory');
  showPanel('module');
}

function switchTab(tab) {
  state.activeTab = tab;
  document.querySelectorAll('.tab-btn').forEach((b, i) => {
    b.classList.toggle('active', ['theory', 'practice', 'quiz'][i] === tab);
  });
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  const tabPane = document.getElementById('tab-' + tab);
  if (tabPane) tabPane.classList.add('active');

  if (tab === 'theory') renderTheory();
  if (tab === 'practice') renderExercise();
  if (tab === 'quiz') renderQuiz();
}

function changeExercise(dir) {
  const mod = state.currentModule;
  const newIdx = state.currentExercise + dir;
  if (newIdx < 0 || newIdx >= mod.exercises.length) return;
  state.currentExercise = newIdx;
  renderExercise();
}

// ═══════════════════════════════════════
//  RENDER THEORY
// ═══════════════════════════════════════

function renderTheory() {
  const mod = state.currentModule;
  const container = document.getElementById('theory-content');
  if (!container) return;
  container.innerHTML = mod.theory.map((section, si) => `
    <div class="theory-capsule">
      <div class="capsule-header" onclick="toggleCapsule(${si})">
        <div class="capsule-title">
          <span class="capsule-icon">${icon(section.icon, 14)}</span>
          ${section.title}
        </div>
        <span class="capsule-toggle ${si === 0 ? 'open' : ''}" id="toggle-${si}">${icon('chevron-down', 12)}</span>
      </div>
      <div class="capsule-body ${si === 0 ? 'open' : ''}" id="body-${si}">
        ${section.items.map(item => `
          <div class="theory-item">
            <span class="theory-key">${item.bullet}</span>
            <span class="theory-val">${item.text}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
  refreshIcons();
}

function toggleCapsule(idx) {
  const body = document.getElementById('body-' + idx);
  const toggle = document.getElementById('toggle-' + idx);
  if (body) body.classList.toggle('open');
  if (toggle) toggle.classList.toggle('open');
}

// ═══════════════════════════════════════
//  RENDER EXERCISE
// ═══════════════════════════════════════

function renderExercise() {
  const mod = state.currentModule;
  const exIdx = state.currentExercise;
  const ex = mod.exercises[exIdx];

  // Update nav
  const stepsHTML = mod.exercises.map((e, i) => {
    const cls = state.completed.has(e.id) ? 'done' : (i === exIdx ? 'current' : '');
    return `<div class="ex-step ${cls}" onclick="if(${i} !== ${exIdx}) { state.currentExercise=${i}; renderExercise(); }" title="Ejercicio ${i + 1}"></div>`;
  }).join('');

  const counter = document.getElementById('ex-counter');
  if (counter) counter.textContent = `${exIdx + 1} / ${mod.exercises.length}`;

  const prevBtn = document.getElementById('ex-prev');
  if (prevBtn) prevBtn.disabled = exIdx === 0;

  const nextBtn = document.getElementById('ex-next');
  if (nextBtn) nextBtn.disabled = exIdx === mod.exercises.length - 1;

  const stepsContainer = document.getElementById('ex-steps');
  if (stepsContainer) stepsContainer.innerHTML = stepsHTML;

  const isDone = state.completed.has(ex.id);

  const container = document.getElementById('challenge-container');
  if (container) {
    container.innerHTML = `
      <div class="challenge-card" id="challenge-${ex.id}">
        <div class="challenge-header">
          <div class="challenge-title">${isDone ? `<span style="color:var(--green);display:inline-flex;align-items:center;gap:3px;">${icon('check-circle', 14)}</span> ` : ''}${ex.title}</div>
          <span class="challenge-pts">${icon('star', 12)} ${ex.pts} pts</span>
        </div>
        <div class="challenge-desc">${ex.desc}</div>

        <div class="editor-toolbar">
          <div class="editor-dots">
            <span></span><span></span><span></span>
          </div>
          <span class="editor-filename">solution.js</span>
          <div class="editor-actions">
            <button class="btn btn-hint" onclick="showHint('${ex.id}')">${icon('lightbulb', 13)} Pista</button>
            <button class="btn btn-solution" onclick="showSolution('${ex.id}')">${icon('book-open', 13)} Solución</button>
            <button class="btn btn-run" onclick="runCode('${ex.id}')">${icon('play', 13)} Ejecutar</button>
          </div>
        </div>
        <textarea class="code-input" id="editor-${ex.id}" spellcheck="false">${ex.starter}</textarea>

        <div class="feedback-area" id="feedback-${ex.id}"></div>

        <div class="solution-block" id="solution-${ex.id}">
          <div class="solution-title">${icon('sparkles', 13)} Solución Explicada</div>
          ${ex.solution.map(line => `
            <div class="solution-line">
              <span class="solution-code">${escapeHTML(line.code)}</span>
              <span class="solution-explain">${line.explain}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  refreshIcons();
}

function escapeHTML(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(s) {
  return s.replace(/"/g, '&quot;');
}

function colorizeLog(val) {
  if (typeof val === 'string') {
    return `<span style="color:#ce9178;">"${escapeHTML(val)}"</span>`;
  }
  if (typeof val === 'number') {
    return `<span style="color:#b5cea8;">${val}</span>`;
  }
  if (typeof val === 'boolean') {
    return `<span style="color:#569cd6; font-weight:bold;">${val}</span>`;
  }
  if (val === undefined) {
    return `<span style="color:#569cd6;">undefined</span>`;
  }
  if (val === null) {
    return `<span style="color:#569cd6;">null</span>`;
  }
  if (Array.isArray(val)) {
    return `[${val.map(colorizeLog).join(', ')}]`;
  }
  if (typeof val === 'object') {
    try {
      return `<span style="color:#9cdcfe;">${JSON.stringify(val)}</span>`;
    } catch {
      return `<span style="color:#9cdcfe;">[Object]</span>`;
    }
  }
  return `<span style="color:#d4d4d4;">${escapeHTML(String(val))}</span>`;
}

// ═══════════════════════════════════════
//  CODE EXECUTION
// ═══════════════════════════════════════

function runCode(exId) {
  const ex = state.currentModule.exercises.find(e => e.id === exId);
  const codeInput = document.getElementById('editor-' + exId);
  const code = codeInput ? codeInput.value.trim() : '';
  const feedback = document.getElementById('feedback-' + exId);

  if (feedback) feedback.classList.add('show');

  // Reject trivially empty or junk submissions
  if (code.length < 10) {
    if (feedback) feedback.innerHTML = `<div class="feedback-msg error"><span class="feedback-icon">${icon('alert-triangle', 15)}</span><div>El código es demasiado corto para ser correcto. Escribe tu solución.</div></div>`;
    refreshIcons();
    return;
  }

  try {
    const logs = [];
    const origLog = console.log;
    console.log = (...args) => {
      // Save the raw args for formatting
      logs.push(args.map(colorizeLog).join(' '));
      origLog(...args);
    };
    const valid = ex.validate(code);
    console.log = origLog;

    if (valid) {
      if (feedback) {
        feedback.innerHTML = `<div class="feedback-msg success"><span class="feedback-icon">${icon('check-circle-2', 15)}</span><div><strong>¡Perfecto!</strong> Tu solución es correcta.</div></div>`;
        if (logs.length) {
          feedback.innerHTML += `<div class="feedback-msg info" style="margin-top:0.5rem;"><span class="feedback-icon">${icon('terminal', 15)}</span><div><strong>Output:</strong><br><code style="background:#1e1e1e; color:#d4d4d4; padding:10px; border-radius:6px; display:block; font-family:monospace; white-space:pre-wrap;">${logs.join('<br>')}</code></div></div>`;
        }
      }
      markComplete(ex);
    } else {
      if (feedback) {
        feedback.innerHTML = `<div class="feedback-msg error"><span class="feedback-icon">${icon('x-circle', 15)}</span><div>Resultado incorrecto. Los tests no pasan. Revisa la lógica y usa la pista si la necesitas.</div></div>`;
        if (logs.length) {
          feedback.innerHTML += `<div class="feedback-msg hint" style="margin-top:0.5rem;"><span class="feedback-icon">${icon('terminal', 15)}</span><div><strong>Tu output:</strong><br><code style="background:#1e1e1e; color:#d4d4d4; padding:10px; border-radius:6px; display:block; font-family:monospace; white-space:pre-wrap;">${logs.join('<br>')}</code></div></div>`;
        }
      }
    }
  } catch (err) {
    if (feedback) feedback.innerHTML = `<div class="feedback-msg error"><span class="feedback-icon">${icon('alert-circle', 15)}</span><div><strong>SyntaxError:</strong> ${escapeHTML(err.message)}</div></div>`;
  }
  refreshIcons();
}

function showHint(exId) {
  const ex = state.currentModule.exercises.find(e => e.id === exId);
  const feedback = document.getElementById('feedback-' + exId);
  if (feedback) {
    feedback.classList.add('show');
    feedback.innerHTML = `<div class="feedback-msg hint"><span class="feedback-icon">${icon('lightbulb', 15)}</span><div><strong>Pista:</strong> ${ex.hint}</div></div>`;
  }
  refreshIcons();
}

function showSolution(exId) {
  const sol = document.getElementById('solution-' + exId);
  if (sol) sol.classList.toggle('show');
}

function markComplete(ex) {
  if (!state.completed.has(ex.id)) {
    state.completed.add(ex.id);
    state.score += ex.pts;
    const scoreEl = document.getElementById('total-score');
    if (scoreEl) scoreEl.textContent = state.score;

    const statPtsEl = document.getElementById('stat-pts');
    if (statPtsEl) statPtsEl.textContent = state.score;

    const statCompletedEl = document.getElementById('stat-completed');
    if (statCompletedEl) statCompletedEl.textContent = state.completed.size;

    updateProgress();
    showToast(`+${ex.pts} pts conseguidos`);
  }
}

// ═══════════════════════════════════════
//  QUIZ
// ═══════════════════════════════════════

function renderQuiz() {
  const mod = state.currentModule;
  const container = document.getElementById('quiz-content');
  if (!container) return;

  container.innerHTML = `
    <div style="margin-bottom:1rem;">
      <h3 style="font-family:var(--font-display); font-size:1rem; font-weight:700; margin-bottom:0.3rem; display:flex; align-items:center; gap:0.4rem;">${icon('flask-conical', 16)} Quiz Rápido — ${mod.title}</h3>
      <p style="font-size:0.78rem; color:var(--muted);">Pon a prueba tu comprensión teórica antes del examen.</p>
    </div>
    ${mod.quiz.map((q, qi) => `
      <div class="challenge-card" style="margin-bottom:1rem;">
        <div class="challenge-header">
          <div class="challenge-title">Pregunta ${qi + 1}</div>
          <span class="challenge-pts">${icon('star', 12)} 5 pts</span>
        </div>
        <div class="challenge-desc"><strong>${escapeHTML(q.q)}</strong></div>
        <div style="padding:1rem 1.4rem; display:flex; flex-direction:column; gap:0.5rem;">
          ${q.opts.map((opt, oi) => `
            <button
              id="qopt-${qi}-${oi}"
              onclick="selectAnswer(${qi}, ${oi}, ${q.ans})"
              style="background:var(--surface2); border:1px solid var(--border); color:var(--muted); font-family:var(--font-mono); font-size:0.8rem; padding:0.6rem 1rem; border-radius:7px; cursor:pointer; text-align:left; transition:all 0.15s;"
            >${String.fromCharCode(65 + oi)}. ${escapeHTML(opt)}</button>
          `).join('')}
        </div>
        <div class="feedback-area" id="quiz-feedback-${qi}"></div>
      </div>
    `).join('')}
  `;
  refreshIcons();
}

function selectAnswer(qi, oi, correct) {
  const feedback = document.getElementById('quiz-feedback-' + qi);
  if (feedback) feedback.classList.add('show');

  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`qopt-${qi}-${i}`);
    if (btn) {
      btn.style.pointerEvents = 'none';
      if (i === correct) {
        btn.style.background = 'rgba(0,255,136,0.1)';
        btn.style.borderColor = 'rgba(0,255,136,0.4)';
        btn.style.color = 'var(--green)';
      }
    }
  }

  if (oi === correct) {
    if (feedback) feedback.innerHTML = `<div class="feedback-msg success"><span class="feedback-icon">${icon('check-circle-2', 15)}</span><div>¡Correcto!</div></div>`;
    const qKey = `quiz-${state.currentModule.id}-${qi}`;
    if (!state.completed.has(qKey)) {
      state.completed.add(qKey);
      state.score += 5;
      const scoreTotal = document.getElementById('total-score');
      if (scoreTotal) scoreTotal.textContent = state.score;
      const statScore = document.getElementById('stat-pts');
      if (statScore) statScore.textContent = state.score;
      showToast('+5 pts conseguidos');
    }
  } else {
    const btn = document.getElementById(`qopt-${qi}-${oi}`);
    if (btn) {
      btn.style.background = 'rgba(255,68,102,0.1)';
      btn.style.borderColor = 'rgba(255,68,102,0.3)';
      btn.style.color = 'var(--red)';
    }
    if (feedback) feedback.innerHTML = `<div class="feedback-msg error"><span class="feedback-icon">${icon('x-circle', 15)}</span><div>Incorrecto. La respuesta correcta era <strong>${String.fromCharCode(65 + correct)}</strong>.</div></div>`;
  }
  refreshIcons();
}

// ═══════════════════════════════════════
//  ERRORS PANEL
// ═══════════════════════════════════════

function renderErrors() {
  const container = document.getElementById('errors-list');
  if (!container) return;
  container.innerHTML = KB.errors.map(err => `
    <div class="error-item">
      <h4 style="display:flex;align-items:center;gap:0.4rem;">${icon('triangle-alert', 15)} ${err.title}</h4>
      <p>${err.desc}</p>
      <pre style="margin-top:0.6rem; background:var(--surface2); padding:0.7rem 1rem; border-radius:6px; font-size:0.75rem; color:var(--accent2); overflow:auto;">${escapeHTML(err.code)}</pre>
    </div>
  `).join('');
  refreshIcons();
}

// ═══════════════════════════════════════
//  DASHBOARD & PROGRESS
// ═══════════════════════════════════════

function updateDashboard() {
  const statCompleted = document.getElementById('stat-completed');
  if (statCompleted) statCompleted.textContent = state.completed.size;

  const statPts = document.getElementById('stat-pts');
  if (statPts) statPts.textContent = state.score;

  updateProgress();
}

function updateProgress() {
  const totalEx = KB.modules.reduce((s, m) => s + m.exercises.length, 0);
  const doneEx = KB.modules.reduce((s, m) => s + m.exercises.filter(e => state.completed.has(e.id)).length, 0);
  const pct = totalEx > 0 ? Math.round((doneEx / totalEx) * 100) : 0;

  const fill = document.getElementById('progress-fill');
  const pctEl = document.getElementById('progress-pct');
  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
}

// ═══════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  if (t) {
    t.innerHTML = `${icon('award', 14)} ${msg}`;
    t.className = 'toast gold show';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.classList.remove('show'); }, 2500);
  }
  refreshIcons();
}

// ═══════════════════════════════════════
//  THEME TOGGLE
// ═══════════════════════════════════════

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.innerHTML = isDark ? icon('sun', 16) : icon('moon', 16);
    btn.title = isDark ? 'Modo día' : 'Modo noche';
  }
  localStorage.setItem('jslab-theme', isDark ? 'dark' : 'light');
  refreshIcons();
}

// Restore saved theme — default is LIGHT
(function () {
  const saved = localStorage.getItem('jslab-theme');
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
  }
})();

window.addEventListener('DOMContentLoaded', () => {
  const isDark = document.documentElement.classList.contains('dark');
  const btn = document.getElementById('theme-toggle');
  if (btn) { btn.innerHTML = isDark ? icon('sun', 16) : icon('moon', 16); }
  updateProgress();
  refreshIcons();
});
