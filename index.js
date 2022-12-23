
let hrs = 0;
let mins = 0;
let secs = 0




function clockTime() {
   const date = new Date();
    // console.log(date);

   let hours = date.getHours();
  //  console.log(hours);
  hrs = hours;

   let min = date.getMinutes();
  //  console.log(min);
mins = min;
   let sec = date.getSeconds();
  //  console.log(sec);
secs = sec;

   if (hours >= 20 && min >= 0 && sec >= 1) {
       document.getElementById("imgM").src = "./sleep.png";
       document.getElementById('text').innerHTML = "GOOD NIGHT!!"
       document.getElementById('grabText').innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"
      
   }
   else if (hours >= 16 && min >= 0 && sec >= 1) {
       document.getElementById("imgM").src = "./evening.png";
       document.getElementById('text').innerHTML = "GOOD EVENING!!"
       document.getElementById('grabText').innerHTML = "STOP YAMING, GET SOME TEA ITS JUST EVENING"
   }
   else if (hours >= 12 && min >= 0 && sec >= 1) {
       document.getElementById("imgM").src = "./afternoon.png";
       document.getElementById('text').innerHTML = "GOOD AFTERNOON!! TAKE SOME SLEEP!!"
       document.getElementById('grabText').innerHTML = "LET'S HAVE SOME LUNCH !!"
   }
   else if (hours >= 10 && min >= 0 && sec >= 1) {
       document.getElementById("imgM").src = "./girl.png";
       document.getElementById('text').innerHTML = "GOOD MORNING!! WAKE UP !!"
       document.getElementById('grabText').innerHTML = "GRAB SOME HEALTHY BREAKFAST"
   }


   let meridian;
   if (hours >= 12) {
       meridian = "PM"
       hours -= 12;
   }
   else {
       meridian = "AM"
   }
// if (hours < 10)
   //     hours = "0" + hours;
   hours = hours < 10 ? "0" + hours : hours;

   min = min < 10 ?  "0" + min : min;
   
   sec = sec < 10 ? sec = "0" + sec : sec;


   const hoursSlot = document.getElementById("hours")
   hoursSlot.innerHTML = `${hours}` + "\n hours";

   const minsSlot = document.getElementById("mins")
   minsSlot.innerHTML = `${min}`+"\n mins";

   const secsSlot = document.getElementById("secs")
   secsSlot.innerHTML = `${sec}`+ "\n secs";;

   const meridianSlot = document.getElementById("meridian")
   meridianSlot.innerHTML = meridian;

}

setInterval(() => {
   clockTime();
}, 1000);

function setAlarmTimer() {
   // alarm_detail
   // wake_up
   // lunch_time
   // nap_time
   // night_time
   let first = document.getElementById("morningtime").value;
   console.log(first,hrs);
   if(first == hrs){
    document.getElementById('imgM').src = './girl.png';
    document.getElementById('text').innerHTML = "GOOD MORNING!! WAKE UP !!"
    document.getElementById('grabText').innerHTML = "GRAB SOME HEALTHY BREAKFAST"
   }

   let second = document.getElementById("lunchtime").value;
   console.log(second,hrs);
   if(second == hrs){
    document.getElementById("imgM").src = "./afternoon.png";
    document.getElementById('text').innerHTML = "GOOD AFTERNOON!! TAKE SOME SLEEP!!"
    document.getElementById('grabText').innerHTML = "LET'S HAVE SOME LUNCH !!"
   }

   let third = document.getElementById("naptime").value;
   console.log(third,hrs);
   if(third == hrs){
    document.getElementById("imgM").src = "./evening.png";
    document.getElementById('text').innerHTML = "GOOD EVENING!!"
    document.getElementById('grabText').innerHTML = "STOP YAMING, GET SOME TEA ITS JUST EVENING"
   }

   let four = document.getElementById("nighttime").value;
   console.log(four,hrs);
   if(four == hrs){
    document.getElementById("imgM").src = "./sleep.png";
       document.getElementById('text').innerHTML = "GOOD NIGHT!!"
       document.getElementById('grabText').innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"
      
   }






   document.getElementsByClassName("addtext")[0].innerHTML =
     " Wake up time :" + document.getElementById("morningtime").value;

   document.getElementsByClassName("addtext")[1].innerHTML =
     " Lunch time :" + document.getElementById("lunchtime").value;

   document.getElementsByClassName("addtext")[2].innerHTML =
     " Nap time :" + document.getElementById("naptime").value;

   document.getElementsByClassName("addtext")[3].innerHTML =
     " Night time :" + document.getElementById("nighttime").value;

    
 }
