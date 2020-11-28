document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('button')
  btn.addEventListener('click', () => {
    const port = chrome.runtime.connectNative('com.iamskok.hello_world');
    port.onMessage.addListener(function(msg) {
      console.log("Received", msg);
      document.getElementById('text').innerHTML = msg.length
    });
    port.onDisconnect.addListener(function() {
      console.log("Disconnected");
    });
    port.postMessage({ text:"Hello World" })
  })
})
