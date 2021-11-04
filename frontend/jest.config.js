// https://stackoverflow.com/questions/56547215/react-testing-library-why-is-tobeinthedocument-not-a-function (1)

module.exports = {
  setupFilesAfterEnv: [
    './src/tests/setuptests.js', // (1)
  ],
};
