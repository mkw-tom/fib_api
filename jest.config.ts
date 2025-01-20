import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageProvider: "v8",
  forceExit: true,
};

export default config;
