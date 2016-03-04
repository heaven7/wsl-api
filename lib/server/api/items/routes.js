ApiV1.addCollection(Items, {
    path: 'items',
    routeOptions: {
        authRequired: true
    },
    endpoints: {
        // GET api/v1/items
        getAll: {
            authRequired: false
        },
        // POST api/v1/items
        post: function () {

        },
        // GET api/v1/items/:id
        get: {
            authRequired: false
        },
        // PUT api/v1/items/:id
        put: function () {

        },
        // PATCH api/v1/items/:id
        patch: function () {

        },
        // DELETE api/v1/items/:id
        delete: function () {

        }
    }
});