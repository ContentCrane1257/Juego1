var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5f94fb62-0f82-4709-903a-c01c14be6caf","d8d53ab6-be31-432e-9e0e-3cb2c845063a"],"propsByKey":{"5f94fb62-0f82-4709-903a-c01c14be6caf":{"name":"Sam","sourceUrl":null,"frameSize":{"x":332,"y":365},"frameCount":1,"looping":true,"frameDelay":12,"version":"t6bVPYsG6wIbjAmwcsQeJqI441FKbP5Z","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":332,"y":365},"rootRelativePath":"assets/5f94fb62-0f82-4709-903a-c01c14be6caf.png"},"d8d53ab6-be31-432e-9e0e-3cb2c845063a":{"name":"Alien","sourceUrl":"assets/api/v1/animation-library/gamelab/K9IIpH4zuNP8nrKUdHAWrMAoOxOoRo5F/category_retro/retrocreature_16.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"K9IIpH4zuNP8nrKUdHAWrMAoOxOoRo5F","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/K9IIpH4zuNP8nrKUdHAWrMAoOxOoRo5F/category_retro/retrocreature_16.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Sam = createSprite(25, 200,20,20);
var barrera1 = createSprite (190,120,420,3)
var barrera2 = createSprite(190, 260,420,3)
var coche1 = createSprite(125,150,20,20)
var coche2 = createSprite(200,150,20,20)
var coche3 = createSprite(275,200,20,20)
var coche4 = createSprite(350,200,20,20)

var puntos = 0

Sam.setAnimation("Sam")
Sam.scale = 0.1
coche1.setAnimation("Alien");
coche1.scale = 0.08
coche2.setAnimation("Alien");
coche2.scale = 0.08
coche3.setAnimation("Alien");
coche3.scale = 0.08
coche4.setAnimation("Alien");
coche4.scale = 0.08

coche1.velocityY = -8
coche2.velocityY = +8
coche3.velocityY = -8
coche4.velocityY = +8

function draw() {
  background("black")
  text ("Muertes:"+puntos,50,50)

if (Sam.isTouching(coche1)||Sam.isTouching(coche2)||Sam.isTouching(coche3)||Sam.isTouching(coche4)){
  Sam.x = 25;
  Sam.y = 200
puntos = puntos+1
}

if (keyDown("d")){
  Sam.x =Sam.x + 10
}
if (keyDown("a")){
  Sam.x =Sam.x - 10
}
if(Sam.x>400){
  fill ("lightgray")
  textSize (20)
  text("¡Ganaste!",150,200)
}

createEdgeSprites()
Sam.bounceOff(barrera1)
Sam.bounceOff(barrera2)

coche1.bounceOff(barrera1)
coche2.bounceOff(barrera1)
coche3.bounceOff(barrera1)
coche4.bounceOff(barrera1)

coche1.bounceOff(barrera2)
coche2.bounceOff(barrera2)
coche3.bounceOff(barrera2)
coche4.bounceOff(barrera2)

  drawSprites()
  


}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
