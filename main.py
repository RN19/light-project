def on_button_pressed_a():
    global mode
    mode = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def stop_light():
    global range2
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.GREEN))
    basic.pause(5000)
    range2 = strip.range(2, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    basic.pause(4500)
    range2 = strip.range(1, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.RED))
    basic.pause(7500)
    range2 = strip.range(0, 1)
    range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
def cw_timer_impared():
    basic.show_icon(IconNames.STICK_FIGURE)
    music.play_tone(494, music.beat(BeatFraction.WHOLE))
    basic.pause(1500)
    basic.show_number(9)
    music.play_tone(349, music.beat(BeatFraction.QUARTER))
    basic.pause(500)
    basic.show_number(8)
    music.play_tone(494, music.beat(BeatFraction.QUARTER))
    basic.pause(500)
    basic.show_number(7)
    music.play_tone(349, music.beat(BeatFraction.QUARTER))
    basic.pause(500)
    basic.show_number(6)
    music.play_tone(494, music.beat(BeatFraction.QUARTER))
    basic.pause(500)
    basic.show_number(5)
    music.play_tone(349, music.beat(BeatFraction.QUARTER))
    basic.pause(500)
    basic.show_number(4)
    music.play_tone(494, music.beat(BeatFraction.QUARTER))
    basic.pause(500)
    basic.show_number(3)
    music.play_tone(349, music.beat(BeatFraction.QUARTER))
    basic.pause(500)
    basic.show_number(2)
    music.play_tone(494, music.beat(BeatFraction.QUARTER))
    basic.pause(500)
    basic.show_number(1)
    music.play_tone(349, music.beat(BeatFraction.QUARTER))
    basic.pause(500)
    basic.show_number(0)
    music.play_tone(494, music.beat(BeatFraction.QUARTER))
    basic.pause(500)
    basic.show_icon(IconNames.NO)
def cross_walk_timer():
    basic.show_icon(IconNames.STICK_FIGURE)
    basic.pause(500)
    basic.show_number(9)
    basic.pause(500)
    basic.show_number(8)
    basic.pause(500)
    basic.show_number(7)
    basic.pause(500)
    basic.show_number(6)
    basic.pause(500)
    basic.show_number(5)
    basic.pause(500)
    basic.show_number(4)
    basic.pause(500)
    basic.show_number(3)
    basic.pause(500)
    basic.show_number(2)
    basic.pause(500)
    basic.show_number(1)
    basic.pause(500)
    basic.show_number(0)
    basic.pause(500)
    basic.show_icon(IconNames.NO)

def on_button_pressed_b():
    global mode
    mode = 2
input.on_button_pressed(Button.B, on_button_pressed_b)

distance = 0
mode = 0
range2: neopixel.Strip = None
strip: neopixel.Strip = None
basic.show_icon(IconNames.NO)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.set_brightness(255)
range2 = strip.range(0, 1)
range2.show_color(neopixel.colors(NeoPixelColors.RED))

def on_forever():
    global range2
    if mode == 1:
        range2 = strip.range(0, 1)
        range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
        cross_walk_timer()
        stop_light()
    elif mode == 2:
        range2 = strip.range(0, 1)
        range2.show_color(neopixel.colors(NeoPixelColors.BLACK))
        cw_timer_impared()
        stop_light()
    else:
        if distance < 5:
            basic.show_icon(IconNames.NO)
            stop_light()
basic.forever(on_forever)

def on_forever2():
    global distance
    pins.digital_write_pin(DigitalPin.P1, 0)
    control.wait_micros(2)
    pins.digital_write_pin(DigitalPin.P1, 1)
    control.wait_micros(10)
    pins.digital_write_pin(DigitalPin.P1, 0)
    distance = pins.pulse_in(DigitalPin.P2, PulseValue.HIGH) / 58
    basic.pause(2000)
basic.forever(on_forever2)
