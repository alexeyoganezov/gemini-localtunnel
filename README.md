# gemini-localtunnel

A plugin for [Gemini](https://gemini-testing.github.io/) that allows standalone Selenium Sever _(or another compatible solution like Selenoid)_to access your local web-server.  

Useful for cases when tests can be started from various sources (several CI-agents and developer workstations) that are placed in different networks and behind different NATs/firewalls.

Supposed to be used in pair with [gemini-express](https://github.com/Saulis/gemini-express), [gemini-ecstatic](https://github.com/w0rm/gemini-ecstatic) or another solution that starts/stops web-server on test runs. 

## Installation

```
yarn add --dev gemini-localtunnel
npm install --save-dev gemini-localtunnel
```

## Configuration

### Minimal example

_.gemini.js_

```javascript
module.exports = {
  plugins: {
    'gemini-localtunnel': {
      port: 8080
    }
  }
}
```

### Options

Parameter | Alias            | Required | Description
----------|------------------|----------|-----------------------------------------------
port      | localPort        | Yes      | Local web-server port you want to share
subdomain | desiredSubdomain | No       | A subdomain you want to get in your tunnel URL 
host      | tunnelHost       | No       | An address of your `localtunnel-server`
