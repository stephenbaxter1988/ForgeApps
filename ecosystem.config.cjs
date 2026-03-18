require('dotenv').config()

module.exports = {
  apps: [
    {
      name: 'forgeapps',
      script: 'server.ts',
      interpreter: 'node',
      interpreter_args: '--import tsx/esm',
      env: {
        NODE_ENV: 'production',
        FA_PORT: '5173',
      },
    },
  ],
}
