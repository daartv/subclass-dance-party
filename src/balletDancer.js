
var makeBalletDancer = function(top, left, timeBetweenSteps, anime) {
 
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.type = 'ballet';
  this.style = 'rotateInUpLeft';
  this.$node.addClass('animated infinite ' + this.type + ' ' + this.style);
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