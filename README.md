# gemini-localtunnel

A plugin for [Gemini](https://gemini-testing.github.io/) that allows standalone Selenium Sever (or another compatible solution) access your local web-server.  

Useful for cases when tests can be started from various sources (several CI-agents and developer workstations) that are placed in various networks and behind different NAT/firewalls.

What it really does is:

- Starts a tunnel via [localtunnel](https://localtunnel.me/)
- Gets public available URL to your web-server
- Replaces `rootUrl` in Gemini configuration with the received URL  

## Installation

```
yarn add --dev gemini-localtunnel
npm install --save-dev gemini-localtunnel
```

To use this plugin you also need Node.js version >= v8.0.0

## Configuration

```javascript
{
  plugins: {
    'gemini-localtunnel': {
      // Local web-server port
      port: 8080,
      // Optional: desired subdomain on the localtunnel server
      subdomain: 'foobar'
    }
  }
}
```
