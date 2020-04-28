/**
 * Controller for the movements of the ball.
 * Suggests methods for starting/stopping the ball and making it move
 */
class BallCtrl {

    /**
     * Constructor of BallCtrl.
     * @param {Game} game - the ball to control.
     * @param {View} view - the view.
     */
    constructor(game, view) {
        this._game = game;
        this._view = view;
        view.displayBall(game._ball);
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
        game._ball.move();
        this._view.displayBall(this._ball);
    }

    /**
     * Stops the ball.
     */
    stop() {
        clearInterval(this._moveListener);
    }
}