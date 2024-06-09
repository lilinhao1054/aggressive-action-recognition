const ffmpeg = require("node-fluent-ffmpeg");
const predictWrapper = require("./predict");
const tmp = require('tmp');
const logger = require("../logger");

// Function to process video frames
function processFrames(socket, { id, username, password, ip }) {
  function process() {
    tmp.file({ postfix: '.mp4' }, (err, path) => {
      if (err) throw err;
      ffmpeg(`rtsp://${username}:${password}@${ip}:80/cam/realmonitor?channel=1&subtype=0&proto=Private3`)
        .outputOptions('-vf fps=48')
        .outputOptions('-c:v libx264')
        .outputOptions('-preset ultrafast')
        .outputOptions('-tune zerolatency')
        .outputOptions('-t 2')
        .on('error', (e) => {
          logger.error('process frames fail', { id, ip, msg: e.message })
        })
        .on('end', () => {
          predictWrapper(path, socket, id);
        })
        .output(path)
        .run();
    })

    setTimeout(process, 5000);
  }
  process();
}

module.exports = processFrames;