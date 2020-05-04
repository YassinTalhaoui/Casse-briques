/**
 * This class represents the ball of the game.
 */
class Ball extends Sprite {

    /**
     * @constructor of Ball.
     * @param {Movement} movement - the amount of movements on every move.
     * @param {Position} topLeft 
     * @param {Dimension} dimension - the position of the ball.
     */
    constructor(movement, topLeft, dimension) {
        super(topLeft, dimension)
        this._movement = movement;
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
        game.ball._topLeft._x += game.ball.movement.deltaX;
        game.ball._topLeft._y += game.ball.movement.deltaY;
        game.ball.bounceHorizontal();
        game.ball.bounceVertical();
        game.ball.bounceOnRacket();
        return new Position(game.ball._topLeft._x, game.ball._topLeft._y);
    }
}