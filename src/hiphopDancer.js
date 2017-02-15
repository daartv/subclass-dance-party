var makeHiphopDancer = function(top, left, timeBetweenSteps) {
 
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('animated bounce infinite');
};

makeHiphopDancer.prototype = Object.create(makeDancer.prototype);

makeHiphopDancer.prototype.constructor = makeHiphopDancer;

makeHiphopDancer.prototype.step = function() {
    
  makeDancer.prototype.step.call(this);

  /*this.$node.toggle();*/
};

makeHiphopDancer.prototype.lineUp = function() {
  this.$node.removeClass('dancer');
  this.$node.addClass('lineBottom');
};