/**
 * Regroups any view details. 
 */
class View {

   /**
    * Modifies the css according to the left of the received paddle in order to
    * that the racket is positioned in the right place.
    * @param {Paddle} paddle - the Paddle.
    */
   displayPaddle(paddle) {
      if (paddle._topLeft._x <= 0) {             //Limite gauche de ma scene.
         document.getElementById("raquette").style.marginLeft = 0 + "px";
      } else if (paddle._topLeft._x >= 864) {    //Limite droite de ma scene.
         document.getElementById("raquette").style.marginLeft = 864 + "px";
      } else
         document.getElementById("raquette").style.marginLeft = paddle._topLeft._x + "px";
   }

   /**
    * Determines the distance of any id unId element from
    * on the left edge of the navy window.
    */
   sceneLeft() {
      console.log(document.getElementById("scene").offsetLeft);
   }

   /**
    * Updates the visual position of the ball according to
    * from its current position.
    * @param {Ball} ball - the ball.
    */
   displayBall(ball) {
      document.getElementById("ball").style.marginLeft = game.ball._topLeft._x + "px";
      document.getElementById("ball").style.marginTop = game.ball._topLeft._y + "px";
   }

   /**
    * Dynamically adds a sprite to the playing area.
    * @param {Sprite} sprite - a sprite.
    */
   add(sprite) {
   }

   /**
    * Modifies the visual position of the sprite according to its topLeft attribute.
    * @param {Sprite} sprite - a sprite.
    */
   update(sprite) {
   }

   /**
    * Adds an array of sprites that will be the wall 
    * @param {Sprite} sprite - a sprite.
    */
   addAll(sprite) {
   }

   /**
    * Update the score display
    * @param {number} score - an integer that rapresents the player's score.
    */
   updateScore(score) {
   }
}
