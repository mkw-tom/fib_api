import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageProvider: "v8",
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  forceExit: true,
};

export default config;
