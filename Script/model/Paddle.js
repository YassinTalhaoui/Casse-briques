/**
 * This class represents the paddle of the game.
 */
class Paddle {

    /**
     * Constructor of Paddle.
     * @param {*} left an integer.
     */
    constructor(left) {
        this._left = left;
    }

    /**
     * Simple getter of _left.
     */
    getLeft() {
        return this._left;
    }

    /**
     * Returns the new position of the racket in relation to
     * the left edge of the scene. 
     * @param {*} val an integer.
     */
    moveTo(val) {
        this._left = val;
        return this._left;
    }
}