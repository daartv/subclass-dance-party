$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  });

  $('.lineUp').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  // when close to each other swap the moves
  setInterval(function(){
   var other, current,  distance;
    for(var i = 0; i < window.dancers.length; i++){
      current = window.dancers[i];
      for(j = i + 1; j < window.dancers.length; j++){
        other = window.dancers[j];
        distance = Math.sqrt(Math.pow((other.top - current.top), 2) + Math.pow((other.left - current.left),2));

        if (other.type != current.type && distance < 200) {

          if (!current.swapped) {
            current.$node.removeClass(current.style);
            current.$node.addClass(other.style);          
            current.swapped = true;
          }

          if (!other.swapped) {
            other.$node.removeClass(other.style);
            other.$node.addClass(current.style);
            other.swapped = true;
          }
        }        
      }
    }
  }, 500);

});
