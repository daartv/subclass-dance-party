var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
 //debugger;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('animated wobble infinite');
  console.log(JSON.stringify(window.makeBlinkyDancer));
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
    
  makeDancer.prototype.step.call(this);

  //this.$node.toggle();
};

makeBlinkyDancer.prototype.lineUp = function() {
  this.$node.removeClass('dancer');
  this.$node.addClass('lineLeft');
};

