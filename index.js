const localtunnel = require('localtunnel');
const util = require('util');

const localtunnelAsync = util.promisify(localtunnel);

module.exports = function(gemini, options) {
  let tunnel;
  gemini.on(gemini.events.START_RUNNER, async () => {
    tunnel = await localtunnel(options.port, options.subdomain);
    gemini.config.rootUrl = tunnel.url;
  });
  gemini.on(gemini.events.END_RUNNER, () => {
    tunnel.close();
  });
};
