/**
 * Captures elements common to all elements of the game.
 */
class Sprite {

    /**
     * @constructor of Sprite.
     * @param {String} id - the identifier of the sprite.
     * @param {String} type - the category of the sprite.
     * @param {Position} topLeft - the position of the sprite.
     * @param {Dimension} dimension - the dimensions of the sprite.
     */
    constructor(/*id,type,*/topLeft, dimension) {
        //this._id = id;
        //this._type = type;
        this._topLeft = topLeft;
        this._dimension = dimension;
    }

    /**
     * Simple getter of _id.
     * @returns {String} _id.
     */
    get id() {
        return this._id;
    }

    /**
     * Simple getter of _type.
     * @returns {String} _type.
     */
    get type() {
        return this._type;
    }

    /**
     * Simple getter of _topLeft.
     * @returns {Position} _topLeft.
     */
    get topLeft() {
        return this._topLeft;
    }

    /**
     * Simple getter of dimension.
     * @returns {Dimension} _dimension.
     */
    get dimension() {
        return this._dimension;
    }

    /**
    * Reverses the horizontal direction if the ball bounces the right or
    * left side of the playing area.
    */
    bounceHorizontal() {
        if (game.ball._topLeft._x + game.ball.movement.deltaX < 0 || game.ball._topLeft._x + game.ball.movement.deltaX > 941) { //970 - 24 - 5
            this._movement.reverseX();
        }
    }

    /**
     * Reverses the vertical direction if the ball bounces the north or 
     * south side of the playing area.
     */
    bounceVertical() {
        if (game.ball._topLeft._y + game.ball.movement.deltaY < 0 || game.ball._topLeft._y + game.ball.movement.deltaY > 579) { //600 - 24 - 5
            this._movement.reverseY();
        }
    }

    /**
     * Make that the ball can bounce on the racket.
     */
    bounceOnRacket() {
        let racketLeft = document.getElementById("raquette").offsetLeft;
        if (game.ball._topLeft._x + game.ball.movement.deltaX >= racketLeft - 152  //152 est le offsetLeft de ma scene.
            && racketLeft - 152 + game._paddle.dimension.width >= game.ball._topLeft._x
            + game.ball.movement.deltaX && game.ball._topLeft._y + game.ball.movement.deltaY > 563) {  //563 est la position du cotés superieur de ma raquette
            this._movement.reverseY();                                                                 //par rapport a la scene. (579-16)
        }
    }
}