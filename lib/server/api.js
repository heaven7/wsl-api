// first version of the API
ApiV1 = new Restivus({
    apiPath: 'api',
    version: 'v1',
    useDefaultAuth: false,
    prettyJson: true
})

/*
API = {
    authentication: (apiKey) => {
        var getUser = APIKeys.findOne( { "key": apiKey }, { fields: { "owner": 1 } } )
        if (getUser) return getUser.owner
        else return false
    },
    connection: (request) => {
        var getRequestContents = API.utility.getRequestContents(request),
            apiKey             = getRequestContents.api_key,
            validUser          = API.authentication(apiKey)

        if (validUser) {
            delete getRequestContents.api_key
            return { owner: validUser, data: getRequestContents }
        } else {
            return { error: 401, message: "Invalid API key." }
        }
    },
    handleRequest: (context, resource, method) => {
        
        var connection = API.connection( context.request )
        if ( !connection.error ) {
            API.methods[ resource ][ method ]( context, connection )
        } else {
            API.utility.response( context, 401, connection )
        }
        
    },
    methods: {},
    resources: {},
    utility: {
        getRequestContents: (request) => {
            switch( request.method ) {
                case "GET":
                    return request.query
                case "POST":
                case "PUT":
                case "DELETE":
                    return request.body
            }
        },
        hasData: (data) => {
            return Object.keys( data ).length > 0
        },
        response: (context, statusCode, data) => {
            context.response.setHeader( 'Content-Type', 'application/json' )
            context.response.statusCode = statusCode
            context.response.end( JSON.stringify( data ) )
        },
        validate: (data, pattern) => {
            return Match.test( data, pattern )
        }
    }
};
*/