module.exports = {
  coverage: true,
  threshold: 80,
  reporter: ['console', 'junit', 'html'],
  output: ['stdout', 'test-report/test.xml', 'coverage/coverage.html'],
  timeout: 20000,
  leaks: false,
  "coverage-exclude": ['config', 'controllers'],
  environment: 'test'
};
  
// module.exports = {
//   coverage: true,
//   threshold: 80,
//   reporter: ['console', 'junit', 'html'],
//   output: ['stdout', 'test-report/test.xml', 'coverage/coverage.html'],
//   timeout: 20000,
//   leaks: false,
//   "coverage-exclude": ['config', 'controllers'],
//   environment: 'test'
// };
//   