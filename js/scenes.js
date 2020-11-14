function intro(){
refreshstats();
clearbuttons();
clearoutput();
document.getElementById("output").innerHTML = '<img src="assets/menu.jpg" height=650px width=100%>';
addbutton1("Start Game",main);
addbutton4("Credits",credits);
}
function credits(){
  clearbuttons();
  document.getElementById("output").innerHTML = '<img id="img" src="assets/credits.gif" height=650px width=100%>';
  addbutton4("Back",intro);
}
function party1(){
  happinessf(10);
  degree_progressf(-10);
  main();
}
function party2(){
  degree_progressf(50);
  happinessf(-20);
  main();
}
function party3(){
   healthf(-20);
   happinessf(5);
   main();
}
function party(){
   // you and your friend get invited to a party, but you have a midterm the next day. What do you do?
   document.getElementById("output").innerHTML = '<img src="assets/party.gif" height=650px width="100%">';
   addbutton1("Go to the party", party1);
   addbutton2("Go to the library and study for your midterm", party2);
   addbutton3("Go to the party and pull an all nighter to study when you get back.", party3);
   degree_progress += 50;
   debt += 5000;
}
function flu1(){
  degree_progressf(25);
  main();
}
function flu2(){
  degree_progressf(-25);
  healthf(10);
  main();
}
function flu3(){
  degree_progressf(10);
  healthf(-30);
  main();
}
function flu(){
  // It's flu season and you get the flu.
  document.getElementById("output").innerHTML = '<img src="assets/flu.gif" height=650px width="100%">';
  addbutton1("Walk all the way to the student health center, but miss a class", flu1);
  addbutton2("Take some medicine and sleep it off", flu2);
  addbutton3("Tough it out and go to class", flu3);
  degree_progress += 50;
  debt += 5000;
}
function club1(){
  degree_progressf(50);
  happinessf(0);
  main();
}
function club2(){
  happinessf(20);
  main();
}
function club(){
  // You go to the club fair and you sign up to join ACM and Nerf UNR. You discover that the meetings are at the same time. ACM will help with CS and increase
  // your chances of getting a job and might be fun. Nerf UNR is a fun stress reliever and one of your passions.
  document.getElementById("output").innerHTML = '<img src="assets/club.gif" height=650px width="100%">';
  addbutton1("Join ACM",club1);
  addbutton2("Join NERF UNR",club2);
  degree_progress += 50;
  debt += 5000;
}
function twotests1(){
  degree_progressf(10);
  main();
}
function twotests2(){
  degree_progressf(10);
  main();
}
function twotests3(){
  degree_progressf(-25);
  main();
}
function twotests()
{
  // Uh oh. Your CS exam and physics exam are scheduled on the same day and you only have one day to study.
  document.getElementById("output").innerHTML = '<img src="assets/twotests.gif" height=650px width="100%">';
  addbutton1("Study for physics", twotests1);
  addbutton2("Study for CS", twotests2);
  addbutton3("Study for both, but not do as well in both", twotests3);
  degree_progress += 50;
  debt += 5000;
}
function concert1(){
  degree_progressf(0);
  happinessf(20);
  main();
}
function concert2(){
  debtf(500);
  happinessf(-10);
  main();
}
function concert()
{
  // You won a free ticket to see your favorite artist. Your going to miss a day of classes and there aren't any tests scheduled but you might miss important notes.
  document.getElementById("output").innerHTML = '<img src="assets/concert.gif" height=650px width="100%">';
  addbutton1("Go to the concert", concert1);
  addbutton2("Sell your ticket and go to class",concert2);
  degree_progress += 50;
  debt += 5000;
}
function scholarship1(){
  degree_progressf(-25);
  debtf(-10000);
  main();
}
function scholarship2(){
  degree_progressf(50);
  debtf(0);
  main();
}
function scholarship3(){
  degree_progressf(25);
  debtf(-1000);
  main();
}
function scholarship()
{
  // It's 6:00 pm and you have a paper due at midnight. You suddenly remmeber that the application for a $10,000 scholarship is due tonight.
  // Your scholarship is almost done but if you work on it, you wont have time to work on the paper.
  document.getElementById("output").innerHTML = '<img src="assets/scholarship.gif" height=650px width="100%">';
  addbutton1("Work on the scholarship", scholarship1);
  addbutton2("Work on the paper", scholarship2);
  addbutton3("Do both, but it's not your best work", scholarship3);
  // essay got 3rd place > you win 1000
  degree_progress += 50;
  debt += 5000;

}
function selfcare1(){
  happinessf(20);
  main();
}
function selfcare2(){
  healthf(20);
  main();
}
function selfcare3(){
  degree_progressf(10);
  main();
}
function selfcare()
{
  // it's a three day weekend and you don't have much work to do. You take a day for self care.
  document.getElementById("output").innerHTML = '<img src="assets/selfcare.gif" height=650px width="100%">';
  addbutton1("Go to the movies to increase your happiness", selfcare1);
  addbutton2("Spend a day in and relax to increase your health", selfcare2);
  addbutton3("Get a head start on this week's work to increase you degree progress", selfcare3);
  degree_progress += 50;
  debt += 5000;
}
function job1(){
  debtf(-5000);
  healthf(-20);
  happinessf(-20);
  main();
}
function job2(){
  debtf(0);
  healthf(10);
  main();
}
function job()
{
  // you find a job on campus, but if you take it, you're constantly working and sacrifice sleep
  document.getElementById("output").innerHTML = '<img src="assets/job.gif" height=650px width="100%">';
  addbutton1("Take the job", job1);
  addbutton2("Forfeit the job", job2);
  degree_progress += 50;
  debt += 5000;
}
function relationship1(){
  happinessf(10);
  degree_progressf(-50);
  main();
}
function relationship2(){
  happinessf(-20);
  degree_progressf(100);
  main();
}
function relationship3(){
  happinessf(-10);
  degree_progressf(50);
  main();
}
function relationship()
{
  // You find out that the person you like is interested in you. You want to be in a relationship with them but it might impact you school life
  document.getElementById("output").innerHTML = '<img src="assets/relationship.gif" height=650px width="100%">';
  addbutton1("Pursue the relationship", relationship1);
  addbutton2("Choose school over the pursuing the relationship", relationship2);
  addbutton3("Wait it out and see what happens", relationship3);
  degree_progress += 50;
  debt += 5000;
}
function groupmembers1(){
  happinessf(10);
  degree_progressf(-50);
  main();
}
function groupmembers2(){
  happinessf(-10);
  degree_progressf(50);
  main();
}
function groupmembers()
{
  // you're assigned a group project in one of your classes. Two different groups want you to be a part of their group.
  // One group has all of your friends in it and the other has some of the top students in the class. Which group would you choose?
  document.getElementById("output").innerHTML = '<img src="assets/group.gif" height=650px width="100%">';
  addbutton1("The group with all of your friends", groupmembers1);
  addbutton2("The group with the top students", groupmembers2);
  degree_progress += 50;
  debt += 5000;
}
function ra1(){
  debtf(-20000);
  happinessf(-30);
  main();
}
function ra2(){
  debtf(0);
  happinessf(0);
  main();
}
function ra()
{
  // Congratulations! You've been chosen to be an RA. You get free food and housing, but you can't go to parties and be in clubs that are a big commitment.
  document.getElementById("output").innerHTML = '<img src="assets/ra.gif" height=650px width="100%">';
  addbutton1("Be an RA", ra1);
  addbutton2("Forfeit the job", ra2);
  degree_progress += 50;
  debt += 5000;
}
function roommate1(){
  debtf(2000);
  happinessf(0);
  main();
}
function roommate2(){
  debtf(0);
  happinessf(-20);
  main();
}
function roommate() {  // oof. You ended up with a roommate that sucks and you hate your living situation.
  document.getElementById("output").innerHTML = '<img src="assets/roommate.gif" height=650px width="100%">';
  addbutton1("Move to a new place but end up more in debt", roommate1);
  addbutton2("Tough it out for the year", roommate2);
  degree_progress += 50;
  debt += 5000;
}
function winterbreak1(){
  degree_progressf(100);
  main();
}
function winterbreak2(){
  happinessf(25);

  main();
}
function winterbreak3(){
  healthf(25);

  main();
}
function winterbreak()
{
  // it's finally winter break! What you want to do is up to you. Any path you choose will not have any negative consequence.
  document.getElementById("output").innerHTML = '<img src="assets/winterbreak.gif" height=650px width="100%">';
  addbutton1("Take wintermester classes", winterbreak1);
  addbutton2("Go on vacation", winterbreak2);
  addbutton3("Go on a retreat that improves your health", winterbreak3);
  degree_progress += 50;
  debt += 5000;
}
function laptop1(){
  happinessf(-15);
  health(-20);
  degree_progressf(-50);
  main();
}
function laptop2(){
  debtf(1000);

  main();
}
function laptop3(){
  happinessf(-10);
  debtf(-500);
  main();
}
function laptop()
{
  // You spill water on your laptop and you have to buy a new one.
  document.getElementById("output").innerHTML = '<img src="assets/laptop.gif" height=650px width="100%">';
  addbutton1("Get a job to pay for it", laptop1);
  addbutton2("Use your loans to pay for it", laptop2);
  addbutton3("Use the computers at the library for the rest of year", laptop3);
  degree_progress += 50;
  debt += 5000;
}
function hackathon1(){
  happinessf(10);
  debtf(-5000);
  main();
}
function hackathon2(){
  degree_progressf(50);
  happinessf(-10);
  main();
}
function hackathon()
{
  document.getElementById("output").innerHTML = '<img src="assets/hackathon.gif" height=650px width="100%">';
  // ACM is hosting a hackathon event. You want to join but it's going to take 18 hours out of your weekend and you have a exam that week.
  addbutton1("Do the hackathon", hackathon1);
  // print out you got an internship from doing the hackathon
  addbutton2("Skip the hackathon", hackathon2);
  degree_progress += 50;
  debt += 5000;
}
function officer1(){
  happinessf(20);
  healthf(-20);
  degree_progressf(50);
  main();
}
function officer2(){
  happinessf(-20);
  healthf(10);
  main();
}
function officer3(){
  happinessf(0);
  degree_progressf(10);
  main();
}
function officer()
{
  // ACM officer elections are going on and you want to run as president. It's a big commitment but you'd have lots of fun doing it.
  document.getElementById("output").innerHTML = '<img src="assets/officer.gif" height=650px width="100%">';
  addbutton1("Run for ACM president", officer1);
  addbutton2("Decide not to run", officer2);
  addbutton3("Run for a general officer position", officer3);
  degree_progress += 50;
  debt += 5000;
}
function review1(){
   degree_progressf(50);
   happinessf(-10);
   main();
}
function review2(){
  degree_progressf(-50);
  healthf(10);
  main();
}
function review()
{
  // You have an exam coming up and your professor is having a review session on a Saturday. You're pretty knowledgable about the subject and you have an A in the class.
  document.getElementById("output").innerHTML = '<img src="assets/review.gif" height=650px width="100%">';
  addbutton1("Go to the review session", review1);
  addbutton2("Skip the review session and sleep in", review2);
  degree_progress += 50;
  debt += 5000;
}
function study1(){
   healthf(-20);
   degree_progressf(25);
   main();
}
function study2(){
  healthf(10);
  degree_progressf(-50);
  main();
}
function study()
{
  // Your physics final is tommorow and you feel like you aren't that prepared.
  document.getElementById("output").innerHTML = '<img src="assets/study.gif" height=650px width="100%">';
  addbutton1("Pull an all nighter to study",study1);
  addbutton2("Accept what you know and get some sleep", study2);
  degree_progress += 50;
  debt += 5000;
}
function abroad1(){
   happinessf(50);
   debtf(10000);
   main();
}
function abroad2(){
  happinessf(-10);
  main();
}
function abroad()
{
  // you have the opportunity to study abroad. You feel like it would be an amazing experience and you won a scholarship that can cover part of the cost, but you still have to pay a lot.
  document.getElementById("output").innerHTML = '<img src="assets/studyabroad.gif" height=650px width="100%">';
  addbutton1("Study abroad",abroad1);
  addbutton2("Save the money and forfeit the chance to study abroad", abroad2);
  degree_progress += 50;
  debt += 5000;
}
function alarm1(){
  degree_progressf(-25);
  healthf(10);
  happinessf(10);
  main();
}
function alarm2(){
  degree_progressf(0);
  healthf(-20);
  happinessf(-20);
  main();
}
function alarm3(){
  degree_progressf(-50);
  happinessf(10);
  happinessf(10);
  main();
}
function alarm()
{
  // you forgot to set your alarm last night and wake up 10 minutes before your class starts.
  document.getElementById("output").innerHTML = '<img src="assets/alarm.gif" height=650px width="100%">';
  addbutton1("Skip your first class and sleep in", alarm1);
  addbutton2("Rush to class in your pajamas", alarm2);
  addbutton3("Skip all your classes for the rest of the day because you're sad", alarm3);
  degree_progress += 50;
  debt += 5000;
}
