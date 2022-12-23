
let hrs = 0;
let mins = 0;
let secs = 0

function clockTime() {
   const date = new Date();//console.log(date);

   let hours = date.getHours();//console.log(hours);
    hrs = hours;

    let min = date.getMinutes();//console.log(min);
    mins = min;

    let sec = date.getSeconds();//console.log(sec);
    secs = sec;

  let meridian;
   if (hours >= 12) {
       meridian = "PM"
       hours -= 12;
   }else {
       meridian = "AM"
   }

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
   // alarm_detail// wake_up// lunch_time// nap_time// night_time
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

  let update = document.getElementsByClassName("addtext");
  update[0].innerText =  " Wake up time :" + " " + morningtime.options[morningtime.selectedIndex].text;
  update[1].innerText =  " Lunch time :" + " " + lunchtime.options[lunchtime.selectedIndex].text;
  update[2].innerText =  " Nap time :" + " " + naptime.options[naptime.selectedIndex].text;
  update[3].innerText =  " Night time :" + " " + nighttime.options[nighttime.selectedIndex].text;

    
 }
