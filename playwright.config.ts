import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './',
  testMatch: '**/*.ts',
  timeout: 30000,
  use: {
    headless: true,
  },
});
