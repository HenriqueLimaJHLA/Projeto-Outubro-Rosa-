$(function() {
var menu_width = 290;
var menu = $(".menuLado");
var menu_aberto = $(".menu-aberto");
var menu_fechado = $(".menu-fechado");
var porCima = $(".porCima"); 

menu_aberto.click(function (e) {
e.preventDefault();
menu.css({"right": "0px"});
porCima.css({"opacity": "1", "width": "100%"});
});

menu_fechado.click(function (e) {
e.preventDefault();
menu.css({"right": "-" + menu_width + "px"});
porCima.css({"opacity": "0", "width": "0"});
});
});

    var valor1 = document.getElementById('div1')
    var valor2 = document.getElementById('div2')
    var y

function alterar() {
    
    if(y === 1) {
        x1()
    }else{
        x2()
     
}}
function x1() {
        console.log("Teste1");
        div1.style.cssText= 'display: none';
        div2.style.cssText= 'display: block';
        
        y = 0
      
}  
function x2() {
        console.log("Teste2");
        div1.style.cssText= 'display: block';
        div2.style.cssText= 'display: none';
        
        y= 1
    }     

