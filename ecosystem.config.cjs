require('dotenv').config()

module.exports = {
  apps: [
    {
      name: 'forgeapps',
      script: 'node_modules/vite/bin/vite.js',
      args: 'preview --host --port 5173',
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT ?? '5173',
        VITE_CALENDLY_URL: process.env.VITE_CALENDLY_URL,
      },
    },
  ],
}
