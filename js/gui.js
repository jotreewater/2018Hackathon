function clearoutput(){
  document.getElementById("output").innerHTML = '';
}
function clearbuttons() {
  document.getElementById("button1").style.visibility = "hidden";
  document.getElementById("button2").style.visibility = "hidden";
  document.getElementById("button3").style.visibility = "hidden";
  document.getElementById("button4").style.visibility = "hidden";
}
function addbutton1(txt,func) {
  document.getElementById("button1").style.visibility = "visible";
  document.getElementById("button1").innerHTML = txt;
  document.getElementById("button1").onclick = func;
  return document.getElementById("button1");
}
function addbutton2(txt,func) {
  document.getElementById("button2").style.visibility = "visible";
  document.getElementById("button2").innerHTML = txt;
  document.getElementById("button2").onclick = func;
  return document.getElementById("button2");
}
function addbutton3(txt,func) {
  document.getElementById("button3").style.visibility = "visible";
  document.getElementById("button3").innerHTML = txt;
  document.getElementById("button3").onclick = func;
  return document.getElementById("button3");
}
function addbutton4(txt,func) {
  document.getElementById("button4").style.visibility = "visible";
  document.getElementById("button4").innerHTML = txt;
  document.getElementById("button4").onclick = func;
  return document.getElementById("button4");
}
