let pulse = 0
let totalLitros = 0

//% block="Iniciar sensor de fluxo no pino P0"
export function iniciarSensorFluxo(): void {
    pulse = 0
    totalLitros = 0
    pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
        pulse += 1
    })
}

//% block="Atualizar litros a cada segundo"
export function atualizarLitros(): void {
    totalLitros += pulse / 7.5 / 60
    pulse = 0
}

//% block="Mostrar total de litros arredondado"
export function mostrarLitros(): void {
    basic.showNumber(Math.round(totalLitros))
}

//% block="Obter total de litros"
export function obterLitros(): number {
    return totalLitros
}
