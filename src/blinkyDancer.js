var makeBlinkyDancer = function(top, left, timeBetweenSteps, anime) {
 //debugger;
  makeDancer.call(this, top, left, timeBetweenSteps);  
  this.type = 'blinky';
  this.style = 'wobble';
  this.$node.addClass('animated infinite ' + this.type + ' ' + this.style); 
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
    
  makeDancer.prototype.step.call(this);

};

makeBlinkyDancer.prototype.lineUp = function() {
  this.$node.removeClass('dancer');
  this.$node.addClass('lineLeft');
};
