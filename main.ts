input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
radio.setGroup(19)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) > 500) {
        radio.sendString("C")
    } else {
        radio.sendString("O")
    }
    basic.pause(5000)
})
loops.everyInterval(5000, function () {
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
})
