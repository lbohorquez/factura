function resultado1(valor1) 
{
   let valorUno = parseInt(valor1);
   let valorDos = 60; 
   let resultado = 0;

   resultado = document.getElementById('resultado1').innerHTML;
   resultado = (parseInt(valorUno) * parseInt(valorDos));
   document.getElementById('resultado1').innerHTML = resultado;
}
function resultado2(valor1) 
{
   let valorUno = parseInt(valor1);
   let valorDos = 80; 
   let resultado = 0;

   resultado = document.getElementById('resultado2').innerHTML;
   resultado = (parseInt(valorUno) * parseInt(valorDos));
   document.getElementById('resultado2').innerHTML = resultado;
}
function resultado3(valor1) 
{
   let valorUno = parseInt(valor1);
   let valorDos = 100; 
   let resultado = 0;

   resultado = document.getElementById('resultado3').innerHTML;
   resultado = (parseInt(valorUno) * parseInt(valorDos));
   document.getElementById('resultado3').innerHTML = resultado;
}
function resultado4(valor1) 
{
   let valorUno = parseInt(valor1);
   let valorDos = 110; 
   let resultado = 0;

   resultado = document.getElementById('resultado4').innerHTML;
   resultado = (parseInt(valorUno) * parseInt(valorDos));
   document.getElementById('resultado4').innerHTML = resultado;
}
function resultado5(valor1) 
{
   let valorUno = parseInt(valor1);
   let valorDos = 120; 
   let resultado = 0;

   resultado = document.getElementById('resultado5').innerHTML;
   resultado = (parseInt(valorUno) * parseInt(valorDos));
   document.getElementById('resultado5').innerHTML = resultado;
}
function resultado6(valor1) 
{
   let valorUno = parseInt(valor1);
   let valorDos = 1200; 
   let resultado = 0;

   resultado = document.getElementById('resultado6').innerHTML;
   resultado = (parseInt(valorUno) * parseInt(valorDos));
   document.getElementById('resultado6').innerHTML = resultado;
}
function resultado7(valor1) 
{
   let valorUno = parseInt(valor1);
   let valorDos = 120; 
   let resultado = 0;

   resultado = document.getElementById('resultado7').innerHTML;
   resultado = (parseInt(valorUno) * parseInt(valorDos));
   document.getElementById('resultado7').innerHTML = resultado;
}
function resultadoTotal()
{  
    let resultado = 0;
   // let valorUno = parseInt(valor1);
   // let valorDos = parseInt(valor2);
   // let valorTres = parseInt(valor3);
   // let valorCuatro = parseInt(valor4);
   // let valorCinco = parseInt(valor5);
   // let valorSeis = parseInt(valor6);
   // let valorSiete = parseInt(valor7);
  
   let valorUno = document.querySelector('resultado1').innerText
   let valorDos = document.querySelector('resultado2').innerText
   let valorTres = document.querySelector('resultado3').innerText
   let valorCuatro = document.querySelector('resultado4').innerText
   let valorCinco = document.querySelector('resultado5').innerText
   let valorSeis = document.querySelector('resultado6').innerText
   let valorSiete = document.querySelector('resultado7').innerText

   resultado = document.getElementById('totaldelacompra2').innerHTML;
   resultado = (parseInt(valorUno) + parseInt(valorDos) + parseInt(valorTres) + parseInt(valorCuatro) + parseInt(valorCinco) + parseInt(valorSeis) + parseInt(valorSiete));
   document.getElementById('totaldelacompra2').innerHTML = resultado;
}