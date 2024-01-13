setTimeout(off,4000);

function off() {
 //   if (document.readyState === "complete") {
        // Page is fully loaded, hide the loader
        document.querySelector('.loader').style.display = 'none';
        
   // }
}

setInterval(getTime,1000);

// Set the start date and current date



function getTime(){
  const startDate = new Date('December 14, 2023');
let currentDate = new Date();

// Calculate the time difference in milliseconds
let timeDifference = currentDate - startDate;

// Calculate days, hours, and minutes
let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((timeDifference % (1000 * 60  )) / (1000));
let elem = document.getElementById("time");

if(seconds<10){
  
  elem.innerHTML = days + " d " + hours + ":" + minutes + ":" + "0"+ seconds;
  
}
else{

elem.innerHTML = days + " d " + hours + ":" + minutes + ":" + seconds;
}
// Display the result
//console.log(`We have dated for ${days} days, ${hours} //hours, and ${minutes} minutes and  ${seconds}`);


}

