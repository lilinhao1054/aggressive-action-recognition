const { format, transports, createLogger } = require('winston');

const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
    format.align(),
    format.printf((i) => `${i.level}: ${[i.timestamp]}: ${i.message}`)
  ),
  transports: [
    new transports.File({
      filename: "logs/info.log",
      level: "info",
      format: format.combine(
        format.printf((i) =>
          i.level === "info"
            ? `${i.level}: ${i.timestamp} ${i.message}`
            : ""
        )
      ),
    }),
    new transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple(),
  }));
}

module.exports = logger;