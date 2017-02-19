var makeHiphopDancer = function(top, left, timeBetweenSteps, anime) {
 
  makeDancer.call(this, top, left, timeBetweenSteps);   
  this.type = 'hiphop';
  this.style = 'bounce';
  this.$node.addClass('animated infinite ' + this.type + ' ' + this.style);
};

makeHiphopDancer.prototype = Object.create(makeDancer.prototype);

makeHiphopDancer.prototype.constructor = makeHiphopDancer;

makeHiphopDancer.prototype.step = function() {
    
makeDancer.prototype.step.call(this);

};

makeHiphopDancer.prototype.lineUp = function() {
  this.$node.removeClass('dancer');
  this.$node.addClass('lineBottom');
};