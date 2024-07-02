import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run ecopedal:serve',
        production: 'nx run ecopedal:preview',
      },
      ciWebServerCommand: 'nx run ecopedal:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
