




function clock(){

var Dsemanas = [ " " , "Segunda-feira", "Terça-Feira","Quarta-feira","quinta-feira","Sexta-feira", "Sabado","Domingo"];
var meses = ["Janeiro" ,"Fevereiro","Março", "Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

var today = new Date();

document.getElementById('Date').innerHTML = Dsemanas[today.getDay()] + " , "+today.getDate() + " de "+ meses[today.getMonth()] + " de "+ today.getFullYear();




var h = today.getHours() < 10 ? '0'+today.getHours() : today.getHours();
var m = today.getMinutes() < 10 ? '0'+today.getMinutes() : today.getMinutes();
var s = today.getSeconds() < 10 ? '0'+today.getSeconds() : today.getSeconds();



 document.getElementById("hours").innerHTML = h;
 document.getElementById("min").innerHTML = m;
 document.getElementById("sec").innerHTML = s;








}var inter = setInterval(clock,400);













