const fs = require("fs");
const { createLogger, format, transports } = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

const tsFormat = () => new Date.toISOString();
const logDir = process.env.LOGGING_DIR || "logs";
const logLevel = process.env.LOGGING_LEVEL || "info";

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

module.exports = createLogger({
  transports: [
    new transports.Console({
      timestamp: tsFormat,
      colorize: true,
      level: "info"
    })
    // new transports.DailyRotateFile({
    //   logDir: `${logDir}/debug.log`,
    //   timestamp: tsFormat,
    //   prepend: true,
    //   level: logLevel
    // })
  ]
});
