input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    radio.sendNumber(5)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(4)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 0, 255, 0, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
})
radio.setGroup(3)
radio.setFrequencyBand(33)
basic.showIcon(IconNames.Sad)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
radio.sendNumber(0)
