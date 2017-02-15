describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });
/*
  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });
*/
  it('should have a lineup function that adds a new class and removes the old class', function() {
    sinon.spy(blinkyDancer.$node, 'removeClass');
    blinkyDancer.lineUp();
    expect(blinkyDancer.$node.removeClass.called).to.be.true;
    sinon.spy(blinkyDancer.$node, 'addClass');
    blinkyDancer.lineUp();
    expect(blinkyDancer.$node.addClass.called).to.be.true;
  });

  it('should have a set position function that sets position of the dancer', function() {
    sinon.spy(blinkyDancer.$node, 'css');
    blinkyDancer.setPosition();
    expect(blinkyDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      //clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});