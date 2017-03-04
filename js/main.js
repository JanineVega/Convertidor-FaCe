var btn_conv_ce = document.getElementById("Convert_Ce");
var btn_conv_fa = document.getElementById("Convert_Fa");

//----funciones para cada boton-----;
btn_conv_ce.addEventListener("click",function() {
 var inputFa=document.getElementById("Fahrenheit").value;
 var resultado=(inputFa-32)/1.8;

return document.getElementById("Celcius").value=resultado;
});

btn_conv_fa.addEventListener("click",function() {
 var inputCe=document.getElementById("Celcius").value;
 var resultado=(inputCe*1.8)+32;

return document.getElementById("Fahrenheit").value=resultado;
});
