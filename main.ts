/**
 * Paper
 */
/**
 * Scissors
 */
input.onGesture(Gesture.Shake, function () {
    RPS = randint(0, 2)
    // Rock
    if (RPS == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (RPS == 1) {
        basic.showLeds(`
            . . # # #
            . # # # .
            . # # # .
            . # # # .
            # # # . .
            `)
    } else {
        basic.showLeds(`
            # # . # #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
let RPS = 0
basic.showString("SHAKE ME")
