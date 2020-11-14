function refreshstats(){
  document.getElementById("hpnum").innerHTML = health+" / 100";
  document.getElementById("happnum").innerHTML = happiness+" / 100";
  document.getElementById("progressnum").innerHTML = degree_progress+" / 1000";
  if(health<0){
    health=0;
  }
  else if(health>100){
    health=100;
  }
  document.getElementById("hpbar").style.width = health/1+'%';
  if(happiness<0){
    happiness=0;
  }
  else if(happiness>100){
    happiness=100;
  }
  document.getElementById("happbar").style.width = happiness/1+'%';
  if(degree_progress<0){
    degree_progress=0;
  }
  else if(degree_progress>1000){
    degree_progress=1000;
  }
  document.getElementById("progressbar").style.width = degree_progress/10+'%';

}
function displayNextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
  document.getElementById("img").src = images[x];
}
function displayPreviousImage() {
  x = (x <= 0) ? images.length - 1 : x - 1;
  document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 10000);
}
