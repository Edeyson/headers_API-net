function popupEdit() {
  var menu = document.getElementById("menu_edit");
  menu.classList.toggle("visible");
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("buton66").addEventListener("click", crear66);
});
function crear66() {
  console.log("holaaaa");
  var page = document.getElementById("page");

  var panel_6 = document.createElement("div");
  panel_6.setAttribute('class', 'panel'); //esto es para que funcione en el css
  panel_6.style="background: #f5f8fa; border-radius:10px";
  panel_6.style='border-color:#e7eaec';
  panel_6.style= "box-shadow: -2px 3px 4px rgba(9, 30,66,.25)" ;
  panel_6.style ="border-width: thin;" ;
  panel_6.style ='border-top-left-radius: .2rem;' ;
  panel_6.style ='border-bottom-right-radius:.2rem' ;
  panel_6.style ='border-top-right-radius:.2rem' ;
  panel_6.style ='border-bottom-left-radius:.2rem' ;
  panel_6.style ='border-color:#b8daff' ;
  panel_6.style ='margin:-1% auto;-webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1)' ;
  panel_6.style ='padding: 1%; margin:auto' ;
  panel_6.style ='-webkit-box-shadow: none; box-shadow: none' ;

  page.appendChild(panel_6)
}
