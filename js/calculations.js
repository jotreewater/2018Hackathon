function happinessf(value)
{
  var x;
  x = happiness + value;
  if(x>=100){
    x=100;
  }
  happiness = x;
  refreshstats();
}

function healthf(value)
{
  var x;
  x = health + value;
  if(x>=100){
    x=100;
  }
  health = x;
  refreshstats();
}
function debtf(value)
{
  var x;
  x = debt + value;
  debt = x;
  refreshstats();
}
function degree_progressf(value)
{
  var x;
  x = degree_progress + value;
  if(x>=1000){
    x=1000;
  }
  degree_progress = x;
  refreshstats();
}
function test(){
  daynum++;
  return daynum;
}
