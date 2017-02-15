describe('balletDancer', function() {

  var balletDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    balletDancer = new makeBalletDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(balletDancer.$node).to.be.an.instanceof(jQuery);
  });
/*
  it('should have a step function that makes its node blink', function() {
    sinon.spy(balletDancer.$node, 'toggle');
    balletDancer.step();
    expect(balletDancer.$node.toggle.called).to.be.true;
  });
*/

  it('should have a lineup function that adds a new class and removes the old class', function() {
    sinon.spy(balletDancer.$node, 'removeClass');
    balletDancer.lineUp();
    expect(balletDancer.$node.removeClass.called).to.be.true;
    sinon.spy(balletDancer.$node, 'addClass');
    balletDancer.lineUp();
    expect(balletDancer.$node.addClass.called).to.be.true;
  });

  it('should have a set position function that sets position of the dancer', function() {
    sinon.spy(balletDancer.$node, 'css');
    balletDancer.setPosition();
    expect(balletDancer.$node.css.called).to.be.true;
  });


  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(balletDancer, 'step');
      expect(balletDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      //clock.tick(timeBetweenSteps);

      expect(balletDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(balletDancer.step.callCount).to.be.equal(2);
    });
  });
});