/**
 * Controller for the paddle movements.
 * It make it follow the mouse.
 */
class PaddleCtrl {

    /**
    * Display the paddle and start controlling it with the mouse.
    * @param {Paddle} paddle - the paddle
    * @param {View} view - the view
    */
    constructor(paddle, view) {
        view.displayPaddle(paddle);
        $(document).mousemove((evt) => this.moveMouse(paddle, view, evt));
    }

    /**
    * Called when the mouse is moved.
    * It moves the paddle (horizontally) where the mouse is.
    * @param {Paddle} paddle - the paddle
    * @param {View} view - the view
    * @param {MouseEvent} evt - the mouse event
    */
    moveMouse(paddle, view, evt) {
        let val = evt.clientX - document.getElementById("scene").offsetLeft - 5   // -5px car c est l' epaisseur du 
            - racketWidth / 2;                                                    // bord  de ma scene.                                                    // 
        paddle = new Paddle(val);
        view.displayPaddle(paddle);
        console.log(evt.clientX);
    }
}
