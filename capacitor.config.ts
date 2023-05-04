import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'photo-gallery',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'http://127.0.0.1:8102',
  },
};

export default config;
