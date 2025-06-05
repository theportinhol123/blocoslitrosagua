let pulse = 0
let totalLitros = 0

/**
 * Iniciar o sensor de fluxo no pino P0
 */
//% block="iniciar sensor de fluxo no pino P0"
//% group="Água"
export function iniciarSensorFluxo(): void {
    pulse = 0
    totalLitros = 0
    pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
        pulse += 1
    })
}

/**
 * Atualizar litros (deve ser chamado a cada segundo)
 */
//% block="atualizar litros a cada segundo"
//% group="Água"
export function atualizarLitros(): void {
    totalLitros += pulse / 7.5 / 60
    pulse = 0
}

/**
 * Mostrar no ecrã o total arredondado de litros
 */
//% block="mostrar total de litros arredondado"
//% group="Água"
export function mostrarLitros(): void {
    basic.showNumber(Math.round(totalLitros))
}

/**
 * Obter o valor total de litros medidos
 */
//% block="obter total de litros"
//% group="Água"
export function obterLitros(): number {
    return totalLitros
}
