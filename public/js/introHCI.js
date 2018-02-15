'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	//$('#colorBtn').click(randomizeColors);

    $('.project').click(clickHandler);
	
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);
}

function clickHandler(e) {
		// Prevent following the link
	    e.preventDefault();

	    // Get the div ID, e.g., "project3"
	    var projectID = $(this).closest('.project').attr('id');
	    // get rid of 'project' from the front of the id 'project3'
	    var idNumber = projectID.substr('project'.length);

	    $.get("http://localhost:3000/project/" + idNumber, callback);
	}
	 function callback(result) {
          console.log(result);
          var projectHTML = '<a href="#" class="img detailsImage">' +
          '<img src="' + result.image + '" class="img">' +
          '<p>' + result.title + '</p>' + '<p>' + result.summary+ '</p>'
          '<p><small>' + result.date +
          '</small></p></a>'; 

          console.log('#project' + result.id + ' .details')

          $('#project' + result.id + ' .details').html(projectHTML);
	 }
	   