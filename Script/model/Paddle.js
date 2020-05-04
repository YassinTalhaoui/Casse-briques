/** 
 * This class represents the paddle of the game.
 */
class Paddle extends Sprite {

  /**
   * Returns the new position of the racket in relation to
   * the left edge of the scene. 
   * @param {number} val - an integer.
   */
  moveTo(val) {
    this._topLeft._x = val;
    return this._topLeft._x;
  }
}