function randomevent(){
clearoutput();
clearbuttons();
daynum++;
i=Math.random();
if(0<=i<=0.05){
  party();
}
else if(0.05<i<=0.1){
  flu();
}
else if(0.1<i<=0.15){
  club();
}
else if(0.15<i<=0.2){
  twotests();
}
else if(0.20<i<=0.25){
  concert();
}
else if(0.25<i<=0.3){
  scholarship();
}
else if(0.30<i<=0.35){
  selfcare();
}
else if(0.35<i<=0.4){
  job();
}
else if(0.40<i<=0.45){
  relationship();
}
else if(0.45<i<=0.5){
  groupmembers();
}
else if(0.5<i<=0.55){
  ra();
}
else if(0.55<i<=0.60){
  roommate();
}
else if(0.6<i<=0.65){
  winterbreak();
}
else if(0.65<i<=0.7){
  laptop();
}
else if(0.7<i<=0.75){
  hackathon();
}
else if(0.75<i<=0.8){
  officer();
}
else if(0.8<i<=0.85){
  review();
}
else if(0.85<i<=0.9){
  study();
}
else if(0.9<i<=0.95){
  abroad();
}
else if(0.95<i<=1){
  alarm();
}
else{
  document.getElementById("output").innerHTML = 'How did you get here?';
}
}
