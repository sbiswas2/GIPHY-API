// topics - create an array of strings
var topics = ["basketball", "football", "baseball", "soccer", "tennis", "golf"];

// use for loop to create buttons from the array of strings
function renderButtons() {
	// Delete the content inside the buttons div prior to adding new topics to avoid repeat buttons
	$("#buttons").empty();
	// Loop through the array of topics, then generate buttons for each topic in the array
	    for (var i = 0; i < topics.length; i++) {
	        $("#buttons").append("<button>" + topics[i] + "</button>");
	    }
};

// This function handles events where the add topic button is clicked
	  $("#add-topic").on("click", function(event) {
	    // event.preventDefault() prevents submit button from trying to send a form.
	    // Using a submit button instead of a regular button allows the user to hit
	    // "Enter" instead of clicking the button if desired
	    event.preventDefault();
	    // Write code to grab the text the user types into the input field
	    var topic = $("#topic-input").val();
	    // Write code to add the new movie into the movies array
	    topics.push(topic);
	    // The renderButtons function is called, rendering the list of movie buttons
	    renderButtons();
	  });

// Calling the renderButtons function to display the initial list of movies
renderButtons();


// when a button is clicked, API should grab 10 static gifs - display image
	// display rating of gif


// when user clicks the gif, it will animate
// when user clicks the gif again, it will stop


// user input from form will be added to array, then a function that creates new button