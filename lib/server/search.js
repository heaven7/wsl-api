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
    },
    endpoints: {
        // GET /search/items
        getAll: {
            action: function() {

                let query      = {},
                    search     = this.queryParams.q,
                    range      = this.queryParams.range,
                    measure    = this.queryParams.measure,
                    type       = this.queryParams.type,
                    projection = { limit: 10, sort: { title: 1 } };

                if ( search ) {
                    let regex = new RegExp( search, 'i' );

                    query = {
                        $or: [
                            { title: regex },
                            { description: regex }
                        ]
                    };

                    projection.limit = 100;
                }
                return Items.find(query, projection).fetch()
            }
        }
    }
})
