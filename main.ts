function green_light () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
input.onButtonPressed(Button.A, function () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    green_light()
    cross_walk_timer()
    yellow_light()
    basic.pause(100)
    red_light()
    basic.pause(100)
})
function cross_walk_timer () {
    basic.showIcon(IconNames.StickFigure)
    count = 9
    for (let index = 0; index < 9; index++) {
        basic.showNumber(count)
        count += -1
    }
}
input.onButtonPressed(Button.B, function () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    green_light()
    cross_walk_timer()
    yellow_light()
    basic.pause(100)
    red_light()
    basic.pause(100)
})
function yellow_light () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function red_light () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
}
let distance = 0
let count = 0
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
basic.showIcon(IconNames.No)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(255)
range = strip.range(0, 1)
range.showColor(neopixel.colors(NeoPixelColors.Red))
basic.forever(function () {
    if (distance < 5) {
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(4)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    basic.pause(2000)
})
