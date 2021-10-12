class Badminton {
    constructor(x, y, w, h) {
        this.body = Bodies.rectangle(x, y, w, h)
        this.w = w
        this.h = h

        this.image = loadImage("assets/badminton.png")
    }
}