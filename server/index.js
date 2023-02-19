const logger = require('./logger')

// logger.debug("Mensaje de debug")
// logger.warn("Mensaje de advertencia")


const numberTen = 100

if (numberTen === 10) {
    try {
        logger.info("Correcto, es 10")
    } catch (e) {
        logger.error("Error, no es 10")
    }
}