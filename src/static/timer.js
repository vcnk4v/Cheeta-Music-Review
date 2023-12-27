// Set the release date of the album/song
const releaseDate = new Date('June 30, 2023 00:00:00').getTime();

// Update the countdown every second
const interval = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining until the release date
  const timeRemaining = releaseDate - now;

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update the timer display
  document.querySelector('.days').innerHTML = days + 'd';
  document.querySelector('.hours').innerHTML = hours + 'h';
  document.querySelector('.minutes').innerHTML = minutes + 'm';
  document.querySelector('.seconds').innerHTML = seconds + 's';

  // If the release date has passed, stop the timer
  if (timeRemaining < 0) {
    clearInterval(interval);
    document.querySelector('.timer-heading').innerHTML = 'Album has been released!';
    document.querySelector('.timer').innerHTML = '';
  }
}, 1000);
