'use strict';


/**
 * Adds a event listeners for a user deletion buttons.
 */
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.getElementsByClassName('delete-btn');
  for (const button of buttons) {
    button.addEventListener('mouseover', function() {
      button.src = '/images/red-recycle-bin.png';
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.getElementsByClassName('delete-btn');
  for (const button of buttons) {
    button.addEventListener('mouseout', function() {
      button.src = '/images/green-recycle-bin.png';
    });
  }
});


/**
 * Adds a event listeners for a user edit buttons.
 */
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.getElementsByClassName('edit-btn');
  for (const button of buttons) {
    button.addEventListener('mouseover', function() {
      button.src = '/images/pencil-green.png';
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.getElementsByClassName('edit-btn');
  for (const button of buttons) {
    button.addEventListener('mouseout', function() {
      button.src = '/images/pencil-blue.png';
    });
  }
});
