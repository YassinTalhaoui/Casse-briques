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

      if( paddle.getLeft()<=0){            //Limite gauche de ma scene.
         document.getElementById("raquette").style.marginLeft = 0 + "px";
      }else if( paddle.getLeft()>=864){    //Limite droite de ma scene.
         document.getElementById("raquette").style.marginLeft = 864 + "px";
      }else
      document.getElementById("raquette").style.marginLeft = paddle.getLeft() + "px";
      console.log( paddle.getLeft() +"px" );
   }

   /**
    * determines the distance of any id unId element from
    * on the left edge of the navy window.
    */
   sceneLeft() {

      console.log(document.getElementById("scene").offsetLeft);
   }

}
