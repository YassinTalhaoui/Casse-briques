/**
 * This class is the entry point to all classes of the model.
 */
class Game {

    /**
     * @constructor of Game.
     */
    constructor() {
        this._paddle = new Paddle(0);               
        this._ball = new Ball(new Position(this.entierAleatoire(0, 941), 579), new Movement(this.entierAleatoire(-3, 3), -1));
    }

    /**
     * Simple getter of paddle.
     * @returns {Paddle} the paddle of the game.
     */
    get paddle() {
        return this._paddle;
    }

    /**
    * Simple getter of paddle.
    * @returns {Ball} the ball of the game.
    */
    get ball() {
        return this._ball;
    }

    /**
     * Moves the racket in relation to the left edge of the scene. 
     * @param {number} val - an integer.
     */
    paddleMove(val) {
        this._paddle.moveTo(val);
    }

    /**
     * Changes the position of the ball according to
     * its movement.
     */
    ballMove() {
        this._ball.move();
    }

    /**
     * Provides a random integer between min and max.
     * @param {number} min - the minimum.
     * @param {number} max - the maximum.
     * @returns the random integer.
     */
    entierAleatoire(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}