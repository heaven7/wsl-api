// internal search API
SearchAPI = new Restivus({
    apiPath: 'search',
    useDefaultAuth: false,
    prettyJson: true,
    enableCors: false

})

SearchAPI.addCollection(Items, {
    excludedEndpoints: ['delete', 'put', 'post', 'patch'],
    routeOptions: {
        authRequired: false
    }
})