require('dotenv').config()

module.exports = {
  apps: [
    {
      name: 'forgeapps',
      script: 'node_modules/.bin/tsx',
      args: 'server.ts',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
