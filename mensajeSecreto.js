/*
  Proyecto: Transformar una matriz en un mensaje usando métodos de array.
  Autor: Alexis
  Herramientas: JavaScript puro y métodos de matriz como pop, push, shift, unshift, splice, join.
*/


// Declaramos la matriz original
let secretMessage = [
    'Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily',
    'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you',
    'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'
  ];
  

  // Mostramos la matriz original y su longitud inicial
  console.log(secretMessage);
  console.log('Longitud inicial:', secretMessage.length);
  

  /* Tarea 1: Eliminar la última cadena de la matriz */
  secretMessage.pop(); // elimina 'JavaScript'
  

  /* Tarea 2: Mostrar la nueva longitud de la matriz */
  console.log('Después del pop():', secretMessage.length);

  
  /* Tarea 3: Agregar 'to' y 'Program' al final como nuevos elementos */
  secretMessage.push('to', 'Program');
  

  /* Tarea 4: Reemplazar 'easily' con 'right'
     'easily' está en el índice 7 */
  secretMessage[7] = 'right';
  

  /* Tarea 5: Eliminar el primer elemento de la matriz */
  secretMessage.shift(); // elimina 'Learning'
  

  /* Tarea 6: Agregar 'Programming' al inicio de la matriz */
  secretMessage.unshift('Programming');
  

  /* Tarea 7: Reemplazar las palabras 'get', 'right', 'the', 'first', 'time,'
     con una sola palabra: 'know'
     Estas palabras están en los índices 6 a 10 (después de modificaciones anteriores) */
  secretMessage.splice(6, 5, 'know');
  
  
  /* Tarea 8: Imprimir el mensaje final como una oración */
  console.log('Mensaje secreto:');
  console.log(secretMessage.join(' '));
  