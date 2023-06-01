input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Scissors)
    radio.sendNumber(1)
    mijugada = 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Square)
    radio.sendNumber(3)
    mijugada = 3
})
radio.onReceivedString(function (receivedString) {
    if (mijugada == 1) {
        if (receivedString == "tijeras") {
            basic.showString("Empate")
        }
        if (receivedString == "piedra") {
            basic.showString("Pierdo")
        }
        if (receivedString == "papel") {
            basic.showString("Gano")
        }
    }
    if (mijugada == 2) {
        if (receivedString == "tijeras") {
            basic.showString("Gano")
        }
        if (receivedString == "piedra") {
            basic.showString("Empate")
        }
        if (receivedString == "papel") {
            basic.showString("Pierdo")
        }
    }
    if ((0 as any) == (3 as any)) {
        if (true) {
            basic.showString("Pierdo")
        }
        if (receivedNumber == 2) {
            basic.showString("Gano")
        }
        if (receivedNumber == 3) {
            basic.showString("Empato")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallSquare)
    radio.sendNumber(2)
    mijugada = 2
})
let mijugada = 0
mijugada = 0
