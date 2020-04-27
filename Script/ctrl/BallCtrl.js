/**
 * Controller for the movements of the ball.
 * Suggests methods for starting/stopping the ball and making it move
 */
class BallCtrl {

    /**
     * Constructor of BallCtrl.
     * @param {Ball} ball - the ball to control.
     * @param {View} view - the view.
     */
    constructor(ball, view) {
        this._ball = ball;
        this._view = view;
        view.displayBall(ball);
    }

    /**
     * Starts the ball.
     */
    start() {
        this._moveListener = setInterval(() => this.move(), 10);
    }

    /**
     * Moves the ball one step (defined by its movement)
     * and refreshes the view.
     */
    move() {
        this._ball.move();
        this._view.displayBall(this._ball);
    }

    /**
     * Stops the ball.
     */
    stop() {
        
        clearInterval(this._moveListener);
      
    }
}