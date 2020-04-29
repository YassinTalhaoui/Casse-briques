/**
 * This class represents the ball of the game.
 */
class Ball {

    /**
     * @constructor of Ball.
     * @param {Position} position - the position of the ball.
     * @param {Movement} movement - the amount of movements on every move.
     */
    constructor(position, movement) {
        this._position = position;
        this._movement = movement;
    }

    /**
     * Simple getter of position.
     * @returns the position of the ball.
     */
    get position() {
        return this._position;
    }

    /**
     * Simple getter of movement.
     * @returns the amount of movements on every move.
     */
    get movement() {
        return this._movement;
    }

    /**
     * Changes the position of the ball according to
     * its movement
     */
    move() {
        game.ball.position.x += game.ball.movement.deltaX;
        game.ball.position.y += game.ball.movement.deltaY;
        game.ball.bounceHorizontal();
        game.ball.bounceVertical();
        game.ball.bounceOnRacket();
        return new Position(game.ball.position.x, game.ball.position.y);
    }

    /**
     * Reverses the horizontal direction if the ball bounces the right or
     * left side of the playing area.
     */
    bounceHorizontal() {
        if (game.ball.position.x + game.ball.movement.deltaX < 0 || game.ball.position.x + game.ball.movement.deltaX > 941) { //970 - 24 - 5
            this._movement.reverseX();
        }
    }

    /**
     * Reverses the vertical direction if the ball bounces the north or 
     * south side of the playing area.
     */
    bounceVertical() {
        if (game.ball.position.y + game.ball.movement.deltaY < 0 || game.ball.position.y + game.ball.movement.deltaY > 579) { //600 - 24 - 5
            this._movement.reverseY();
        }
    }

    /**
     * Make that the ball can bounce on the racket.
     */
    bounceOnRacket() {
        if (game.ball.position.x + game.ball.movement.deltaX >= document.getElementById("raquette").offsetLeft - 152  //152 est le offsetLeft de ma scene.
            && document.getElementById("raquette").offsetLeft - 152 + racketWidth >= game.ball.position.x
            + game.ball.movement.deltaX && game.ball.position.y + game.ball.movement.deltaY > 563) {  //563 est la position du cotés superieur de ma raquette
            this._movement.reverseY();                                                                //par rapport a la scene. (579-16)
        }
    }
}