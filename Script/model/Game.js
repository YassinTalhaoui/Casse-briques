/**
 * This class is the entry point to all classes of the model. 
 */
class Game {

    /**
     * @constructor of Game.
     */
    constructor() {
        this._paddle = new Paddle(new Position(430, 584), new Dimension(96, 16));
        this._ball = new Ball(new Movement(this.randomInteger(-2, 2), -1), new Position(this.randomInteger(0, 941), 579), new Dimension(24, 24));
        this._wall = new Brick();
    }

    /**
     * Simple getter of _paddle.
     * @returns {Paddle} the paddle of the game.
     */
    get paddle() {
        return this._paddle;
    }

    /**
     * Simple getter of _ball.
     * @returns {Ball} the ball of the game.
     */
    get ball() {
        return this._ball;
    }

    /**
     * Simple getter of _wall.
     * @returns {Brick[]} the wall of the game.
     */
    get wall() {
        return this._wall;
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
    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}