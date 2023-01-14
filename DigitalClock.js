// Get the element where the clock will be displayed
const clockElement = document.getElementById('clock');

// Function to update the clock
function updateClock() {
  // Get the current time
  let time = new Date();

  // Extract the hours, minutes, and seconds from the time
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  // Add leading zeros to the minutes and seconds if necessary
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  // Compose the string for the clock
  let clockString = hours + ':' + minutes + ':' + seconds;

  // Update the clock
  clockElement.innerHTML = clockString;
}

// Update the clock every 1 second
setInterval(updateClock, 1000);
//coded by Muhammad ashraful jan 2023
