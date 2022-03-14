// Start animation
$( "#go" ).click(function() {
  $( ".run" ).animate({ left: "+=1000px" }, 1000 );
});
 
// Stop animation when button is clicked
$( "#stop" ).click(function() {
  $( ".run" ).stop();
});
 
// Start animation in the opposite direction
$( "#back" ).click(function() {
  $( ".run" ).animate({ left: "-=1000px" }, 1000 );
});

// Start animation in the opposite direction
$( "#startButton" ).click(function() {
    $( ".run" ).animate({ left: "+=1000px" }, 1000 );
  });