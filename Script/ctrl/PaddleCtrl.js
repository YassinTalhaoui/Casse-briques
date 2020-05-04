/**
 * Controller for the paddle movements.
 * It make it follow the mouse.
 */
class PaddleCtrl {

    /**
     * Display the paddle and start controlling it with the mouse.
     * @param {Game} game - the paddle.
     * @param {View} view - the view.
     */
    constructor(game, view) {
        view.displayPaddle(game._paddle);
        $(document).mousemove((evt) => this.moveMouse(game, view, evt));
    }

    /**
     * Called when the mouse is moved.
     * It moves the paddle (horizontally) where the mouse is.
     * @param {Paddle} paddle - the paddle.
     * @param {View} view - the view.
     * @param {MouseEvent} evt - the mouse event.
     */
    moveMouse(paddle, view, evt) {
        let val = evt.clientX - document.getElementById("scene").offsetLeft - 5
            - game._paddle.dimension.width / 2;
        paddle = new Paddle(new Position(val, 584), new Dimension(96, 16));
        view.displayPaddle(paddle);
    }
}
