Meteor.subscribe('APIKey')

Template.apiKey.onCreated(function() {
    const template = this
    template.autorun(() => {
        let handle = template.subscribe( "APIKey" )
    })
})

Template.apiKey.helpers({
    semanticUi: () => Package && Package['heaven7:wsl-theme-semantic-ui'] ? true : false,
    apiKey: () => {
        var apiKey = APIKeys.findOne()
        return apiKey ? apiKey.key : false
    },
    headerText: () => i18n.t("change_api_key"),
    headerDescription: () => i18n.t("keep_api_key_save"),
    fields: () => {
        return [
            {
                label: i18n.t("api_key"),
                type: "text",
                class: "form-control",
                readonly: true,
                placeholder: "API Key",
                value: APIKeys.findOne().key
            },
            {
                type: "button",
                class: "regenerate-api-key",
                icon: "refresh"
            }
        ]
    }

})


Template.apiKey.events({
    'click .regenerate-api-key': () => {
        var userId = Meteor.userId(),
            confirmRegeneration = confirm( i18n.t("confirm_regeneration_of_api_key") );

        if (confirmRegeneration) {
            Meteor.call( "regenerateApiKey", userId, function( error, response ) {
                if (error) throw new Meteor.Error(error.reason)
                else console.log( "You have a new API key.")
            })
        }
    }
})