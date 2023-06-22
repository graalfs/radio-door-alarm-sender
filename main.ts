input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
radio.setGroup(19)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) > 500) {
        radio.sendString("C")
    } else {
        radio.sendString("O")
    }
    basic.pause(2000)
})
