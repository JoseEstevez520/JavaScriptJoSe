const KB = {
    modules: [
        // ═══════════════════════════════════════════
        //  MÓDULO 1 · FUNDAMENTOS & LÓGICA
        // ═══════════════════════════════════════════
        {
            id: 1,
            title: "01 · Fundamentos & Lógica",
            icon: "zap",
            theory: [
                {
                    title: "Variables & Sintaxis",
                    icon: "package",
                    items: [
                        { bullet: "let", text: "Scope de bloque. Puede reasignarse. Preferida para la mayoría de casos." },
                        { bullet: "const", text: "Scope de bloque. NO se puede reasignar. Obligatoria si el valor no cambia." },
                        { bullet: "var", text: "Scope de función (evitar). El 'hoisting' la sube a la cima de la función, lo que causa bugs difíciles." },
                        { bullet: "console.log()", text: "Muestra información en la consola del navegador. Fundamental para depurar." },
                        { bullet: "// y /* */", text: "Comentarios de una línea y de bloque. El código comentado no se ejecuta." },
                        { bullet: "Scope", text: "let respeta bloques internos (if, for…). var no lo hace, se filtra fuera del bloque." }
                    ]
                },
                {
                    title: "Tipos de Datos Primitivos",
                    icon: "hash",
                    items: [
                        { bullet: "String", text: "Cadenas de texto: \"dobles\" o 'simples'. Los backticks `` permiten interpolación con ${variable}." },
                        { bullet: "Number", text: "Números enteros (10) y flotantes (3.14). Operaciones: +, -, *, /, % (módulo), ** (potencia)." },
                        { bullet: "Boolean", text: "Solo dos valores: true o false. Resultado de comparaciones." },
                        { bullet: "Undefined", text: "Valor asignado automáticamente a variables declaradas pero sin inicializar." },
                        { bullet: "Null", text: "Ausencia intencional de valor. Lo asigna el programador, a diferencia de undefined." },
                        { bullet: "Symbol", text: "Identificador único e inmutable. Útil como clave de propiedades de objetos para evitar colisiones." },
                        { bullet: "BigInt", text: "Para enteros mayores de 2^53 - 1. Se escribe con n al final: 9007199254740993n." },
                        { bullet: "typeof", text: "Operador que devuelve el tipo como string: typeof 42 → 'number', typeof 'hi' → 'string'." }
                    ]
                },
                {
                    title: "Operadores",
                    icon: "plus-circle",
                    items: [
                        { bullet: "Aritméticos", text: "+ - * / % (resto) ** (potencia). ++ incrementa, -- decrementa." },
                        { bullet: "Asignación", text: "= asigna. += -= *= /= %= **= son atajos: x += 5 equivale a x = x + 5." },
                        { bullet: "== vs ===", text: "== compara solo valor (convierte tipos). === compara valor Y tipo. Usar siempre ===." },
                        { bullet: "!= vs !==", text: "!= y !== son las versiones de desigualdad. Usar !== para comparación estricta." },
                        { bullet: "> < >= <=", text: "Comparadores de rango. Devuelven boolean." },
                        { bullet: "&& || !", text: "AND, OR, NOT lógicos. && requiere ambos true, || solo uno, ! invierte." },
                        { bullet: "Truthy/Falsy", text: "Son Falsy: 0, '', null, undefined, NaN, false. Todo lo demás es Truthy." }
                    ]
                },
                {
                    title: "Strings — Métodos Clave",
                    icon: "file-text",
                    items: [
                        { bullet: ".length", text: "Longitud de la cadena: 'hola'.length → 4." },
                        { bullet: "string[i]", text: "Acceso por índice (empieza en 0): 'hola'[0] → 'h'." },
                        { bullet: ".toUpperCase() .toLowerCase()", text: "Convierte toda la cadena a mayúsculas o minúsculas." },
                        { bullet: ".includes('sub')", text: "Devuelve true si contiene la subcadena." },
                        { bullet: ".indexOf('sub')", text: "Devuelve la posición de la primera ocurrencia o -1." },
                        { bullet: ".slice(s, e)", text: "Extrae desde s hasta e (sin incluirlo). 'hola'.slice(1,3) → 'ol'." },
                        { bullet: ".replace(v, n)", text: "Reemplaza primera ocurrencia de v por n. Con /regex/g reemplaza todas." },
                        { bullet: ".split('sep')", text: "Divide el string en un array: 'a,b,c'.split(',') → ['a','b','c']." },
                        { bullet: ".trim()", text: "Elimina espacios en blanco del inicio y el final." },
                        { bullet: "Template `${}`", text: "Backticks para strings multilínea e interpolación: `Hola ${nombre}`." }
                    ]
                },
                {
                    title: "Condicionales",
                    icon: "git-branch",
                    items: [
                        { bullet: "if / else", text: "Estructura básica. El bloque else es opcional." },
                        { bullet: "else if", text: "Para múltiples condiciones mutuamente excluyentes en cadena." },
                        { bullet: "ternario", text: "Forma compacta: condicion ? valorSiTrue : valorSiFalse." },
                        { bullet: "switch", text: "Para comparar una variable contra múltiples valores. Cada caso necesita break para no caer en cascada. default se ejecuta si no hay coincidencia." }
                    ]
                },
                {
                    title: "Arrays — Colecciones Ordenadas",
                    icon: "list",
                    items: [
                        { bullet: "[]", text: "Creación vacía o con valores: let arr = [1, 'dos', true]." },
                        { bullet: ".push(v)", text: "Añade v al FINAL. Devuelve el nuevo length." },
                        { bullet: ".pop()", text: "Elimina y devuelve el último elemento (pila LIFO)." },
                        { bullet: ".unshift(v)", text: "Añade v al INICIO. Más lento que push." },
                        { bullet: ".shift()", text: "Elimina y devuelve el primer elemento (cola FIFO)." },
                        { bullet: ".length", text: "Número de elementos. Asignar arr.length = 0 vacía el array." },
                        { bullet: ".slice(s,e)", text: "Copia una sección SIN modificar el original." },
                        { bullet: ".splice(s,n,v)", text: "Modifica el original: elimina n elementos desde s, y opcionalmente inserta v." },
                        { bullet: ".indexOf(v)", text: "Devuelve posición o -1 si no existe." },
                        { bullet: ".includes(v)", text: "Devuelve true/false." },
                        { bullet: ".forEach(cb)", text: "Itera sin devolver nuevo array. Útil para efectos secundarios." },
                        { bullet: ".map(cb)", text: "Devuelve NUEVO array transformando cada elemento." },
                        { bullet: ".filter(cb)", text: "Devuelve NUEVO array con los elementos que pasan el predicado." },
                        { bullet: ".find(cb)", text: "Devuelve el PRIMER elemento que cumple la condición (o undefined)." },
                        { bullet: ".reduce(cb, init)", text: "Acumula todos los elementos en un único valor." }
                    ]
                },
                {
                    title: "Set y Map",
                    icon: "layers",
                    items: [
                        { bullet: "Set", text: "Colección de valores ÚNICOS (no admite duplicados). new Set([1,1,2]) → {1,2}." },
                        { bullet: "Set.add(v)", text: "Añade un valor. Si ya existe, no hace nada." },
                        { bullet: "Set.delete(v)", text: "Elimina el valor." },
                        { bullet: "Set.has(v)", text: "Devuelve true/false." },
                        { bullet: "Set.size", text: "Propiedad con el número de elementos (no .length)." },
                        { bullet: "Array.from(set)", text: "Convierte un Set en Array para usar métodos de array." },
                        { bullet: "Map", text: "Pares clave→valor donde CUALQUIER tipo puede ser clave (incluso objetos)." },
                        { bullet: "Map.set(k,v)", text: "Añade o actualiza una entrada." },
                        { bullet: "Map.get(k)", text: "Obtiene el valor de la clave k." },
                        { bullet: "Map.has(k)", text: "Comprueba si la clave existe." },
                        { bullet: "Map.keys() .values() .entries()", text: "Iteradores para recorrer claves, valores o pares [k,v]." }
                    ]
                },
                {
                    title: "Bucles",
                    icon: "refresh-cw",
                    items: [
                        { bullet: "for", text: "Bucle clásico por contador: for (let i = 0; i < n; i++) {}." },
                        { bullet: "while", text: "Se ejecuta mientras la condición sea true. Cuidado con bucles infinitos." },
                        { bullet: "do...while", text: "Se ejecuta AL MENOS UNA VEZ antes de comprobar la condición." },
                        { bullet: "for...of", text: "Itera sobre los VALORES de arrays, strings, sets y maps. El más legible." },
                        { bullet: "for...in", text: "Itera sobre las CLAVES de un objeto: for (let clave in obj)." },
                        { bullet: "break", text: "Sale del bucle inmediatamente." },
                        { bullet: "continue", text: "Salta a la siguiente iteración sin ejecutar el resto del cuerpo." }
                    ]
                },
                {
                    title: "Funciones",
                    icon: "settings-2",
                    items: [
                        { bullet: "function f()", text: "Declaración tradicional. Se puede llamar antes de declararla (hoisting)." },
                        { bullet: "Parámetros default", text: "function suma(a=0, b=0) — si no se pasa argumento, usa el valor por defecto." },
                        { bullet: "const f = function()", text: "Expresión de función anónima. No tiene hoisting." },
                        { bullet: "Arrow =>", text: "const f = (x) => x * 2. Forma implícita si el cuerpo es una expresión. No tiene su propio this." },
                        { bullet: "return", text: "Devuelve un valor y termina la ejecución de la función." },
                        { bullet: "Callback", text: "Función pasada como argumento a otra función (orden superior)." },
                        { bullet: ".forEach(cb)", text: "Alternativa funcional al for. Llama a cb por cada elemento." }
                    ]
                },
                {
                    title: "Objetos",
                    icon: "box",
                    items: [
                        { bullet: "{ clave: valor }", text: "Notación literal para crear objetos. Las claves son strings (sin comillas si son identificadores válidos)." },
                        { bullet: "obj.prop", text: "Acceso con punto. Falla si la clave tiene espacios o es una variable." },
                        { bullet: "obj['prop']", text: "Acceso con corchetes. Permite usar una variable como clave dinámica." },
                        { bullet: "Añadir/Borrar", text: "obj.nueva = valor añade. delete obj.prop elimina la propiedad." },
                        { bullet: "Métodos", text: "Funciones como propiedades. Usan this para acceder al propio objeto." },
                        { bullet: "for...in", text: "Recorre las claves del objeto: for (let k in obj) { console.log(obj[k]) }." },
                        { bullet: "Comparación", text: "Dos objetos con igual contenido NO son iguales (===) porque se comparan por referencia de memoria." }
                    ]
                }
            ],
            exercises: [
[
                // ── 01-strings.js ──
                {
                    id: "m1e1",
                    title: "Strings · Concatenación y longitud",
                    pts: 10,
                    desc: "Declara dos constantes <strong>cadena1 = "Hola"</strong> y <strong>cadena2 = "Mundo"</strong>. Úsalas para mostrar por consola el texto unido con un espacio. Luego muestra la longitud de la cadena <em>"JavaScript"</em>.",
                    starter: `const cadena1 = "Hola";
const cadena2 = "Mundo";
// 1. Muestra cadena1 + espacio + cadena2 por consola
// 2. Muestra la longitud de "JavaScript"`,
                    hint: "Usa console.log(cadena1 + ' ' + cadena2) y console.log('JavaScript'.length).",
                    solution: [
                        { code: "console.log(cadena1 + ' ' + cadena2);", explain: "// concatenación con +" },
                        { code: "console.log('JavaScript'.length);", explain: "// propiedad .length" }
                    ],
                    validate(code) {
                        try {
                            if (code.includes('cadena1') && code.includes('cadena2') && code.includes('.length')) return true;
                            const logs = [];
                            const orig = console.log;
                            console.log = (...a) => { logs.push(a.join(' ')); orig(...a); };
                            new Function(code)();
                            console.log = orig;
                            return logs.some(l => l.includes('Hola Mundo')) && logs.some(l => l === '10');
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e2",
                    title: "Strings · Primer y último carácter",
                    pts: 10,
                    desc: "Dada la cadena <strong>texto = "Programar"</strong>, muestra por consola el primer carácter y el último carácter separados por un espacio. Resultado esperado: <em>P r</em>.",
                    starter: `const texto = "Programar";
// Muestra el primer y último carácter separados por un espacio`,
                    hint: "El primer carácter es texto[0]. El último es texto[texto.length - 1] o texto.at(-1).",
                    solution: [
                        { code: "console.log(texto[0] + ' ' + texto[texto.length - 1]);", explain: "// acceso por índice" },
                        { code: "// alternativa: texto.at(-1)", explain: "// índice negativo" }
                    ],
                    validate(code) {
                        try {
                            if (code.includes('texto[0]') && (code.includes('texto.length') || code.includes('.at(-1)'))) return true;
                            const logs = [];
                            const orig = console.log;
                            console.log = (...a) => { logs.push(a.join(' ')); orig(...a); };
                            new Function(code)();
                            console.log = orig;
                            return logs.some(l => l.trim() === 'P r');
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e3",
                    title: "Strings · Mayúsculas y minúsculas",
                    pts: 8,
                    desc: "Dada una cadena <strong>texto = "Javascript"</strong>, muestra por consola su versión en minúsculas y en mayúsculas.",
                    starter: `const texto = "Javascript";
// toLowerCase
// toUpperCase`,
                    hint: "Usa texto.toLowerCase() y texto.toUpperCase().",
                    solution: [
                        { code: "console.log(texto.toLowerCase());", explain: "// todo en minúsculas" },
                        { code: "console.log(texto.toUpperCase());", explain: "// todo en mayúsculas" }
                    ],
                    validate(code) {
                        try {
                            return code.includes('toLowerCase') && code.includes('toUpperCase');
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e4",
                    title: "Strings · Template literals e interpolación",
                    pts: 10,
                    desc: "Declara <strong>const nombre = "Ana"</strong> y <strong>const edad = 20</strong>. Usa un <em>template literal</em> para mostrar por consola: <em>Ana tiene 20 años</em>.",
                    starter: `const nombre = "Ana";
const edad = 20;
// Usa template literal con \${} para mostrar el mensaje`,
                    hint: "Usa backticks: console.log(\`\${nombre} tiene \${edad} años\`).",
                    solution: [
                        { code: "console.log(\`\${nombre} tiene \${edad} años\`);", explain: "// template literal con interpolación" }
                    ],
                    validate(code) {
                        try {
                            if (code.includes('\${nombre}') && code.includes('\${edad}')) return true;
                            const logs = [];
                            const orig = console.log;
                            console.log = (...a) => { logs.push(a.join(' ')); orig(...a); };
                            new Function(code)();
                            console.log = orig;
                            return logs.some(l => l.includes('Ana') && l.includes('20'));
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e5",
                    title: "Strings · Reemplazar espacios por guiones",
                    pts: 10,
                    desc: "Dada la cadena <em>"Aprender JavaScript es divertido"</em>, muestra por consola la versión con todos los espacios reemplazados por guiones: <em>Aprender-JavaScript-es-divertido</em>.",
                    starter: `const texto = "Aprender JavaScript es divertido";
// Reemplaza todos los espacios por guiones`,
                    hint: "Usa .replaceAll(' ', '-') o .replace(/ /g, '-').",
                    solution: [
                        { code: "console.log(texto.replaceAll(' ', '-'));", explain: "// replaceAll reemplaza todas las ocurrencias" }
                    ],
                    validate(code) {
                        try {
                            return (code.includes('replaceAll') || code.includes('replace')) && (code.includes("'-'") || code.includes('"-"'));
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e6",
                    title: "Strings · includes y comparación de longitudes",
                    pts: 8,
                    desc: "1) Comprueba si la cadena <em>"Estoy aprendiendo JavaScript"</em> contiene la palabra <em>'JavaScript'</em> y muéstralo en consola. 2) Comprueba si <em>"sol"</em> y <em>"mar"</em> tienen la misma longitud.",
                    starter: `const texto = "Estoy aprendiendo JavaScript";
// 1. ¿Incluye "JavaScript"?

const str1 = "sol";
const str2 = "mar";
// 2. ¿Tienen la misma longitud?`,
                    hint: "Usa texto.includes('JavaScript') y str1.length === str2.length.",
                    solution: [
                        { code: "console.log(texto.includes('JavaScript'));", explain: "// devuelve true" },
                        { code: "console.log(str1.length === str2.length);", explain: "// compara longitudes" }
                    ],
                    validate(code) {
                        try {
                            return code.includes('.includes(') && code.includes('.length');
                        } catch { return false; }
                    }
                },
                // ── 02-condicionales.js ──
                {
                    id: "m1e7",
                    title: "Condicionales · Login con if/else",
                    pts: 10,
                    desc: "Declara <strong>const usuario = "admin"</strong> y <strong>const pass = 1234</strong>. Usa un <em>if/else</em> para mostrar <em>'Acceso permitido'</em> si coinciden con los valores correctos, o <em>'Acceso denegado'</em> si no.",
                    starter: `const usuario = "admin";
const pass = 1234;
// if usuario === "admin" && pass === 1234 → "Acceso permitido"
// else → "Acceso denegado"`,
                    hint: "Usa if (usuario === 'admin' && pass === 1234) { ... } else { ... }",
                    solution: [
                        { code: "if (usuario === 'admin' && pass === 1234) {", explain: "// condición doble con &&" },
                        { code: "  console.log('Acceso permitido');", explain: "" },
                        { code: "} else { console.log('Acceso denegado'); }", explain: "" }
                    ],
                    validate(code) {
                        try {
                            return code.includes('&&') && code.includes('if') && code.includes('else');
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e8",
                    title: "Condicionales · Positivo, negativo o cero",
                    pts: 10,
                    desc: "Dado un número, usa <em>if / else if / else</em> para imprimir si es positivo, negativo o cero.",
                    starter: `const numero = -5;
// if → positivo
// else if → negativo
// else → cero`,
                    hint: "if (numero > 0) ... else if (numero < 0) ... else ...",
                    solution: [
                        { code: "if (numero > 0) console.log('positivo');", explain: "" },
                        { code: "else if (numero < 0) console.log('negativo');", explain: "" },
                        { code: "else console.log('cero');", explain: "" }
                    ],
                    validate(code) {
                        try {
                            return code.includes('if') && code.includes('else if') && code.includes('else');
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e9",
                    title: "Condicionales · Operador ternario (adulto/menor)",
                    pts: 8,
                    desc: "Dada una variable <strong>edad</strong>, usa el <em>operador ternario</em> para asignar <em>'menor'</em> o <em>'adulto'</em> y muéstralo en consola.",
                    starter: `const edad = 17;
// let categoria = edad < 18 ? ... : ...`,
                    hint: "let categoria = edad < 18 ? 'menor' : 'adulto';",
                    solution: [
                        { code: "let categoria = edad < 18 ? 'menor' : 'adulto';", explain: "// operador ternario" },
                        { code: "console.log(categoria);", explain: "" }
                    ],
                    validate(code) {
                        try {
                            return code.includes('?') && code.includes(':') && (code.includes("'menor'") || code.includes('"menor"'));
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e10",
                    title: "Condicionales · switch para estaciones",
                    pts: 12,
                    desc: "Dado un <strong>mes</strong> (ej. <em>'marzo'</em>), usa un <em>switch</em> para determinar la estación del año y mostrarlo en consola. Incluye <em>default</em> para meses inválidos.",
                    starter: `let mes = "marzo";
// switch(mes) {
//   case "marzo": case "abril": case "mayo": → "Primavera"
//   case "junio": case "julio": case "agosto": → "Verano"
//   case "septiembre": case "octubre": case "noviembre": → "Otoño"
//   case "diciembre": case "enero": case "febrero": → "Invierno"
//   default: → "Mes no válido"
// }`,
                    hint: "Agrupa varios case seguidos para que todos vayan al mismo console.log. No olvides break.",
                    solution: [
                        { code: "switch(mes) {", explain: "" },
                        { code: "  case 'marzo': case 'abril': case 'mayo':", explain: "// varios case comparten salida" },
                        { code: "    console.log('Primavera'); break;", explain: "" },
                        { code: "  default: console.log('Mes no válido');", explain: "" },
                        { code: "}", explain: "" }
                    ],
                    validate(code) {
                        try {
                            return code.includes('switch') && code.includes('case') && code.includes('break') && code.includes('default');
                        } catch { return false; }
                    }
                },
                // ── 03-estructuras.js ──
                {
                    id: "m1e11",
                    title: "Estructuras · Array y métodos push/unshift/splice",
                    pts: 12,
                    desc: "Crea un array con 5 animales. Añade uno al principio con <em>unshift</em>, otro al final con <em>push</em> y elimina el que está en tercera posición con <em>splice</em>. Muestra el array final.",
                    starter: `let animales = ["perro", "gato", "conejo", "caballo", "tortuga"];
// 1. unshift → añade "leon" al principio
// 2. push → añade "pez" al final
// 3. splice → elimina el de índice 2`,
                    hint: "animales.unshift('leon'), animales.push('pez'), animales.splice(2, 1).",
                    solution: [
                        { code: "animales.unshift('leon');", explain: "// añade al principio" },
                        { code: "animales.push('pez');", explain: "// añade al final" },
                        { code: "animales.splice(2, 1);", explain: "// elimina 1 elemento en índice 2" }
                    ],
                    validate(code) {
                        try {
                            return code.includes('unshift') && code.includes('push') && code.includes('splice');
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e12",
                    title: "Estructuras · Set (valores únicos)",
                    pts: 10,
                    desc: "Crea un <em>Set</em> con 5 libros. Añade dos más (uno repetido). Elimina uno concreto con <em>delete</em>. Muestra el resultado final.",
                    starter: `let libros = new Set(["Quijote", "1984", "El principito", "La odisea", "El señor de los anillos"]);
// 1. add → "Cien años de soledad"
// 2. add → "1984"  (repetido, no se añade)
// 3. delete → "1984"`,
                    hint: "Set.add() y Set.delete(). Los duplicados se ignoran automáticamente.",
                    solution: [
                        { code: "libros.add('Cien años de soledad');", explain: "// añade elemento" },
                        { code: "libros.add('1984');", explain: "// duplicado, no hace efecto" },
                        { code: "libros.delete('1984');", explain: "// elimina '1984'" }
                    ],
                    validate(code) {
                        try {
                            return code.includes('new Set') && code.includes('.add(') && code.includes('.delete(');
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e13",
                    title: "Estructuras · Map (número de mes → nombre)",
                    pts: 12,
                    desc: "Crea un <em>Map</em> que asocie el número del mes a su nombre (1→'enero', … 12→'diciembre'). Comprueba si el mes número 5 existe y muestra su valor. Usa el ternario para mensajes de error si el mes no existe.",
                    starter: `let meses = new Map([
  [1, "enero"], [2, "febrero"], [3, "marzo"],
  [4, "abril"], [5, "mayo"], [6, "junio"],
  [7, "julio"], [8, "agosto"], [9, "septiembre"],
  [10, "octubre"], [11, "noviembre"], [12, "diciembre"]
]);
let numeroMes = 5;
// Comprueba con .has() y muestra el valor con .get() o "Mes no válido"`,
                    hint: "meses.has(numeroMes) ? meses.get(numeroMes) : 'Mes no válido'",
                    solution: [
                        { code: "let msg = meses.has(numeroMes) ? meses.get(numeroMes) : 'Mes no válido';", explain: "// ternario" },
                        { code: "console.log(msg);", explain: "" }
                    ],
                    validate(code) {
                        try {
                            return code.includes('new Map') && code.includes('.has(') && code.includes('.get(');
                        } catch { return false; }
                    }
                },
                // ── 04-bucles.js ──
                {
                    id: "m1e14",
                    title: "Bucles · for, suma y pares",
                    pts: 10,
                    desc: "1) Con un bucle <em>for</em>, suma todos los números del 1 al 100 y muestra el resultado. 2) Imprime todos los números pares entre 1 y 50.",
                    starter: `// 1. Suma del 1 al 100
let suma = 0;
for (let i = 1; i <= 100; i++) {
  // acumula la suma
}
console.log(suma);

// 2. Pares del 1 al 50
for (let i = 2; i <= 50; i += 2) {
  // muestra i
}`,
                    hint: "Dentro del bucle: suma += i. Para los pares, empieza en 2 y suma 2 en cada iteración.",
                    solution: [
                        { code: "let suma = 0; for (let i = 1; i <= 100; i++) suma += i;", explain: "// acumulador" },
                        { code: "for (let i = 2; i <= 50; i += 2) console.log(i);", explain: "// incremento de 2" }
                    ],
                    validate(code) {
                        try {
                            return code.includes('for') && code.includes('suma') && code.includes('i++') && (code.includes('%') || code.includes('+= 2'));
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e15",
                    title: "Bucles · for…of y while",
                    pts: 10,
                    desc: "Dado el array <em>[1, 2, 3, 4, 5, 6, 10, 12]</em>, usa un <em>while</em> para multiplicar todos sus valores y mostrar el producto. Luego usa un bucle <em>for…of</em> para imprimir cada nombre de <em>["Pepito", "Fulanito", "Menganito"]</em>.",
                    starter: `const numeros = [1, 2, 3, 4, 5, 6, 10, 12];
let producto = 1;
let i = 0;
// while para multiplicar

const nombres = ["Pepito", "Fulanito", "Menganito"];
// for...of para imprimir cada nombre`,
                    hint: "while (i < numeros.length) { producto *= numeros[i]; i++; }  y  for (let n of nombres) console.log(n);",
                    solution: [
                        { code: "while (i < numeros.length) { producto *= numeros[i]; i++; }", explain: "// bucle while" },
                        { code: "for (let n of nombres) console.log(n);", explain: "// for...of" }
                    ],
                    validate(code) {
                        try {
                            return code.includes('while') && code.includes('for') && code.includes('of');
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e16",
                    title: "Bucles · Fibonacci (10 términos)",
                    pts: 15,
                    desc: "Usa un bucle para generar los primeros 10 números de la sucesión de Fibonacci (0, 1, 1, 2, 3, 5, 8…). Puedes usar la desestructuración: <code>[a, b] = [b, a + b]</code>.",
                    starter: `let a = 0;
let b = 1;
console.log(a);
console.log(b);
for (let i = 3; i <= 10; i++) {
  // calcula el siguiente y muéstralo
  // actualiza a y b
}`,
                    hint: "Dentro del bucle: let siguiente = a + b; console.log(siguiente); [a, b] = [b, siguiente];",
                    solution: [
                        { code: "let siguiente = a + b;", explain: "// suma los dos anteriores" },
                        { code: "console.log(siguiente);", explain: "" },
                        { code: "[a, b] = [b, siguiente];", explain: "// desestructuración para avanzar" }
                    ],
                    validate(code) {
                        try {
                            return code.includes('for') && (code.includes('[a, b]') || (code.includes('a =') && code.includes('b =')));
                        } catch { return false; }
                    }
                },
                // ── 05-funciones.js ──
                {
                    id: "m1e17",
                    title: "Funciones · Suma, mayor número y vocales",
                    pts: 12,
                    desc: "Crea tres funciones: <strong>suma(a, b)</strong> que devuelva la suma; <strong>mayorNumero(arr)</strong> que devuelva el número mayor del array; <strong>contarVocales(texto)</strong> que cuente las vocales.",
                    starter: `// 1. función suma
function suma(a, b) {
  return a + b;
}

// 2. función mayorNumero
function mayorNumero(listaNumeros) {
  // recorre el array y devuelve el mayor
}

// 3. función contarVocales
function contarVocales(texto) {
  const vocales = 'aeiouAEIOU';
  // cuenta y devuelve
}

console.log(suma(2, 3));
console.log(mayorNumero([1, 2, 5, 3]));
console.log(contarVocales('Hola'));`,
                    hint: "Para mayorNumero usa un let mayor = arr[0] y un for...of. Para vocales usa for...of + vocales.includes(letra).",
                    solution: [
                        { code: "function suma(a, b) { return a + b; }", explain: "" },
                        { code: "let mayor = arr[0]; for (let n of arr) if (n > mayor) mayor = n;", explain: "" },
                        { code: "for (let l of texto) if (vocales.includes(l)) contador++;", explain: "" }
                    ],
                    validate(code) {
                        try {
                            const fn = new Function(code + '; return typeof suma === "function" && typeof mayorNumero === "function" && typeof contarVocales === "function";')();
                            if (!fn) return false;
                            const fnSuma = new Function(code + '; return suma;')();
                            const fnMayor = new Function(code + '; return mayorNumero;')();
                            const fnVocales = new Function(code + '; return contarVocales;')();
                            return fnSuma(2, 3) === 5 && fnMayor([1, 2, 5, 3]) === 5 && fnVocales('Hola') === 2;
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e18",
                    title: "Funciones · Elementoss comunes, sumaPares y elevarCuadrado",
                    pts: 15,
                    desc: "Crea tres funciones usando métodos funcionales: <strong>elementosComunes(a, b)</strong> (filter + includes); <strong>sumaPares(nums)</strong> (forEach o filter + reduce); <strong>elevarCuadrado(nums)</strong> (map).",
                    starter: `function elementosComunes(array1, array2) {
  // usa filter e includes
}

function sumaPares(listaNumeros) {
  // suma los pares
}

function elevarCuadrado(listaNumeros) {
  // devuelve nuevo array con cada número al cuadrado
}

console.log(elementosComunes([1,2,3],[1,4,3]));
console.log(sumaPares([1,2,4,5,6]));
console.log(elevarCuadrado([1,2,3]));`,
                    hint: "elementosComunes: array1.filter(e => array2.includes(e)). elevarCuadrado: nums.map(n => n ** 2).",
                    solution: [
                        { code: "return array1.filter(e => array2.includes(e));", explain: "// elementosComunes" },
                        { code: "return nums.filter(n => n % 2 === 0).reduce((s, n) => s + n, 0);", explain: "// sumaPares" },
                        { code: "return listaNumeros.map(n => n ** 2);", explain: "// elevarCuadrado" }
                    ],
                    validate(code) {
                        try {
                            const fnC = new Function(code + '; return elementosComunes;')();
                            const fnP = new Function(code + '; return sumaPares;')();
                            const fnQ = new Function(code + '; return elevarCuadrado;')();
                            return JSON.stringify(fnC([1,2,3],[1,4,3])) === '[1,3]'
                                && fnP([1,2,4,5,6]) === 12
                                && JSON.stringify(fnQ([1,2,3])) === '[1,4,9]';
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e19",
                    title: "Funciones · invertirPalabras y factorial",
                    pts: 12,
                    desc: "Crea <strong>invertirPalabras(texto)</strong> que invierta el orden de las palabras (ej. <em>'hola que tal'</em> → <em>'tal que hola'</em>) y <strong>factorial(n)</strong> que calcule n! (ej. <em>factorial(5) → 120</em>).",
                    starter: `function invertirPalabras(texto) {
  // divide, invierte y vuelve a unir
}

function factorial(numero) {
  let resultado = 1;
  // for de 1 hasta numero multiplicando
  return resultado;
}

console.log(invertirPalabras("hola que tal"));
console.log(factorial(5));`,
                    hint: "invertirPalabras: texto.split(' ').reverse().join(' '). factorial: for (let i = 1; i <= numero; i++) resultado *= i;",
                    solution: [
                        { code: "return texto.split(' ').reverse().join(' ');", explain: "// invertirPalabras" },
                        { code: "for (let i = 1; i <= numero; i++) resultado *= i;", explain: "// factorial" }
                    ],
                    validate(code) {
                        try {
                            const fnI = new Function(code + '; return invertirPalabras;')();
                            const fnF = new Function(code + '; return factorial;')();
                            return fnI('hola que tal') === 'tal que hola' && fnF(5) === 120;
                        } catch { return false; }
                    }
                },
                // ── 06-objects.js ──
                {
                    id: "m1e20",
                    title: "Objetos · Crear, modificar e iterar",
                    pts: 12,
                    desc: "Crea un objeto con 3 propiedades (nombre, edad, ciudad). Accede a sus valores, añade una propiedad nueva, elimina una con <em>delete</em>, y recorre todas las propiedades con <em>for…in</em>.",
                    starter: `let objeto = {
  nombre: "Pepito",
  edad: 25,
  ciudad: "Vigo"
};

// Accede y muestra las propiedades
// Añade: objeto.profesion = "Programador"
// Elimina: delete objeto.edad
// Itera con for...in`,
                    hint: "Accede con obj.prop o obj['prop']. Itera con for (let clave in objeto) { console.log(clave, objeto[clave]); }",
                    solution: [
                        { code: "objeto.profesion = 'Programador';", explain: "// añadir propiedad" },
                        { code: "delete objeto.edad;", explain: "// eliminar propiedad" },
                        { code: "for (let clave in objeto) console.log(clave + ': ' + objeto[clave]);", explain: "// for...in" }
                    ],
                    validate(code) {
                        try {
                            return code.includes('delete') && code.includes('for') && code.includes('in');
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e21",
                    title: "Objetos · Métodos y this",
                    pts: 12,
                    desc: "Añade una función <em>saludar</em> al objeto que use <code>this</code> para mostrar: <em>'Hola, me llamo [nombre] y vivo en [ciudad]'</em>. Invócala.",
                    starter: `let objeto = {
  nombre: "Pepito",
  ciudad: "Vigo"
};

// Añade un método saludar que use this.nombre y this.ciudad
// Invoca objeto.saludar()`,
                    hint: "objeto.saludar = function() { console.log(\`Hola, me llamo \${this.nombre} y vivo en \${this.ciudad}\`); }",
                    solution: [
                        { code: "objeto.saludar = function() {", explain: "// función como propiedad" },
                        { code: "  console.log(\`Hola, me llamo \${this.nombre} y vivo en \${this.ciudad}\`);", explain: "// this referencia al objeto" },
                        { code: "};", explain: "" },
                        { code: "objeto.saludar();", explain: "// llamada al método" }
                    ],
                    validate(code) {
                        try {
                            return code.includes('this.nombre') && code.includes('this.ciudad') && code.includes('saludar');
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e22",
                    title: "Objetos · Comparación por referencia",
                    pts: 8,
                    desc: "Crea dos objetos con las mismas propiedades y compáralos con <em>==</em> y <em>===</em>. Muestra los resultados por consola y explica el resultado con un comentario.",
                    starter: `let obj1 = { id: 1, nombre: "Fulanito" };
let obj2 = { id: 1, nombre: "Fulanito" };

// ¿Son iguales?
console.log(obj1 == obj2);
console.log(obj1 === obj2);
// ¿Por qué?`,
                    hint: "Los objetos se comparan por referencia de memoria, no por valor. Aunque tengan el mismo contenido, son distintos objetos en memoria.",
                    solution: [
                        { code: "console.log(obj1 == obj2);   // false", explain: "// distintas referencias" },
                        { code: "console.log(obj1 === obj2);  // false", explain: "// idem con igualdad estricta" }
                    ],
                    validate(code) {
                        try {
                            return code.includes('===') && code.includes('==') && code.includes('obj');
                        } catch { return false; }
                    }
                }
            ]
            ],
            quiz: [
                { q: "¿Cuál es el resultado de: '5' === 5?", opts: ["true", "false", "error", "undefined"], ans: 1 },
                { q: "¿Qué devuelve typeof null?", opts: ["'null'", "'object'", "'undefined'", "null"], ans: 1 },
                { q: "¿Cuál método añade un elemento al FINAL de un array?", opts: [".shift()", ".push()", ".unshift()", ".pop()"], ans: 1 },
                { q: "¿Qué diferencia hay entre == y ===?", opts: ["Ninguna", "=== compara valor y tipo, == solo valor", "== compara valor y tipo, === solo valor", "=== es más lento"], ans: 1 },
                { q: "Un Set permite valores duplicados?", opts: ["Sí, siempre", "No, nunca", "Solo si son strings", "Solo si son números"], ans: 1 },
                { q: "¿Cuál es el resultado de [1,2,3].map(x => x * 2)?", opts: ["[1,2,3]", "[2,4,6]", "6", "undefined"], ans: 1 },
                { q: "¿Qué hace .filter() sobre un array?", opts: ["Lo modifica directamente", "Devuelve un nuevo array con los elementos que pasan el predicado", "Devuelve el primer elemento", "Suma los elementos"], ans: 1 },
                { q: "¿Cuál bucle se ejecuta SIEMPRE al menos una vez?", opts: ["for", "while", "do...while", "for...of"], ans: 2 }
            ]
        },

        // ═══════════════════════════════════════════
        //  MÓDULO 2 · DOM & ESTILOS
        // ═══════════════════════════════════════════
        {
            id: 2,
            title: "02 · DOM & Estilos",
            icon: "globe",
            theory: [
                {
                    title: "¿Qué es el DOM?",
                    icon: "tree-pine",
                    items: [
                        { bullet: "DOM", text: "Document Object Model. Representación del HTML como árbol de objetos que JS puede leer y modificar." },
                        { bullet: "document", text: "El objeto raíz. Punto de entrada para cualquier operación sobre la página." },
                        { bullet: "getElementById()", text: "document.getElementById('mi-id') → devuelve un único elemento o null." },
                        { bullet: "innerHTML", text: "Propiedad que lee o escribe el HTML interno de un elemento. ¡Cuidado con XSS!" },
                        { bullet: "textContent", text: "Como innerHTML pero solo texto plano, sin interpretar HTML. Más seguro." }
                    ]
                },
                {
                    title: "Selectores de Elementos",
                    icon: "target",
                    items: [
                        { bullet: "getElementById(id)", text: "Devuelve un ÚNICO elemento. El método más rápido." },
                        { bullet: "getElementsByTagName(tag)", text: "Devuelve HTMLCollection con todos los <tag>. Es 'viva' (se actualiza sola)." },
                        { bullet: "getElementsByClassName(cls)", text: "Devuelve HTMLCollection con todos los elementos de esa clase." },
                        { bullet: "querySelector(css)", text: "Devuelve el PRIMER elemento que coincide con el selector CSS. El más usado hoy." },
                        { bullet: "querySelectorAll(css)", text: "Devuelve NodeList con TODOS los que coincidan. Admite cualquier selector CSS." },
                        { bullet: "NodeList vs HTMLCollection", text: "querySelectorAll devuelve NodeList (estática). getElementsBy* devuelve HTMLCollection (viva)." }
                    ]
                },
                {
                    title: "Propiedades & Navegación",
                    icon: "compass",
                    items: [
                        { bullet: ".children", text: "Colección de hijos directos del elemento (solo elementos, no nodos de texto)." },
                        { bullet: ".parentElement", text: "Referencia al nodo padre directo." },
                        { bullet: ".classList", text: "Objeto para manipular clases: .add(), .remove(), .toggle(), .contains()." },
                        { bullet: ".classList.toggle()", text: "Si tiene la clase la quita; si no la tiene la pone. Perfecto para menús y estados on/off." },
                        { bullet: ".className", text: "Devuelve o establece el atributo class completo como string." },
                        { bullet: ".style.prop", text: "Modifica CSS en línea: elem.style.backgroundColor = 'red'. CSS camelCase en JS." },
                        { bullet: ".closest(css)", text: "Busca el ancestro más cercano que coincida con el selector. Sube por el árbol DOM." }
                    ]
                },
                {
                    title: "Formularios & Dataset",
                    icon: "list",
                    items: [
                        { bullet: ".value", text: "Propiedad fundamental de <input>, <textarea>, <select>. Obtiene el texto escrito por el usuario." },
                        { bullet: ".checked", text: "Para checkboxes y radios. Devuelve true/false." },
                        { bullet: "data-*", text: "Atributos HTML personalizados: <div data-user-id='5'>. Se acceden via .dataset." },
                        { bullet: ".dataset", text: "Objeto que agrupa los atributos data-*. data-user-id → dataset.userId (camelCase)." }
                    ]
                },
                {
                    title: "Crear & Insertar Elementos",
                    icon: "square-plus",
                    items: [
                        { bullet: "createElement(tag)", text: "document.createElement('p') — Crea el nodo EN MEMORIA. Aún no es visible." },
                        { bullet: ".textContent = …", text: "Asigna texto al elemento creado." },
                        { bullet: ".classList.add()", text: "Añade clases al elemento antes de insertarlo." },
                        { bullet: ".appendChild(nodo)", text: "Inserta el nodo al FINAL de los hijos del padre. Ahora es visible en la página." },
                        { bullet: ".prepend(nodo)", text: "Inserta al INICIO de los hijos." },
                        { bullet: ".remove()", text: "Elimina el propio elemento del DOM." },
                        { bullet: ".innerHTML +=", text: "Añade HTML dinámico (más rápido que crear nodos, pero hace re-parse completo)." }
                    ]
                }
            ],
            exercises: [
[
                // ── 01.html ──
                {
                    id: "m2e1",
                    title: "DOM · classList.add y estilo en línea",
                    pts: 10,
                    desc: "Selecciona el párrafo con id <em>mensaje</em> con <code>getElementById</code>. Añádele la clase <em>'resaltado'</em> con <code>classList.add()</code>. Luego aplica <em>borderRadius: '10px'</em> con la propiedad <code>.style</code>.",
                    starter: `const parrafo = document.getElementById('mensaje');
// 1. Añade la clase 'resaltado'
// 2. Aplica border-radius de 10px por .style`,
                    hint: "parrafo.classList.add('resaltado') y parrafo.style.borderRadius = '10px'.",
                    solution: [
                        { code: "parrafo.classList.add('resaltado');", explain: "// añade la clase CSS" },
                        { code: "parrafo.style.borderRadius = '10px';", explain: "// estilo en línea (camelCase)" }
                    ],
                    validate(code) {
                        return code.includes('classList') && code.includes('.add(') && code.includes('borderRadius') && code.includes('.style');
                    }
                },
                // ── 02.html ──
                {
                    id: "m2e2",
                    title: "DOM · Formulario, .value y backgroundColor",
                    pts: 12,
                    desc: "Dado un formulario con id <em>form1</em> y dos inputs (nombre, apellidos), lee sus valores con <code>.value</code>. Muéstralos en consola y el nombre completo con un template literal. Cambia el color de fondo del fieldset con id <em>grupo-datos</em>.",
                    starter: `const formulario = document.getElementById('form1');
const varNombre = formulario.nombre.value;
const varApellidos = formulario.apellidos.value;

// 1. Muestra nombre y apellidos en consola
// 2. Muestra el nombre completo con template literal
// 3. Cambia backgroundColor del elemento con id 'grupo-datos'`,
                    hint: "console.log(varNombre), console.log(varApellidos), console.log(\`Nombre completo: \${varNombre} \${varApellidos}\`), document.getElementById('grupo-datos').style.backgroundColor = 'lightblue'",
                    solution: [
                        { code: "console.log(varNombre);", explain: "// nombre del input" },
                        { code: "console.log(\`Nombre completo: \${varNombre} \${varApellidos}\`);", explain: "// template literal" },
                        { code: "document.getElementById('grupo-datos').style.backgroundColor = 'lightblue';", explain: "// estilo en línea" }
                    ],
                    validate(code) {
                        return code.includes('.value') && code.includes('backgroundColor') && code.includes('`');
                    }
                },
                // ── 03.html ──
                {
                    id: "m2e3",
                    title: "DOM · classList.toggle para seleccionar artículo",
                    pts: 10,
                    desc: "Selecciona el artículo con id <em>'dos'</em> y haz toggle de la clase <em>'seleccionado'</em> sobre él usando <code>classList.toggle()</code>.",
                    starter: `const articulo = document.getElementById('dos');
// toggle de la clase 'seleccionado'`,
                    hint: "articulo.classList.toggle('seleccionado')",
                    solution: [
                        { code: "articulo.classList.toggle('seleccionado');", explain: "// añade si no tiene, quita si tiene" }
                    ],
                    validate(code) {
                        return code.includes('getElementById') && code.includes('toggle') && code.includes("'seleccionado'");
                    }
                },
                // ── 04.html ──
                {
                    id: "m2e4",
                    title: "DOM · querySelectorAll + forEach",
                    pts: 12,
                    desc: "Selecciona todos los elementos con clase <em>.especial</em> con <code>querySelectorAll</code>. Usa <code>forEach</code> para añadirles la clase <em>'seleccionado'</em> y concatenar el texto <em>' seleccionado'</em> a su innerHTML.",
                    starter: `const parrafosEspeciales = document.querySelectorAll('.especial');

// forEach → classList.add('seleccionado') e innerHTML += ' seleccionado'`,
                    hint: "parrafosEspeciales.forEach(p => { p.classList.add('seleccionado'); p.innerHTML += ' seleccionado'; })",
                    solution: [
                        { code: "parrafosEspeciales.forEach(p => {", explain: "" },
                        { code: "  p.classList.add('seleccionado');", explain: "// añade clase" },
                        { code: "  p.innerHTML += ' seleccionado';", explain: "// modifica texto" },
                        { code: "});", explain: "" }
                    ],
                    validate(code) {
                        return code.includes('querySelectorAll') && code.includes('forEach') && code.includes('classList') && code.includes('innerHTML');
                    }
                },
                // ── 05.html ──
                {
                    id: "m2e5",
                    title: "DOM · querySelectorAll + forEach + classList.remove",
                    pts: 12,
                    desc: "Selecciona todos los elementos <em>.especial</em>. Añade la clase <em>'marcado'</em> a todos con forEach. Luego elimina la clase <em>'marcado'</em> únicamente del primer elemento.",
                    starter: `const parrafosEspeciales = document.querySelectorAll('.especial');

// forEach → classList.add('marcado') a todos

// Al primero: classList.remove('marcado')`,
                    hint: "parrafosEspeciales.forEach(p => p.classList.add('marcado')); parrafosEspeciales[0].classList.remove('marcado');",
                    solution: [
                        { code: "parrafosEspeciales.forEach(p => p.classList.add('marcado'));", explain: "// a todos" },
                        { code: "parrafosEspeciales[0].classList.remove('marcado');", explain: "// quita del primero" }
                    ],
                    validate(code) {
                        return code.includes('forEach') && code.includes('.add(') && code.includes('.remove(') && code.includes('[0]');
                    }
                },
                // ── 06.html ──
                {
                    id: "m2e6",
                    title: "DOM · dataset con filas de tabla",
                    pts: 12,
                    desc: "Selecciona todas las filas del tbody con <code>querySelectorAll('tbody tr')</code>. Para cada fila muestra su <code>dataset.idProducto</code>, el textContent de la segunda celda (índice 1), y aplica <em>height: '100px'</em> y <em>cursor: 'pointer'</em>.",
                    starter: `const filas = document.querySelectorAll('tbody tr');

filas.forEach(fila => {
  // Muestra dataset.idProducto
  // Muestra el texto de la 2ª celda: fila.children[1].textContent
  // Aplica height y cursor por .style
});`,
                    hint: "fila.dataset.idProducto, fila.children[1].textContent, fila.style.height = '100px', fila.style.cursor = 'pointer'.",
                    solution: [
                        { code: "console.log(fila.dataset.idProducto);", explain: "// data-id-producto → dataset.idProducto" },
                        { code: "console.log(fila.children[1].textContent);", explain: "// segunda celda" },
                        { code: "fila.style.height = '100px';", explain: "" },
                        { code: "fila.style.cursor = 'pointer';", explain: "" }
                    ],
                    validate(code) {
                        return code.includes('dataset') && code.includes('.children') && code.includes('.style');
                    }
                },
                // ── 07.html ──
                {
                    id: "m2e7",
                    title: "DOM · Generación dinámica de contenido con dataset",
                    pts: 15,
                    desc: "Selecciona todas las secciones. Filtra las que tienen <code>dataset.destacado === 'true'</code>. Construye un resumen con title y número de párrafos de cada una y muéstralo en el div con id <em>'resultado'</em> usando <code>innerHTML</code>. Añade la clase <em>'resumen'</em>.",
                    starter: `const secciones = document.querySelectorAll('section');
let totalDestacadas = 0;
let resumenTexto = '';

secciones.forEach(seccion => {
  if (seccion.dataset.destacado === 'true') {
    totalDestacadas++;
    // Obtén el título con querySelector('h2').textContent
    // Cuenta los párrafos con querySelectorAll('p').length
    // Construye resumenTexto
  }
});

const resultado = document.getElementById('resultado');
// resultado.innerHTML = ...
// resultado.classList.add('resumen')`,
                    hint: "seccion.querySelector('h2').textContent y seccion.querySelectorAll('p').length",
                    solution: [
                        { code: "const titulo = seccion.querySelector('h2').textContent;", explain: "// título de la sección" },
                        { code: "const nParrafos = seccion.querySelectorAll('p').length;", explain: "// contar párrafos" },
                        { code: "resultado.innerHTML = \`<h3>Resumen</h3>...\`;", explain: "// insertar HTML" },
                        { code: "resultado.classList.add('resumen');", explain: "// añadir clase" }
                    ],
                    validate(code) {
                        return code.includes('dataset') && code.includes('querySelector') && code.includes('innerHTML') && code.includes('classList');
                    }
                }
            ]
            ],
            quiz: [
                { q: "¿Qué devuelve querySelector si no encuentra el elemento?", opts: ["[]", "undefined", "null", "0"], ans: 2 },
                { q: "¿Qué hace classList.toggle('x')?", opts: ["Siempre añade x", "Siempre elimina x", "Añade si no existe, elimina si existe", "No hace nada"], ans: 2 },
                { q: "¿Cómo se accede a data-user-id en JS?", opts: ["elem['data-user-id']", "elem.dataset.userId", "elem.dataUserId", "elem.getAttribute('user-id')"], ans: 1 },
                { q: "¿Cuál selector devuelve TODOS los coincidentes?", opts: ["querySelector", "getElementById", "querySelectorAll", "getElementsById"], ans: 2 },
                { q: "¿Qué propiedad lee el texto de un <input>?", opts: [".textContent", ".innerHTML", ".value", ".text"], ans: 2 },
                { q: "¿Qué método inserta un nodo al final de los hijos?", opts: [".prepend()", ".appendChild()", ".insertBefore()", ".add()"], ans: 1 }
            ]
        },

        // ═══════════════════════════════════════════
        //  MÓDULO 3 · EVENTOS & DINAMISMO
        // ═══════════════════════════════════════════
        {
            id: 3,
            title: "03 · Eventos & Dinamismo",
            icon: "target",
            theory: [
                {
                    title: "Formas de Asignar Eventos",
                    icon: "mouse-pointer-click",
                    items: [
                        { bullet: "Atributo HTML onclick=", text: "<button onclick='fn()'> — Obsoleto. Mezcla HTML y JS. Evitar." },
                        { bullet: "Propiedad .onclick", text: "elem.onclick = () => {} — Solo permite UN manejador. El segundo sobreescribe al primero." },
                        { bullet: "addEventListener()", text: "elem.addEventListener('click', fn) — El estándar. Permite múltiples listeners en el mismo elemento." },
                        { bullet: "removeEventListener()", text: "Elimina un listener previamente añadido. La función debe ser la misma referencia." }
                    ]
                },
                {
                    title: "El Objeto Event",
                    icon: "radio",
                    items: [
                        { bullet: "event", text: "El navegador pasa automáticamente el objeto Event al manejador: elem.addEventListener('click', (event) => {})." },
                        { bullet: "event.target", text: "El elemento EXACTO que disparó el evento (no necesariamente el que tiene el listener)." },
                        { bullet: "event.currentTarget", text: "El elemento que tiene el listener (siempre el mismo)." },
                        { bullet: "event.key", text: "En keydown/keyup: nombre de la tecla pulsada ('Enter', 'Escape', 'a', 'ArrowUp'…)." },
                        { bullet: "event.preventDefault()", text: "Cancela el comportamiento por defecto del navegador (submit de form, seguir enlace…)." },
                        { bullet: "event.stopPropagation()", text: "Detiene la propagación del evento hacia elementos padre (evita bubbling)." }
                    ]
                },
                {
                    title: "Tipos de Eventos",
                    icon: "list",
                    items: [
                        { bullet: "click", text: "Click con el ratón. El más común." },
                        { bullet: "mouseenter / mouseleave", text: "El puntero entra o sale del área del elemento." },
                        { bullet: "mousemove", text: "El puntero se mueve sobre el elemento." },
                        { bullet: "keydown / keyup", text: "Se presiona o se suelta una tecla." },
                        { bullet: "submit", text: "El formulario se envía. Usar con preventDefault() para manejar el envío en JS." },
                        { bullet: "change", text: "El valor de un input, select o checkbox cambia (al perder el foco)." },
                        { bullet: "input", text: "Se dispara en tiempo real, cada vez que el usuario escribe en un campo." },
                        { bullet: "DOMContentLoaded", text: "El HTML ha sido parseado y el DOM está listo, sin esperar imágenes/CSS." }
                    ]
                },
                {
                    title: "Delegación de Eventos",
                    icon: "share-2",
                    items: [
                        { bullet: "¿Qué es?", text: "Poner el listener en el PADRE en lugar de en cada hijo. Funciona gracias al 'bubbling' (el evento sube por el árbol)." },
                        { bullet: "¿Por qué?", text: "Mucho más eficiente: un solo listener cubre todos los hijos actuales Y futuros (elementos creados dinámicamente)." },
                        { bullet: "event.target", text: "Dentro del listener del padre, event.target identifica exactamente qué hijo fue clickado." },
                        { bullet: ".closest(css)", text: "elem.closest('.tarjeta') — Busca el ancestro más cercano que coincida. Perfecto para delegación." },
                        { bullet: "Ejemplo patrón", text: "lista.addEventListener('click', e => { const item = e.target.closest('li'); if (item) item.remove(); })." }
                    ]
                },
                {
                    title: "DOM Dinámico — Patrones",
                    icon: "square-plus",
                    items: [
                        { bullet: "Patrón crear-configurar-insertar", text: "1. createElement() 2. Asignar textContent/className/atributos 3. appendChild() al contenedor." },
                        { bullet: "innerHTML = template", text: "Reemplaza todo el contenido con HTML generado. Útil para listas completas. Perderás los listeners anteriores." },
                        { bullet: "innerHTML +=", text: "Añade HTML. Hace re-parse del DOM completo del elemento, ineficiente en bucles." },
                        { bullet: "elem.remove()", text: "Elimina el elemento del DOM directamente desde él mismo." },
                        { bullet: "parentElement.removeChild(elem)", text: "Elimina un hijo específico desde el padre." }
                    ]
                }
            ],
            exercises: [
[
                // ── 01.html ──
                {
                    id: "m3e1",
                    title: "Eventos · addEventListener y classList.toggle",
                    pts: 15,
                    desc: "Selecciona la caja con id <em>'especial'</em>. Añade un listener de <em>click</em>. Al hacer click debe: mostrar el texto <em>'click'</em> en consola, mostrar el objeto evento completo y hacer <em>toggle</em> de la clase <em>'activa'</em>.",
                    starter: `const caja = document.getElementById('especial');

caja.addEventListener('click', (event) => {
  // 1. console.log('click')
  // 2. console.log(event)
  // 3. toggle de la clase 'activa'
});`,
                    hint: "console.log('click'), console.log(event) y caja.classList.toggle('activa').",
                    solution: [
                        { code: "caja.addEventListener('click', (event) => {", explain: "// listener de click" },
                        { code: "  console.log('click');", explain: "" },
                        { code: "  console.log(event);", explain: "// objeto evento completo" },
                        { code: "  caja.classList.toggle('activa');", explain: "// alterna la clase" },
                        { code: "});", explain: "" }
                    ],
                    validate(code) {
                        return code.includes('addEventListener') && code.includes('click') && code.includes('toggle') && code.includes("'activa'");
                    }
                },
                // ── 02.html ──
                {
                    id: "m3e2",
                    title: "Eventos · mouseenter/mouseleave y closest()",
                    pts: 20,
                    desc: "Selecciona todos los párrafos. Para cada uno, añade listeners de <em>mouseenter</em> y <em>mouseleave</em>. Usa <code>p.closest('article')</code> para acceder al artículo padre y añadirle/quitarle la clase <em>'seleccionado'</em>.",
                    starter: `const todosParrafos = document.querySelectorAll('p');

todosParrafos.forEach((p) => {
  const articulo = p.closest('article');

  p.addEventListener('mouseenter', () => {
    // articulo.classList.add('seleccionado')
  });

  p.addEventListener('mouseleave', () => {
    // articulo.classList.remove('seleccionado')
  });
});`,
                    hint: "p.closest('article') sube por el árbol DOM hasta encontrar el <article> padre.",
                    solution: [
                        { code: "const articulo = p.closest('article');", explain: "// ancestro más cercano" },
                        { code: "p.addEventListener('mouseenter', () => articulo.classList.add('seleccionado'));", explain: "" },
                        { code: "p.addEventListener('mouseleave', () => articulo.classList.remove('seleccionado'));", explain: "" }
                    ],
                    validate(code) {
                        return code.includes('closest') && code.includes('mouseenter') && code.includes('mouseleave') && code.includes('forEach');
                    }
                }
            ]
            ],
            quiz: [
                { q: "¿Cuántos listeners permite addEventListener en un mismo evento?", opts: ["Solo 1", "Solo 2", "Múltiples", "Depende del navegador"], ans: 2 },
                { q: "¿Qué hace event.preventDefault()?", opts: ["Detiene la propagación", "Cancela el comportamiento por defecto del navegador", "Elimina el listener", "Pausa JS"], ans: 1 },
                { q: "¿Qué es la 'delegación de eventos'?", opts: ["Añadir listeners a cada hijo", "Poner el listener en el padre para cubrir hijos actuales y futuros", "Un método de JS", "Un tipo de evento"], ans: 1 },
                { q: "¿Qué propiedad del evento indica el elemento EXACTO que lo disparó?", opts: ["event.currentTarget", "event.source", "event.target", "event.element"], ans: 2 },
                { q: "¿Qué evento se dispara en tiempo real al escribir en un input?", opts: ["change", "keydown", "input", "submit"], ans: 2 },
                { q: "¿Qué hace elem.closest('.clase')?", opts: ["Selecciona el hijo más cercano", "Busca el ancestro más cercano que coincida con el selector", "Busca hermanos", "Selecciona el primer hijo"], ans: 1 }
            ]
        }
    ],

    errors: [
        {
            title: "Comparar objetos por valor con ===",
            desc: "En JS, los objetos y arrays se comparan por REFERENCIA, no por valor. Dos objetos con el mismo contenido no son iguales con ===.",
            code: `{} === {}  // ❌ false — distintas referencias
[] === []  // ❌ false — ídem
// ✅ Comparar contenido:
JSON.stringify(a) === JSON.stringify(b)`
        },
        {
            title: "Usar var en lugar de let/const",
            desc: "var tiene scope de función y se eleva (hoisting), lo que puede causar valores inesperados. Usa siempre let o const.",
            code: `if (true) {
  var x = 1;  // ❌ se filtra fuera del bloque
  let y = 2;  // ✅ solo existe dentro del if
}
console.log(x); // 1 (inesperado)
console.log(y); // ReferenceError ✅`
        },
        {
            title: "Olvidar usar .value en formularios",
            desc: "document.getElementById('input') devuelve el ELEMENTO, no su contenido. Siempre añade .value para leer lo que el usuario escribe.",
            code: `const campo = document.getElementById('nombre');
console.log(campo);       // ❌ objeto HTMLElement
console.log(campo.value); // ✅ texto del input`
        },
        {
            title: "Modificar array mientras se itera con for",
            desc: "Modificar el array que estás recorriendo con un for de índices puede causar saltos o elementos repetidos.",
            code: `// ❌ Peligroso: modifica mientras itera
for (let i = 0; i < arr.length; i++) {
  arr.splice(i, 1); // cambia length → salta elementos
}
// ✅ Itera sobre una copia
[...arr].forEach(item => { /* ... */ })`
        },
        {
            title: "event.target vs event.currentTarget",
            desc: "En delegación de eventos, event.target es el elemento clickado (puede ser un hijo pequeño), mientras que event.currentTarget es siempre el elemento que tiene el listener.",
            code: `lista.addEventListener('click', (e) => {
  console.log(e.target);        // el li o el span dentro del li
  console.log(e.currentTarget); // siempre el ul con el listener
  
  // ✅ Usa closest para llegar al li deseado:
  const item = e.target.closest('li');
});`
        },
        {
            title: "Olvidar preventDefault en formularios",
            desc: "Sin preventDefault(), el formulario recarga la página al hacer submit y pierdes todos los datos del DOM.",
            code: `form.addEventListener('submit', (e) => {
  // ❌ Sin esto, la página se recarga:
  // e.preventDefault();
  
  // ✅ Siempre al principio del handler:
  e.preventDefault();
  console.log(inputNombre.value);
});`
        },
        {
            title: "querySelectorAll no es un Array real",
            desc: "querySelectorAll devuelve una NodeList, no un Array. Aunque tiene .forEach(), no tiene .map() ni .filter(). Convierte primero si los necesitas.",
            code: `const items = document.querySelectorAll('.item');
items.map(i => i.textContent); // ❌ TypeError: items.map is not a function

// ✅ Convierte primero:
Array.from(items).map(i => i.textContent);
// o usa el spread:
[...items].filter(i => i.classList.contains('activo'));`
        },
        {
            title: "Perder listeners con innerHTML",
            desc: "Al asignar innerHTML, se destruye y recrea todo el HTML interno. Los event listeners previos se pierden.",
            code: `const btn = contenedor.querySelector('button');
btn.addEventListener('click', fn); // ✅ añadido

contenedor.innerHTML = '<button>Nuevo</button>'; // ❌ el listener se pierde
// El nuevo botón no tiene listener

// ✅ Usa appendChild para añadir SIN reemplazar todo:`
        }
    ]
};
