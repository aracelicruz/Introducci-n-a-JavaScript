//datos.
let dato1 = 42;
let dato2 = 'Veinticinco';
let dato3 = -666;
let dato4 = true;
let dato5 = 0;
let dato6 = '';
let dato7 = null;
let dato8 = undefined;
// FALSE es incorrecto porque está en mayúsculas y no es un booleano válido
let dato9 = false; // Interpretado como el valor correcto

// Análisis de los tipos de datos
console.log(`Variable dato1 (42) es un tipo de dato ${typeof dato1}`); // number
console.log(`Variable dato2 ('Veinticinco') es un tipo de dato ${typeof dato2}`); // string
console.log(`Variable dato3 (-666) es un tipo de dato ${typeof dato3}`); // number
console.log(`Variable dato4 (true) es un tipo de dato ${typeof dato4}`); // boolean
console.log(`Variable dato5 (0) es un tipo de dato ${typeof dato5}`); // number
console.log(`Variable dato6 ('') es un tipo de dato ${typeof dato6}`); // string
console.log(`Variable dato7 (null) es un tipo de dato ${typeof dato7}`); // object (peculiaridad de JavaScript)
console.log(`Variable dato8 (undefined) es un tipo de dato ${typeof dato8}`); // undefined
console.log(`Variable dato9 (false) es un tipo de dato ${typeof dato9}`); // boolean

// Ejemplos adicionales
let ejemplo1 = NaN; // Not a Number, pero tipo number
let ejemplo2 = [1, 2, 3]; // Array (es un objeto en JavaScript)
let ejemplo3 = { clave: "valor" }; // Objeto literal
let ejemplo4 = function () {}; // Función


console.log(`Variable ejemplo1 (NaN) es un tipo de dato ${typeof ejemplo1}`); // number
console.log(`Variable ejemplo2 ([1, 2, 3]) es un tipo de dato ${typeof ejemplo2}`); // object
console.log(`Variable ejemplo3 ({ clave: "valor" }) es un tipo de dato ${typeof ejemplo3}`); // object
console.log(`Variable ejemplo4 (function) es un tipo de dato ${typeof ejemplo4}`); // function

