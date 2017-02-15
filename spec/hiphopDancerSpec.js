describe('hiphopDancer', function() {

  var hiphopDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    hiphopDancer = new makeHiphopDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(hiphopDancer.$node).to.be.an.instanceof(jQuery);
  });

   /*
  it('should have a step function that makes its node blink', function() {
    sinon.spy(hiphopDancer.$node, 'toggle');
    hiphopDancer.step();
    expect(hiphopDancer.$node.toggle.called).to.be.true;
  });
  */
  
  it('should have a set position function that sets position of the dancer', function() {
    sinon.spy(hiphopDancer.$node, 'css');
    hiphopDancer.setPosition();
    expect(hiphopDancer.$node.css.called).to.be.true;
  });

  it('should have a lineup function that adds a new class and removes the old class', function() {
    sinon.spy(hiphopDancer.$node, 'removeClass');
    hiphopDancer.lineUp();
    expect(hiphopDancer.$node.removeClass.called).to.be.true;
    sinon.spy(hiphopDancer.$node, 'addClass');
    hiphopDancer.lineUp();
    expect(hiphopDancer.$node.addClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(hiphopDancer, 'step');
      expect(hiphopDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      //clock.tick(timeBetweenSteps);

      expect(hiphopDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(hiphopDancer.step.callCount).to.be.equal(2);
    });
  });
});