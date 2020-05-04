/**
 * A simple class that allows to include a width and a height.
 */
class Dimension{

    /**
     * @constructor of Dimension.
     * @param {number} width - an integer that represents the width.
     * @param {number} heigth - an integer that represents the heigth.
     */
    constructor(width,heigth){
        this._width = width;
        this._heigth = heigth;
    }

    /**
     * Simple getter of _width.
     * @returns {number} _width.
     */
    get width(){
        return this._width;
    }

    set width(value){
        this._width = value;
    }

    /**
     * Simple getter of _heigth.
     * @returns {number} _heigth.
     */
    get heigth(){
        return this._heigth;
    }
}