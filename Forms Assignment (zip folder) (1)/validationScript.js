// Retrieve the input field element
const inputField = document.getElementById('inputField');
const form = document.getElementById('myForm');

// Add an event listener to the form that listens for the submit event
form.addEventListener('submit', function(event) {
  // Prevent form from submitting
  event.preventDefault();
  
  // Retrieve the input field value
  const inputValue = inputField.value;
  
  // Regular expression pattern for alphanumeric input
  const alphanumericPattern = /^[a-zA-Z0-9]+$/;
  
  // Check if the input value matches the pattern
  if (alphanumericPattern.test(inputValue)) {
    // Valid input: display confirmation and submit the form
    alert('Input is valid and form is submitted!');
    // You can programmatically submit the form here if needed
    // form.submit();
  } else {
    // Invalid input: display error message
    alert('Error: Input is not alphanumeric. Please enter only letters and numbers.');
  }
});