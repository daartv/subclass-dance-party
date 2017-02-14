// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');

  this.setPosition(top, left);
  this.step();
  this.timeBetweenSteps = timeBetweenSteps;

};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
    
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
  
};

