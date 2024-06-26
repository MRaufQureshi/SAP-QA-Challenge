import { defineConfig } from 'cypress'
import * as dotenv from "dotenv";
/*
 * Populate process.env with values from .env file
 */
dotenv.config();

export default defineConfig({
  chromeWebSecurity: false,
  requestTimeout: 4000,
  defaultCommandTimeout: 4000,
  projectId: 'd6oaxc',
  viewportWidth: 1280,
  viewportHeight: 800,
  numTestsKeptInMemory: 10,

  e2e: {
    setupNodeEvents(on, config) {
      on('task',{
        log(message){
          console.log(message)
          return null
        }
      })
      return require('./cypress/plugins/index.js')(on, config)
    },

    baseUrl: process.env.E2E_BASE_URL,
    experimentalRunAllSpecs: true,
    experimentalOriginDependencies: true,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },

  env: {
    test_user: process.env.TEST_USER,
    test_password: process.env.TEST_PASSWORD,
    e2e_base_url: process.env.E2E_BASE_URL,
  }
})
