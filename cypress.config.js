const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",  // Asegúrate de que el patrón incluya tus archivos .feature
    baseUrl: 'https://demo.guru99.com/test/newtours/',         // Cambia esto según tu URL
    supportFile: 'cypress/support/e2e.js',
  },
});
