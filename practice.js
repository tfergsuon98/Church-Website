// navbar
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}); 




// an array of quotes to display
const quotes = [  "[John 16:33] In the world you will have tribulation. But take heart; I have overcome the world.",  "[Romans 8:28] And we know that for those who love God all things work together for good, for those who are called according to His purpose.",  "[Joshua 1:9] Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.",  "[Proverbs 3:5–6] Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge Him, and He will make straight your paths.",  "[Isaiah 41:13] For I, the LORD your God, hold your right hand; it is I who say to you, 'Fear not, I am the one who helps you.",  "[1 Peter 5:6–7] Humble yourselves, therefore, under the mighty hand of God so that at the proper time He may exalt you, casting all your anxieties on Him, because He cares for you."];

// the index of the current quote being displayed
let currentQuoteIndex = 0;

// the HTML element where the quote will be displayed
const quoteElement = document.getElementById("quote");

// a function to display the next quote in the array
function showNextQuote() {
  // check if we have reached the end of the array and reset the index if necessary
  if (currentQuoteIndex >= quotes.length) {
    currentQuoteIndex = 0;
  }

  // update the quote element with the next quote
  quoteElement.innerText = quotes[currentQuoteIndex];

  // increment the index to prepare for the next quote
  currentQuoteIndex++;
}

// show the first quote
showNextQuote();

// set an interval to show the next quote every 10 seconds
setInterval(showNextQuote, 10000);

//LANGUAGE TOGGLE
const englishButton = document.getElementById('english-button');
const koreanButton = document.getElementById('korean-button');

englishButton.addEventListener('click', () => {
  // Switch to English language
  englishButton.classList.add('active');
  koreanButton.classList.remove('active');
});

koreanButton.addEventListener('click', () => {
  // Switch to Korean language
  koreanButton.classList.add('active');
  englishButton.classList.remove('active');
});

/*
//COUNTDOWN CLOCK
function countdown(targetDate) {
  // Get the current date and time
  var currentDate = new Date();

  // Get the target time in milliseconds
  var targetTime = targetDate.getTime();

  // Get the current time in milliseconds
  var currentTime = currentDate.getTime();

  // Calculate the remaining time in milliseconds
  var remainingTime = targetTime - currentTime;

  // Check if the remaining time is negative
  if (remainingTime < 0) {
    // If the remaining time is negative, set the values for the days, hours, minutes, and seconds to 0
    document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("minutes").innerHTML = 0;
    document.getElementById("seconds").innerHTML = 0;
  } else {
    // If the remaining time is positive, convert the remaining time to seconds

  // Convert the remaining time to seconds
  var remainingSeconds = Math.floor(remainingTime / 1000);

  // Convert the remaining seconds to minutes
  var remainingMinutes = Math.floor(remainingSeconds / 60);

  // Convert the remaining minutes to hours
  var remainingHours = Math.floor(remainingMinutes / 60);

  //calculate the number of days remaining
  var remainingDays = Math.floor(remainingHours / 24);

  // Update the countdown clock HTML elements with the calculated values
  document.getElementById("days").innerHTML = remainingDays;
  document.getElementById("hours").innerHTML = remainingHours % 24;
  document.getElementById("minutes").innerHTML = remainingMinutes % 60;
  document.getElementById("seconds").innerHTML = remainingSeconds % 60;

   // Check if there are less than 5 minutes remaining
   if (remainingMinutes < 5) {
      // If there are less than 5 minutes remaining, toggle the "flash" class on the minutes and seconds elements
          document.getElementById("minutes").classList.toggle("fade");
          document.getElementById("seconds").classList.toggle("fade");
  }

  
}
}

// Set the target date and time for the countdown clock
var targetDate = new Date("January 29, 2023 11:30:00");
// Call the countdown function every 1000 milliseconds (1 second)
setInterval(countdown, 1000, targetDate);
*/

// countdown clock part 2

//COUNTDOWN CLOCK
function countdown(targetDate) {
  // Get the current date and time
  var currentDate = new Date();

  // Get the target time in milliseconds
  var targetTime = targetDate.getTime();

  // Get the current time in milliseconds
  var currentTime = currentDate.getTime();

  // Calculate the remaining time in milliseconds
  var remainingTime = targetTime - currentTime;

  // Check if the remaining time is negative
  if (remainingTime < 0) {
    // If the remaining time is negative, add 7 days to the target date
    targetDate.setDate(targetDate.getDate() + 7);
    targetTime = targetDate.getTime();
    remainingTime = targetTime - currentTime;
  }
  // Convert the remaining time to seconds
  var remainingSeconds = Math.floor(remainingTime / 1000);

  // Convert the remaining seconds to minutes
  var remainingMinutes = Math.floor(remainingSeconds / 60);

  // Convert the remaining minutes to hours
  var remainingHours = Math.floor(remainingMinutes / 60);

  //calculate the number of days remaining
  var remainingDays = Math.floor(remainingHours / 24);

  // Update the countdown clock HTML elements with the calculated values
  document.getElementById("days").innerHTML = remainingDays;
  document.getElementById("hours").innerHTML = remainingHours % 24;
  document.getElementById("minutes").innerHTML = remainingMinutes % 60;
  document.getElementById("seconds").innerHTML = remainingSeconds % 60;

   // Check if there are less than 5 minutes remaining
   if (remainingMinutes < 5) {
      // If there are less than 5 minutes remaining, toggle the "flash" class on the minutes and seconds elements
          document.getElementById("minutes").classList.toggle("fade");
          document.getElementById("seconds").classList.toggle("fade");
  }

}

// Set the target date and time for the countdown clock
var targetDate = new Date("January 29, 2023 11:30:00");
// Call the countdown function every 1000 milliseconds (1 second)
setInterval(countdown, 1000, targetDate);





//Video Player

const video = document.getElementById('video');
const playlist = document.getElementById('playlist');

// Load the first video in the playlist
loadVideo(playlist.firstElementChild);

// Set up event listeners for the playlist items
playlist.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    loadVideo(e.target);
  }
});

// Load a new video into the video element
function loadVideo(playlistItem) {
  const src = playlistItem.getAttribute('data-src');
  video.src = src;
  video.load();
  
  // Highlight the selected playlist item
  playlist.querySelectorAll('li').forEach(item => {
    item.classList.remove('selected');
  });
  playlistItem.classList.add('selected');
}


//GIVE MODAL

const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const overlay = document.getElementById('overlay');

openModalBtn.addEventListener('click', () => {
  overlay.classList.add('show');
});

closeModalBtn.addEventListener('click', () => {
  overlay.classList.remove('show');
});

