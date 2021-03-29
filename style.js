var btn = document.getElementsByClassName("btn");
var i;
for(i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click",function(){
    var panel = this.nextElementSibling;
    if(panel.style.display == "block") {
      $(panel).slideUp(300);
    }else {
      $(panel).slideDown(300);
    }
  })
}
