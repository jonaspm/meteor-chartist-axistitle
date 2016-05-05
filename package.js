Package.describe({
  name: 'jonaspm:chartist-axistitle',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Chartist plugin AxisTitle for using with angular-chartist',
  // URL to the Git repository containing the source code for this package.
  git: ''
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  //documentation: 'README.md'
});

Npm.depends({
	'chartist-plugin-axistitle':'0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('chartist-axistitle.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('chartist-axistitle');
  api.addFiles('chartist-axistitle-tests.js');
});
