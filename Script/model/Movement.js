/**
 * Represents the movements of the ball, the the horizontal and vertical variation of the position.
 */
class Movement {

    /**
     * @constructor of Movement.
     * @param {number} deltaX - the horizontal variation of the position.
     * @param {number} deltaY - the vertical variation of the position.
     */
    constructor(deltaX, deltaY) {
        this._deltaX = deltaX;
        this._deltaY = deltaY;
    }

    /**
     * Simple getter of _deltaX.
     * @returns {number} deltaX - the horizontal variation of the position.
     */
    get deltaX() {
        return this._deltaX;
    }

    /**
     * Simple getter of _deltaY.
     * @returns {number} deltaY - the vertical variation of the position.
     */
    get deltaY() {
        return this._deltaY;
    }

    /**
     * Simple setter of _deltaX.
     * @param {number} value - an integer that represents 
     * the horizontal variation of the position.
     */
    set deltaX(value) {
        this._deltaX = value;
    }

    /**
     * Simple setter of _deltaY.
     * @param {number} value - an integer that represents 
     * the vertical variation of the position.
     */
    set deltaY(value) {
        this._deltaY = value;
    }
}