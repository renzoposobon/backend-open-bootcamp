const logger = require('./logger')

function showError() {
    throw new Error("showError function");
  }
  try {
    showError();
  } catch (e) {
    logger.log("error", e.toString());
  }

// logger.debug("Mensaje de debug")
// logger.warn("Mensaje de advertencia")

// const numberTen = 52

// try {
//     numberTen === 10
//     logger.info("Correcto, es 10")
// } catch (e) {
//     logger.error("Error, no es 10")
// } finally {
//     logger.warn("Fin del proceso");
// }