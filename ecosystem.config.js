module.exports = {
  apps: [{
    name: "acr-server",
    script: "src/index.js",
    instances: 1,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    },
    exec_mode: 'cluster',
    combine_logs: true,
  }]
}