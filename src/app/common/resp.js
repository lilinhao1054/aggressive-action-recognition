
function respHttp(res, code, message, data) {
  const resp = {
    code,
    data,
    message,
  }

  res.json(resp)
}

function RespSuccess(res) {
  respHttp(res, 200)
}

function RespError(res, msg) {
  respHttp(res, 500, msg ?? 'Interner Server Error')
}

function RespData(res, data) {
  respHttp(res, 200, '', data)
}

module.exports = {
  RespSuccess,
  RespError,
  RespData
}