APIKeys.allow({
    insert: function(userId, doc) {
        return userId === doc.owner;
    },
    update: function(userId, doc, fields, modifier) {
        return userId === doc.owner;
    },
    remove: function(userId, doc) {
        return userId === doc.owner;
    }
});