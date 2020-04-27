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
        ball.position.x += ball.movement.deltaX;
        // ball.position.x = ball.position.x + ball.movement.deltaX;
        // ball.position.y = ball.position.y + ball.movement.deltaY;
        ball.position.y += ball.movement.deltaY;
        ball.bounceHorizontal();
        ball.bounceVertical();
        return new Position(ball.position.x, ball.position.y);
    }

    /**
    * Reverses the horizontal direction if the ball bounces the right or
    * left side of the playing area.
    */
    bounceHorizontal() {
        if (ball.position.x + ball.movement.deltaX < 0 || ball.position.x + ball.movement.deltaX > 941) { //970 - 24-5
            this._movement.reverseX();
        }
    }

    /**
     * Reverses the vertical direction if the ball bounces the north or 
     * south side of the playing area.
     */
    bounceVertical() {
        if (ball.position.y + ball.movement.deltaY < 0 || ball.position.y + ball.movement.deltaY > 579) { //600 -24-5
            this._movement.reverseY();
        }
    }
}