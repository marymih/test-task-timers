const addTimerButton = document.getElementById('add-timer');
const timeInput = document.getElementById('time-input');
const timersList = document.getElementById('timers');

function createTimer(duration) {
  const li = document.createElement('li');
  li.classList.add('timer-item');

  const timeDisplay = document.createElement('span');
  timeDisplay.classList.add('time-display');
  timeDisplay.innerText = duration;

  const stopButton = document.createElement('button');
  stopButton.classList.add('btn');
  stopButton.classList.add('stop-btn');
  stopButton.innerText = 'Stop';

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('btn');
  deleteButton.classList.add('delete-btn');
  deleteButton.innerText = 'Delete';

  let interval;

  stopButton.addEventListener('click', function() {
    if (interval) {
      clearInterval(interval);
      interval = null;
      this.disabled = true;
    }
  });

  deleteButton.addEventListener('click', function() {
    if (interval) {
      clearInterval(interval);
    }
    this.parentElement.remove();
  });

  li.appendChild(timeDisplay);
  li.appendChild(stopButton);
  li.appendChild(deleteButton);
  timersList.appendChild(li);

  // Start the timer
  interval = setInterval(() => {
    if (duration <= 0) {
      clearInterval(interval);
      timeDisplay.innerText = '0';
      stopButton.disabled = true;
      return;
    }

    duration -= 1;
    timeDisplay.innerText = duration;

    if (duration === 0) {
      clearInterval(interval);
      li.remove();
    }
  }, 1000);
}

addTimerButton.addEventListener('click', () => {
  const timeInSeconds = parseInt(timeInput.value, 10);

  if (timeInSeconds <= 0) {
    alert('Please enter a valid time in seconds');
    return;
  }

  createTimer(timeInSeconds);
  timeInput.value = '';
});
