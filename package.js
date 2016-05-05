Package.describe({
	name: 'jonaspm:chartist-axistitle',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: 'Chartist plugin AxisTitle for using with mfpierre:chartist-js',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/jonaspm/meteor-chartist-axistitle.git',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Npm.depends({
	'chartist-plugin-axistitle':'0.0.1'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.use('mfpierre:chartist-js@1.6.2','client')
	api.addFiles('chartist-axistitle.js', 'client');
});

Package.onTest(function(api) {
	api.use('ecmascript');
	api.use('tinytest');
	api.use('jonaspm:chartist-axistitle');
	api.addFiles('chartist-axistitle-tests.js');
});
