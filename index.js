 function clock() {
 var dateTime = new Date();
 console.log(dateTime)
 var hrs =  dateTime.getHours();
 var min = dateTime.getMinutes();
 var sec = dateTime.getSeconds();

 var sessions = document.getElementById("sessions");

 if (hrs >= 12) {
    sessions.innerHTML = "PM";
 }
 else{
    sessions.innerHTML = "AM "
 }

 if (hrs > 12) {
    hrs = hrs - 12;
 }
document.getElementById("hours").innerHTML = hrs < 10 ? "0"+hrs:hrs;
document.getElementById("minutes").innerHTML = min < 10 ? "0"+min:min;
document.getElementById("seconds").innerHTML = sec < 10 ? "0"+sec:sec;

 }


setInterval(clock , 10);







