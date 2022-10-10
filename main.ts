input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    led.plot(4, 4)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Super")
})
basic.showString(" Hallo Moritz", 100)
basic.forever(function () {
    music.playMelody("G B A G C5 B A B ", 120)
})
