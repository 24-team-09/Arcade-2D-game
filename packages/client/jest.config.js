import dotenv from 'dotenv'
dotenv.config()

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/mocks/fileMock.js',
    '^@/store(.*)$': '<rootDir>/src/store$1',
    '^@/api/(.*)$': '<rootDir>/src/api/$1',
    '^@/assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/services/(.*)$': '<rootDir>/src/services/$1',
  },
}
