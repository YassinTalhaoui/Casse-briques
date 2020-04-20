class Paddle {

    constructor(left) {
        this._left = left;
    }

    getLeft() {
        return this._left;
    }

    moveTo(val) {
        this._left = val;
        return this._left;
    }
}