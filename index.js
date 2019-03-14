const localtunnel = require('localtunnel');

let tunnelInstance;

module.exports = function (gemini, options) {
  gemini.on(gemini.events.START_RUNNER, () => new Promise((resolve, reject) => {
    localtunnel(options.port || options.localPort, {
      subdomain: options.subdomain || options.desiredSubdomain,
      host: options.host || options.tunnelHost,
    }, (err, tunnel) => {
      if (err) {
        reject(err);
      } else {
        tunnelInstance = tunnel;
        console.log(`Tunnel opened: ${tunnel.url}`);
        resolve();
      }
    });
  }));
  gemini.on(gemini.events.END_RUNNER, () => {
    if (tunnelInstance) {
      tunnelInstance.close();
      console.log('Tunnel closed');
    }
  });
};
