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

function getBumperInput() {
    const bumper = {
    left: calliBot2.readBumperSensor(C2Sensor.links, C2State.an),
    right: calliBot2.readBumperSensor(C2Sensor.rechts, C2State.an),
    both: calliBot2.readBumperSensor(C2Sensor.links, C2State.an) && calliBot2.readBumperSensor(C2Sensor.rechts, C2State.an),
    neither: calliBot2.readBumperSensor(C2Sensor.links, C2State.aus) && calliBot2.readBumperSensor(C2Sensor.rechts, C2State.aus)
    }
    return bumper
}