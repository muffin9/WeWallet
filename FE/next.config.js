const dotenv = require('dotenv');
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
  const envConfig = {
    [PHASE_DEVELOPMENT_SERVER]: {
      env: 'development',
      envFile: './env/.env.dev',
    },
    [PHASE_PRODUCTION_BUILD]: {
      env: 'production',
      envFile: './env/.env.prod',
    },
  };

  const phaseConfig = envConfig[phase] || envConfig[PHASE_DEVELOPMENT_SERVER];

  dotenv.config({ path: phaseConfig.envFile });

  return {
    env: {
      API_URL: process.env.API_URL,
    },
    images: {
      domains: ['m.media-amazon.com'],
    },
  };
};
