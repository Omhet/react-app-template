module.exports = {
    preset: 'ts-jest',
    moduleNameMapper: {
        '\\.scss$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
