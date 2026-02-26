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
                // ── 01-strings ──
                {
                    id: "m1e1",
                    title: "Strings — Concatenación e Interpolación",
                    pts: 10,
                    desc: "Escribe una función <strong>slugify(text)</strong> que reciba un string y devuelva la versión 'slug': todo en minúsculas y los espacios reemplazados por guiones. Ej: <em>slugify('Hola Mundo')</em> → <em>'hola-mundo'</em>.",
                    starter: `function slugify(text) {
  // 1. Pasa a minúsculas
  // 2. Sustituye espacios por '-'
  return '';
}
console.log(slugify('Hola Mundo'));`,
                    hint: "Usa .toLowerCase() y luego .replaceAll(' ', '-') o .replace(/ /g, '-').",
                    solution: [
                        { code: "text.toLowerCase()", explain: "// convierte a minúsculas" },
                        { code: ".replaceAll(' ', '-')", explain: "// sustituye todos los espacios" }
                    ],
                    validate(code) {
                        try {
                            const fn = new Function(code + '; return slugify;')();
                            return fn('Hola Mundo') === 'hola-mundo' && fn('JS es genial') === 'js-es-genial';
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e2",
                    title: "Fibonacci: N primeros términos",
                    pts: 15,
                    desc: "Escribe una función <strong>fibonacci(n)</strong> que devuelva un array con los primeros n términos de la serie de Fibonacci. Ej: fibonacci(6) → [0,1,1,2,3,5].",
                    starter: `function fibonacci(n) {
  // La serie empieza en [0, 1]
  // Cada término es la suma de los dos anteriores
  return [];
}
console.log(fibonacci(6));`,
                    hint: "Inicializa el array con [0,1] y en un bucle for empezando en i=2, añade arr[i-1] + arr[i-2].",
                    solution: [
                        { code: "let arr = [0, 1]", explain: "// base de la serie" },
                        { code: "for (let i = 2; i < n; i++)", explain: "// itera desde el tercero" },
                        { code: "arr.push(arr[i-1] + arr[i-2])", explain: "// suma los dos anteriores" }
                    ],
                    validate(code) {
                        try {
                            const fn = new Function(code + '; return fibonacci;')();
                            const r = fn(6);
                            return JSON.stringify(r) === JSON.stringify([0, 1, 1, 2, 3, 5]);
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e3",
                    title: "Filtrar duplicados con Set",
                    pts: 10,
                    desc: "Escribe una función <strong>unico(arr)</strong> que reciba un array y devuelva un nuevo array sin elementos repetidos, usando <em>Set</em>. Ej: unico([1,2,2,3,1]) → [1,2,3].",
                    starter: `function unico(arr) {
  // Usa new Set() y Array.from()
}
console.log(unico([1, 2, 2, 3, 1]));`,
                    hint: "Un Set elimina duplicados automáticamente. Luego convierte con Array.from(set).",
                    solution: [
                        { code: "return Array.from(new Set(arr));", explain: "// Set elimina dups, Array.from lo convierte" }
                    ],
                    validate(code) {
                        try {
                            const fn = new Function(code + '; return unico;')();
                            return JSON.stringify(fn([1, 2, 2, 3, 1])) === JSON.stringify([1, 2, 3]);
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e4",
                    title: "Vocales en un string",
                    pts: 10,
                    desc: "Escribe una función <strong>contarVocales(texto)</strong> que devuelva cuántas vocales (a,e,i,o,u — mayúsculas y minúsculas) tiene el string. Ej: contarVocales('Hola') → 2.",
                    starter: `function contarVocales(texto) {
  const vocales = 'aeiouAEIOU';
  let contador = 0;
  // Recorre cada letra y comprueba si es vocal
  return contador;
}
console.log(contarVocales('Hola que tal'));`,
                    hint: "Usa for...of para recorrer las letras y vocales.includes(letra) para comprobar.",
                    solution: [
                        { code: "for (let letra of texto)", explain: "// itera cada carácter" },
                        { code: "if (vocales.includes(letra)) contador++", explain: "// comprueba si es vocal" }
                    ],
                    validate(code) {
                        try {
                            const fn = new Function(code + '; return contarVocales;')();
                            return fn('Hola') === 2 && fn('JavaScript') === 3;
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e5",
                    title: "Suma de pares con filter",
                    pts: 12,
                    desc: "Escribe una función <strong>sumaPares(nums)</strong> que devuelva la suma de todos los números PARES del array. Ej: sumaPares([1,2,4,5,6]) → 12.",
                    starter: `function sumaPares(nums) {
  // Filtra los pares y súmalos
  return 0;
}
console.log(sumaPares([1, 2, 4, 5, 6]));`,
                    hint: "Usa .filter(n => n % 2 === 0) para quedarte sólo con los pares, y después .reduce para sumarlos.",
                    solution: [
                        { code: "nums.filter(n => n % 2 === 0)", explain: "// solo pares" },
                        { code: ".reduce((acc, n) => acc + n, 0)", explain: "// acumula la suma" }
                    ],
                    validate(code) {
                        try {
                            const fn = new Function(code + '; return sumaPares;')();
                            return fn([1, 2, 4, 5, 6]) === 12 && fn([1, 3, 5]) === 0;
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e6",
                    title: "Invertir palabras de un string",
                    pts: 12,
                    desc: "Escribe una función <strong>invertirPalabras(texto)</strong> que devuelva el mismo texto con el orden de las palabras invertido. Ej: invertirPalabras('hola que tal') → 'tal que hola'.",
                    starter: `function invertirPalabras(texto) {
  // Divide, invierte y vuelve a unir
  return '';
}
console.log(invertirPalabras('hola que tal'));`,
                    hint: "Usa .split(' ') para obtener un array, .reverse() para invertirlo y .join(' ') para unirlo.",
                    solution: [
                        { code: "texto.split(' ')", explain: "// divide en palabras" },
                        { code: ".reverse()", explain: "// invierte el array" },
                        { code: ".join(' ')", explain: "// une con espacios" }
                    ],
                    validate(code) {
                        try {
                            const fn = new Function(code + '; return invertirPalabras;')();
                            return fn('hola que tal') === 'tal que hola';
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e7",
                    title: "¿Es primo?",
                    pts: 15,
                    desc: "Escribe una función <strong>esPrimo(n)</strong> que devuelva true si n es un número primo, y false en caso contrario. Un primo es divisible sólo por 1 y por sí mismo.",
                    starter: `function esPrimo(n) {
  if (n <= 1) return false;
  // Comprueba si algún número entre 2 y n-1 lo divide
  return true;
}
console.log(esPrimo(7));  // true
console.log(esPrimo(9));  // false`,
                    hint: "Usa un bucle for desde 2 hasta n-1. Si n % i === 0 para algún i, no es primo.",
                    solution: [
                        { code: "for (let i = 2; i < n; i++)", explain: "// prueba divisores" },
                        { code: "if (n % i === 0) return false", explain: "// divisible → no primo" },
                        { code: "return true", explain: "// ningún divisor encontrado" }
                    ],
                    validate(code) {
                        try {
                            const fn = new Function(code + '; return esPrimo;')();
                            return fn(7) === true && fn(9) === false && fn(1) === false && fn(2) === true;
                        } catch { return false; }
                    }
                },
                {
                    id: "m1e8",
                    title: "Factorial de un número",
                    pts: 10,
                    desc: "Escribe una función <strong>factorial(n)</strong> que calcule n! (5! = 5×4×3×2×1 = 120). Ej: factorial(5) → 120.",
                    starter: `function factorial(n) {
  let resultado = 1;
  // Multiplica desde 1 hasta n
  return resultado;
}
console.log(factorial(5));`,
                    hint: "Usa un bucle for desde 1 hasta n y multiplica: resultado *= i.",
                    solution: [
                        { code: "for (let i = 1; i <= n; i++)", explain: "// de 1 a n" },
                        { code: "resultado *= i", explain: "// acumula el producto" }
                    ],
                    validate(code) {
                        try {
                            const fn = new Function(code + '; return factorial;')();
                            return fn(5) === 120 && fn(0) === 1 && fn(3) === 6;
                        } catch { return false; }
                    }
                }
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
                {
                    id: "m2e1",
                    title: "Añadir clase con classList",
                    pts: 10,
                    desc: "Selecciona el párrafo con id <em>mensaje</em> y añádele la clase <em>resaltado</em> usando <strong>classList.add()</strong>. Después, usa <em>style</em> para aplicar <em>borderRadius: '10px'</em>.",
                    starter: `// Hay un párrafo con id="mensaje" en la página
const parrafo = document.getElementById('mensaje');

// 1. Añade la clase 'resaltado'

// 2. Aplica border-radius de 10px por style
`,
                    hint: "parrafo.classList.add('resaltado') y parrafo.style.borderRadius = '10px'.",
                    solution: [
                        { code: "parrafo.classList.add('resaltado')", explain: "// añade la clase CSS" },
                        { code: "parrafo.style.borderRadius = '10px'", explain: "// estilo en línea (camelCase)" }
                    ],
                    validate(code) {
                        return code.includes('classList') && code.includes('add') && code.includes('borderRadius') && code.includes('.style');
                    }
                },
                {
                    id: "m2e2",
                    title: "querySelector + cambio de texto",
                    pts: 10,
                    desc: "Usa <strong>querySelector</strong> para seleccionar el primer elemento con clase <em>.titulo</em> y cambia su <em>textContent</em> a 'JS Mastery'.",
                    starter: `// Selecciona el primer .titulo
const titulo = /* tu selector aquí */;

// Cambia el texto
`,
                    hint: "document.querySelector('.titulo') y luego titulo.textContent = 'JS Mastery'.",
                    solution: [
                        { code: "document.querySelector('.titulo')", explain: "// primer .titulo" },
                        { code: "titulo.textContent = 'JS Mastery'", explain: "// cambia el texto" }
                    ],
                    validate(code) {
                        return code.includes('querySelector') && code.includes('textContent') && code.trim().length > 20;
                    }
                },
                {
                    id: "m2e3",
                    title: "Toggle de clase",
                    pts: 12,
                    desc: "Escribe código que haga <strong>toggle</strong> de la clase <em>activa</em> sobre el elemento con id <em>caja</em> cuando se hace click en el botón con id <em>btn</em>.",
                    starter: `const caja = document.getElementById('caja');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  // toggle de la clase 'activa' en caja
});`,
                    hint: "Dentro del listener, usa caja.classList.toggle('activa').",
                    solution: [
                        { code: "caja.classList.toggle('activa')", explain: "// añade si no tiene, quita si tiene" }
                    ],
                    validate(code) {
                        return code.includes('addEventListener') && code.includes('toggle') && code.includes('activa') && code.includes('classList');
                    }
                },
                {
                    id: "m2e4",
                    title: "Leer valor de un input",
                    pts: 10,
                    desc: "Cuando el usuario haga click en el botón con id <em>btn-leer</em>, muestra en consola el valor del input con id <em>nombre</em>.",
                    starter: `const input = document.getElementById('nombre');
const btn = document.getElementById('btn-leer');

btn.addEventListener('click', () => {
  // Lee el valor del input y muéstralo en consola
});`,
                    hint: "input.value contiene el texto que el usuario ha escrito.",
                    solution: [
                        { code: "console.log(input.value)", explain: "// .value lee el texto del input" }
                    ],
                    validate(code) {
                        return code.includes('.value') && code.includes('addEventListener') && code.includes('click');
                    }
                },
                {
                    id: "m2e5",
                    title: "Crear elemento dinámico",
                    pts: 15,
                    desc: "Crea un `<li>` con el texto 'Nuevo elemento', añádele la clase <em>item</em> y agrégalo al `<ul>` con id <em>lista</em>.",
                    starter: `const lista = document.getElementById('lista');

// 1. Crea el elemento li
// 2. Asigna el texto
// 3. Añade la clase 'item'
// 4. Inserta en la lista`,
                    hint: "document.createElement('li'), luego .textContent, .classList.add(), y lista.appendChild().",
                    solution: [
                        { code: "const li = document.createElement('li')", explain: "// crea en memoria" },
                        { code: "li.textContent = 'Nuevo elemento'", explain: "// asigna texto" },
                        { code: "li.classList.add('item')", explain: "// añade clase" },
                        { code: "lista.appendChild(li)", explain: "// inserta en el DOM" }
                    ],
                    validate(code) {
                        return code.includes('createElement') && code.includes('appendChild') && code.includes('textContent');
                    }
                },
                {
                    id: "m2e6",
                    title: "querySelectorAll + forEach",
                    pts: 12,
                    desc: "Selecciona todos los elementos con clase <em>.carta</em> y añade la clase <em>visible</em> a cada uno usando <strong>querySelectorAll</strong> y <strong>forEach</strong>.",
                    starter: `const cartas = document.querySelectorAll('.carta');

// Itera y añade la clase 'visible' a cada una
`,
                    hint: "querySelectorAll('.carta') devuelve una NodeList. Usa .forEach() para iterar.",
                    solution: [
                        { code: "cartas.forEach(carta => carta.classList.add('visible'))", explain: "// itera con forEach" }
                    ],
                    validate(code) {
                        return code.includes('querySelectorAll') && code.includes('forEach') && code.includes('classList');
                    }
                },
                {
                    id: "m2e7",
                    title: "Atributos dataset",
                    pts: 10,
                    desc: "Dado un elemento con <em>data-user-id='42'</em>, lee el valor de ese atributo usando <strong>dataset</strong> y muéstralo en consola.",
                    starter: `const elem = document.querySelector('[data-user-id]');

// Lee el atributo data-user-id
console.log(/* ... */);`,
                    hint: "Los atributos data-* se convierten a camelCase en .dataset. data-user-id → dataset.userId.",
                    solution: [
                        { code: "console.log(elem.dataset.userId)", explain: "// data-user-id → dataset.userId" }
                    ],
                    validate(code) {
                        return code.includes('dataset') && code.trim().length > 20;
                    }
                }
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
                {
                    id: "m3e1",
                    title: "Caja interactiva con toggle",
                    pts: 15,
                    desc: "Añade un listener de <em>click</em> a la caja con id <em>especial</em>. Cuando se haga click, debe mostrar <em>'click detectado'</em> en consola y hacer toggle de la clase <em>activa</em>.",
                    starter: `const caja = document.getElementById('especial');

caja.addEventListener('click', (event) => {
  // 1. console.log del evento
  // 2. toggle de la clase 'activa'
});`,
                    hint: "console.log(event) y luego caja.classList.toggle('activa').",
                    solution: [
                        { code: "caja.addEventListener('click', (event) => {", explain: "// listener estándar" },
                        { code: "  console.log(event);", explain: "// objeto evento completo" },
                        { code: "  caja.classList.toggle('activa');", explain: "// alterna la clase" }
                    ],
                    validate(code) {
                        return code.includes('addEventListener') && code.includes('toggle') && code.includes('activa') && code.includes('classList');
                    }
                },
                {
                    id: "m3e2",
                    title: "Delegación de eventos en lista",
                    pts: 20,
                    desc: "Tienes un <em>ul</em> con id <em>lista</em>. Añade UN SOLO listener en <em>ul</em> que elimine el <em>li</em> clickado usando delegación de eventos y <strong>event.target.closest('li')</strong>.",
                    starter: `const lista = document.getElementById('lista');

// Un solo listener en el padre
lista.addEventListener('click', (event) => {
  // Encuentra el li más cercano al elemento clickado
  // Si existe, elimínalo
});`,
                    hint: "Usa event.target.closest('li') para encontrar el li. Si existe, llama .remove() sobre él.",
                    solution: [
                        { code: "const li = event.target.closest('li')", explain: "// sube hasta el li" },
                        { code: "if (li) li.remove()", explain: "// solo si existe" }
                    ],
                    validate(code) {
                        return code.includes('closest') && code.includes('remove') && code.includes('addEventListener') && code.includes('click');
                    }
                },
                {
                    id: "m3e3",
                    title: "Formulario con preventDefault",
                    pts: 15,
                    desc: "Captura el evento <em>submit</em> del formulario con id <em>formulario</em>. Usa <strong>preventDefault()</strong> para evitar la recarga, lee el valor del input con id <em>campo</em> y muéstralo en consola.",
                    starter: `const form = document.getElementById('formulario');
const campo = document.getElementById('campo');

form.addEventListener('submit', (event) => {
  // Evita la recarga de página
  // Lee el valor del campo y muéstralo
});`,
                    hint: "event.preventDefault() cancela el submit. Luego console.log(campo.value).",
                    solution: [
                        { code: "event.preventDefault()", explain: "// cancela el comportamiento por defecto" },
                        { code: "console.log(campo.value)", explain: "// lee el input" }
                    ],
                    validate(code) {
                        return code.includes('preventDefault') && code.includes('.value') && code.includes('submit') && code.includes('addEventListener');
                    }
                },
                {
                    id: "m3e4",
                    title: "Detectar tecla Enter",
                    pts: 12,
                    desc: "Añade un listener de <em>keydown</em> al documento. Cuando el usuario pulse <em>Enter</em>, muestra <em>'Enter pulsado'</em> en consola.",
                    starter: `document.addEventListener('keydown', (event) => {
  // Comprueba si la tecla es 'Enter'
  // Si es así, muestra 'Enter pulsado' en consola
});`,
                    hint: "event.key === 'Enter' comprueba si la tecla pulsada es Enter.",
                    solution: [
                        { code: "if (event.key === 'Enter')", explain: "// compara la tecla" },
                        { code: "  console.log('Enter pulsado')", explain: "// feedback" }
                    ],
                    validate(code) {
                        return code.includes("event.key") && (code.includes("'Enter'") || code.includes('"Enter"')) && code.includes('keydown');
                    }
                }
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
