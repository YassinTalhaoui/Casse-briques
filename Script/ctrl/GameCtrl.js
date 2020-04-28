/**
 * This class is the entry point to all classes of the controller.
 */
class GameCtrl {

    /**
     * Constructor of GameCtrl.
     * @param {Game} game - the game.
     * @param {View} view - the view.
     */
    constructor(game, view) {
        this._paddleCtrl = new PaddleCtrl(game, view);
        this._ballCtrl = new BallCtrl(game, view);
        this._moveListener = setInterval(() => this._ballCtrl.move(), 5);
    }

    /**
     * Starts the ball.
     */
    play() {
        game.ball.move();
    }

    /**
     * Stops the ball.
     */
    stop() {
        game.ball.stop();
    }
}