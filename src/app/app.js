const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({ origin: '*' }));
app.use(express.json())

const deviceRouter = require('./routes/device');
const analysisRouter = require('./routes/analysis');

app.use('/devices', deviceRouter);
app.use('/analysis', analysisRouter);

require('./task');

BigInt.prototype.toJSON = function () {
  const int = Number.parseInt(this.toString());
  return int ?? this.toString();
};

module.exports = app;