module.exports = (config) => {
  config.set({
    basePath: '',
    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'js/**/*.js',
      'spec/**/*.spec.js'
    ],
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    reporters: ['spec'],
    plugins: [
      'karma-chrome-launcher',
      'karma-spec-reporter',
      'karma-jasmine'
    ],
    singleRun: true
  });
};
