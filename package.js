Package.describe({
  name: 'heaven7:wsl-api',
  version: '0.0.1',
  summary: 'API package',
  git: 'https://github.com/heaven7/wsl-api.git',
  documentation: 'README.md'
});

var both = ['client','server'],
    packages = [
        'accounts-base',
        'accounts-password',
        'check',
        'random',
        'http',
        'templating',
        'iron:router@1.0.12',
        'nimble:restivus@0.8.5',
        'ecmascript',
        'es5-shim',
        'heaven7:wsl-items@0.0.3',
        'heaven7:wsl-i18n@0.0.3_4',
        'heaven7:wsl-translations@0.0.4'
    ]

Package.onUse(function(api) {
    api.versionsFrom('1.2')
    api.use(packages)
    api.imply(packages)

    api.addFiles([
        'lib/both/apiKeys.js'
    ], both)

    api.addFiles([
        'lib/client/templates.html',
        'lib/client/templates.js'
    ], 'client')

    api.addFiles([
        'lib/server/allow.js',
        'lib/server/methods.js',
        'lib/server/publish.js',
        'lib/server/api.js',
        'lib/server/search.js',
        'lib/server/routes.js',
        'lib/server/api/items/routes.js'
        ], 'server')

    api.export('APIKeys', both);
});
