/**
 * Represents the position (x,y) of the ball in the playing area.
 */
class Position {
    /**
     * @constructor of Position.
     * @param {number} x - the horizontal positioning of the bale.
     * @param {number} y - the vertical positioning of the bale.
     */
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    /**
     * Simple getter of _x.
     * @returns {number} x - the horizontal positioning of the bale.
     */
    get x() {
        return this._x;
    }

    /**
     * Simple getter of _y.
     * @returns {number} y - the vertical positioning of the bale.
     */
    get y() {
        return this._y;
    }

    /**
     * Simple setter of _x.
     * @param {number} value - an integer that represents 
     * the horizontal positioning.
     */
    set x(value) { 
        this._x = value;
    }

    /**
     * Simple setter of _y.
     * @param {number} value - an integer that represents 
     * the vertical positioning.
     */
    set y(value) {
        this._y = value;
    }
}