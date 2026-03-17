require('dotenv').config()

module.exports = {
  apps: [
    {
      name: 'forgeapps',
      script: 'npm',
      args: 'run preview',
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT ?? '5173',
        VITE_CALENDLY_URL: process.env.VITE_CALENDLY_URL,
      },
    },
  ],
}
