/**
 * Retains the player's score.
 */
class Player{

    /**
     * constructor of Player. 
     * @param {number} score - the player's score.
     */
    constructor(score){
        this._score = score;
    }

    /**
     * Simple getter of _score.
     * @returns {number} _score.
     */
    get score(){
        return this._score;
    }

    /**
    * Adds points to the player's score.
    * @param {number} points - an integer that represents the player's points.
    */
    addToScore(points){
    }
}