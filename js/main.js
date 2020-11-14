function main(){
  refreshstats();
  clearoutput();
  clearbuttons();
  document.getElementById("output").innerHTML = '<img src="assets/studentwalkcycle.gif" height=650px width="100%">';
  if(degree_progress>=1000){
    clearoutput();
    document.getElementById("output").innerHTML = '<img src="assets/graduation.gif" height=650px width="100%">';
    addbutton1("Events passed: "+daynum);
    addbutton4("Debt Accumulated: "+debt);
  }
  else if(health<=0){
    clearoutput();
    document.getElementById("output").innerHTML ='<img src="assets/death.jpg" height=650px width="100%">';
    addbutton1("You've collapsed and can no longer attend college");
    addbutton4("Debt Accumulated: "+debt);
  }
  else if(happiness<=0){
    clearoutput();
    document.getElementById("output").innerHTML = '<img src="assets/dropout.jpg" height=650px width="100%">';
    addbutton1("You've dropped out of college");
    addbutton4("Debt Accumulated: "+debt);
  }
  else{
    addbutton1("Event "+daynum,randomevent);
  }
}
