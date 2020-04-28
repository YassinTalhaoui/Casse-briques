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
      if (paddle.left <= 0) {             //Limite gauche de ma scene.
         document.getElementById("raquette").style.marginLeft = 0 + "px";
      } else if (paddle.left >= 864) {    //Limite droite de ma scene.
         document.getElementById("raquette").style.marginLeft = 864 + "px";
      } else
         document.getElementById("raquette").style.marginLeft = paddle.left + "px";
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
      document.getElementById("ball").style.marginLeft = game.ball.position.x + "px";
      document.getElementById("ball").style.marginTop = game.ball.position.y + "px";
   }
}
