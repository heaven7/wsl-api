Template.apiKey.onCreated(() => {
    this.subscribe( "APIKey" )

})
Template.apiKey.helpers({
    apiKey: () => {
        var apiKey = APIKeys.findOne()
        if (apiKey)
            return apiKey.key
    }
})

Template.apiKey.events({
    'click .regenerate-api-key': () => {
        var userId = Meteor.userId(),
            confirmRegeneration = confirm( "Are you sure? This will invalidate your current key!" );

        if (confirmRegeneration) {
            Meteor.call( "regenerateApiKey", userId, function( error, response ) {
                if (error) throw new Meteor.Error(error.reason)
                else console.log( "You have a new API key.")
            })
        }
    }
})