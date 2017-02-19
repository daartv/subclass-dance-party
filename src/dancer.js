// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  
  this.$node = $('<span class="dancer"></span>');
  
  this.setPosition(top, left);
  this.step();
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.on('mouseover', this.select.bind(this));


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

makeDancer.prototype.select = function() {
  this.$node.css({
    'border': 'solid red 4px'
  });
};