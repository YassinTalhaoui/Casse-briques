/**
 * Regroups any view details. 
 */
class View {

   /**
    * Modifies the css according to the left of the received paddle in order to
    * that the racket is positioned in the right place.
    * @param {*} paddle : the Paddle.
    */
   displayPaddle(paddle) {

      document.getElementById("raquette").style.marginLeft = paddle.getLeft() + "px";

   }

   /**
    * determines the distance of any id unId element from
    * on the left edge of the navy window.
    */
   sceneLeft() {

      console.log(document.getElementById("scene").offsetLeft);

   }

}

