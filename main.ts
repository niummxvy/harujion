music.setVolume(47)
music.playMelody("C C5 B G E G A A ", 280)
basic.pause(125)
music.playMelody("C C5 B G E G A A ", 280)
basic.pause(125)
music.playMelody("E G A A - E G A ", 280)
music.playMelody("C5 B G A A - E D ", 280)
music.playMelody("C D A G E D C D ", 280)
music.playMelody("E D C - - F E D ", 280)
music.playMelody("C D E - C F E D ", 280)
music.playMelody("C D E F G B E C5 ", 280)
music.playMelody("- B A - D F E - ", 280)
basic.pause(500)
music.playMelody("E G A A - E G A ", 280)
music.playMelody("C5 B G A A - E D ", 280)
music.playMelody("C D A G B C5 B A ", 280)
music.playMelody("G - - E C D E - ", 280)
music.playMelody("C D E - C D E G ", 280)
music.playMelody("G E E D D C C C ", 280)
for (let index = 0; index < 4; index++) {
    music.playTone(220, music.beat(BeatFraction.Whole))
}
basic.forever(function () {
	
})
