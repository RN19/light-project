function impared_cw () {
    basic.showIcon(IconNames.StickFigure)
    music.playMelody("B C5 G A E F D E ", 185)
    count = 9
    for (let index = 0; index < 9; index++) {
        basic.showNumber(count)
        count += -1
    }
}
function green_light () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
input.onButtonPressed(Button.A, function () {
    mode1 = 1
})
function traffic_light () {
    green_light()
    basic.pause(2000)
    yellow_light()
    basic.pause(1500)
    red_light()
    basic.pause(3500)
}
function cross_walk_timer () {
    basic.showIcon(IconNames.StickFigure)
    count = 9
    for (let index = 0; index < 9; index++) {
        basic.showNumber(count)
        count += -1
    }
}
input.onButtonPressed(Button.B, function () {
    mode1 = 2
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
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let distance = 0
let mode1 = 0
let range: neopixel.Strip = null
let count = 0
let strip: neopixel.Strip = null
basic.showIcon(IconNames.No)
let mode = 0
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(255)
red_light()
basic.forever(function () {
    if (distance < 5) {
        range = strip.range(0, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.showIcon(IconNames.No)
        green_light()
        basic.pause(2000)
        yellow_light()
        basic.pause(2000)
        red_light()
        basic.pause(5000)
    } else if (mode == 1) {
        range = strip.range(0, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
        green_light()
        basic.pause(2000)
        impared_cw()
        yellow_light()
        basic.pause(2000)
        red_light()
        basic.pause(5000)
    } else if (mode == 2) {
        range = strip.range(0, 1)
        range.showColor(neopixel.colors(NeoPixelColors.Black))
        green_light()
        basic.pause(2000)
        impared_cw()
        yellow_light()
        basic.pause(2000)
        red_light()
        basic.pause(5000)
    } else {
    	
    }
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    basic.pause(2000)
})
