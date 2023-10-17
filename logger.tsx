import winston from "winston";
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: "info",
  format: (timestamp && json) && combine?.(timestamp(), json()),
  transports: [
    new winston.transports.File({
      filename: "app.log"
    }),
  ],
});

export { logger };