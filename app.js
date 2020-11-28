#!/usr/local/bin/node
const fs = require('fs');

function sendMsg(msg) {
    const header = Buffer.alloc(4);
    header.writeUInt32LE(msg.length, 0);

    process.stdout.write(header);
    process.stdout.write(msg);
}


(() => {
  // A queue to store the chunks as we read them from stdin.
  // This queue can be flushed when `payloadSize` data has been read
  let chunks = [];

  const processData = () => {
    // Create one big buffer with all all the chunks
    const stringData = Buffer.concat(chunks);
    const msg = JSON.stringify({length: stringData.length});
    sendMsg(msg)
  };

  process.stdin.on('readable', () => {
      // A temporary variable holding the nodejs.Buffer of each
      // chunk of data read off stdin
      let chunk = null;
      // Read all of the available data
      while ((chunk = process.stdin.read()) !== null) {
          chunks.push(chunk);
      }
      processData();
  });
})();