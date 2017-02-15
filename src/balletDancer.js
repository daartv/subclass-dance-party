var makeBalletDancer = function(top, left, timeBetweenSteps) {
 
  makeDancer.call(this, top, left, timeBetweenSteps);
  /*this.$node = $('<span class="ballet"></span>');*/
  this.$node.addClass('animated rotateInUpLeft infinite');

};

makeBalletDancer.prototype = Object.create(makeDancer.prototype);

makeBalletDancer.prototype.constructor = makeBalletDancer;

makeBalletDancer.prototype.step = function() {
    
  makeDancer.prototype.step.call(this);
  
};

makeBalletDancer.prototype.lineUp = function() {
  this.$node.removeClass('dancer');
  this.$node.addClass('lineRight');
};