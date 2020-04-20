
class View {

   displayPaddle(paddle) {
      document.getElementById("raquette").style.marginLeft = paddle.getLeft() + "px";

   }

}