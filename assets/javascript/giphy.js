// topics - create an array of strings
var topics = ["basketball", "football", "baseball", "soccer", "tennis", "golf"];

// giphy API function
function displayTopicInfo() {
        // clear gifs div to avoid repeat results
        $("#gifs").empty();

        var topic = $(this).attr("data-name");
		var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + topic + '&api_key=dc6zaTOxFJmzC';
        // Creates AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
	          for (var i = 0; i < 10; i++) {          
	          console.log(response);
	          var currentGif = response.data[i];
	          var result = $("<div class='renderedGif''>");
	          // setting rating as a variable
	          var rating = (currentGif.rating).toUpperCase();
	          result.append("<p> Rating: " + rating);
	          
	          // setting image as a variable & class to use in onclick function later
	          var still = $("<img src='" + currentGif.images.original_still.url + "' width='300px' height='300px' name='" + currentGif.images.original.url + "' data-url='" + currentGif.images.original_still.url + "'>");
	          still.addClass("img-rounded");
	          result.append(still);
	          $("#gifs").append(result);
	          
	          	// when user clicks the gif, it will animate
				// when user clicks the gif again, it will stop
		          var toggle = 0;
		          still.on("click", function(event){
		          	if (toggle === 0) {
		          		$(this).attr("src", ($(this).attr("name")));
		          		toggle = 1;
		          	} else if (toggle === 1) {
		          		$(this).attr("src", ($(this).attr("data-url")));
		          		toggle = 0;
		          	}
		          })

	          }
        });
};

// create buttons from the array of strings
function renderButtons() {
	// Delete the content inside the buttons div prior to adding new topics to avoid repeat buttons
	$("#buttons").empty();
	// Loop through the array of topics, then generate buttons for each topic in the array
	    for (var i = 0; i < topics.length; i++) {
	      var a = $("<button>");
          // Adds a class of movie to our button
          a.addClass("topic btn-danger btn-lg");
          // Added a data-attribute
          a.attr("data-name", topics[i]);
          // Provided the initial button text
          a.text(topics[i]);
	      // Added the button to the buttons div
          $("#buttons").append(a);
	    }
};

// user input from form will be added to array, then a function that creates new button
	  $("#add-topic").on("click", function(event) {
	    event.preventDefault();
	    // Write code to grab the text the user types into the input field
	    var topic = $("#topic-input").val().trim();
	    // Write code to add the new movie into the movies array
	    topics.push(topic);
	    // The renderButtons function is called, rendering the list of movie buttons
	    renderButtons();
	  });

// when a button is clicked, API should grab 10 static gifs - display image
$(document).on("click", ".topic", displayTopicInfo);

// Calling the renderButtons function to display the initial list of movies
renderButtons();

