/*
API.methods = API.methods || {}
API.methods.items = {
    GET: (context, connection) => {
        var hasQuery = API.utility.hasData( connection.data )

        if ( hasQuery ) {
            connection.data.owner = connection.owner
            var getItems = Items.find( connection.data ).fetch()

            if ( getItems.length > 0 ) {
                API.utility.response( context, 200, getItems )
            } else {
                API.utility.response( context, 404, { error: 404, message: "No items found." } )
            }
        } else {
            var getItems = Items.find( { "owner": connection.owner } ).fetch()
            API.utility.response( context, 200, getItems )
        }
    },
    POST: (context, connection) => {
        var hasData   = API.utility.hasData( connection.data ),
            validData = API.utility.validate( connection.data, { "title": String, "need": Boolean})

        if ( hasData && validData ) {
            connection.data.owner = connection.owner;
            var item = Items.insert( connection.data );
            API.utility.response( context, 200, { "_id": pizza, "message": "Item successfully created!" } );
        } else {
            API.utility.response( context, 403, { error: 403, message: "POST calls must have a title in the request body in the correct formats." } );
        }
    },
    PUT: (context, connection) => {},
    DELETE: (context, connection) => {}
}
*/