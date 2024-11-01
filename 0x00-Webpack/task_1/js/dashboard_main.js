import $ from 'jquery';
import _ from 'lodash';

// Add the elements to the page
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Bind the debounce function to the button click event
$('button').on('click', _.debounce(updateCounter, 500));

// Initialize the click counter
let count = 0;

// Define the updateCounter function
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}
