class Turn {
    constructor() {}
    right(winkel: number) {
        calliBot2.motor(C2Motor.links, C2Dir.vorwärts, 50)
        calliBot2.motor(C2Motor.rechts, C2Dir.rückwärts, 50)
        basic.pause(winkel * 5)
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
    }
    left(winkel: number) {
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, 50)
        calliBot2.motor(C2Motor.links, C2Dir.rückwärts, 50)
        basic.pause(winkel * 5)
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
    }
}
const turn = new Turn()

function forward(zeit: number, tempo: number) {
    if (tempo < 0) {
        calliBot2.motor(C2Motor.beide, C2Dir.rückwärts, tempo * -1)
        basic.pause(zeit * 1000)
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
    }
    if (tempo > 0) {
        calliBot2.motor(C2Motor.links, C2Dir.vorwärts, tempo)
        basic.pause(zeit * 1000)
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
    }
}