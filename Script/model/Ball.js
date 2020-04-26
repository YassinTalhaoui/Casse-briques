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
     * changes the position of the ball according to
     * its movement
     */
    move() {
        ball.position.x = ball.position.x + ball.movement.deltaX;
        ball.position.y = ball.position.y + ball.movement.deltaY;
        return new Position(ball.position.x, ball.position.y);
    }

}