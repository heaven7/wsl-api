Package.describe({
  name: 'heaven7:wsl-api',
  version: '0.0.1',
  summary: 'API package',
  git: 'https://github.com/heaven7/wsl-api.git',
  documentation: 'README.md'
});

var both = ['client','server'],
    packages = [
        'check',
        'random',
        'http',
        'templating',
        'iron:router@1.0.12',
        'nimble:restivus@0.8.5',
        'ecmascript',
        'es5-shim',
        'heaven7:wsl-items@0.0.3'
    ]

Package.onUse(function(api) {
    api.versionsFrom('1.2')
    api.use(packages)
    api.imply(packages)

    api.addFiles('lib/both/api-keys.js', both)

    api.addFiles([
        'lib/client/templates.html',
        'lib/client/templates.js'
    ], 'client')

    api.addFiles([
        'lib/server/methods.js',
        'lib/server/publish.js',
        'lib/server/api.js',
        'lib/server/api/items/routes.js'
        ], 'server')
});
