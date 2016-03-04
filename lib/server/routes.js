ApiV1.addRoute('login', {
    get: function () {
        let key = this.queryParams && this.queryParams['key']
        if(key) {
            let apikey = APIKeys.findOne({key})
            if(apikey) {
                let userId = apikey.owner
                //creating the token and adding to the user
                var stampedToken = Accounts._generateStampedLoginToken()
                //hashing is something added with Meteor 0.7.x,
                //you don't need to do hashing in previous versions
                var hashStampedToken = Accounts._hashStampedToken(stampedToken)

                Meteor.users.update(userId,
                    {$push: {'services.resume.loginTokens': hashStampedToken}}
                )
                return {
                    status: 'success',
                    data: {
                        userId,
                        authToken: stampedToken.token
                    }
                }
            } else {
                return {
                    statusCode: 401,
                    headers : {
                        'Content-Type': 'text/plain'
                    },
                    body: 'Authorization failed. Wrong auth key given'
                }
            }
        } else {
            return {
                statusCode: 401,
                headers : {
                    'Content-Type': 'text/plain'
                },
                body: 'Authorization failed. No auth key given'
            }
        }
    }
})