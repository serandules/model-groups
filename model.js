var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongins = require('mongins');
var validators = require('validators');

var types = validators.types;

var group = Schema({
    name: {
        type: String,
        required: true,
        validator: types.string({
            length: 20
        })
    },
    description: {
        type: String,
        validator: types.string({
            length: 1000
        })
    }
}, {collection: 'groups'});

group.plugin(mongins());
group.plugin(mongins.user);
group.plugin(mongins.createdAt());
group.plugin(mongins.updatedAt());

/*
group.methods.can = function (perm, action) {
    return permission.has(this.has, perm.split(':'), action);
};

group.methods.permit = function (perm, actions, done) {
    actions = actions instanceof Array ? actions : [actions];
    permission.add(this.has, perm.split(':'), actions);
    this.save(done);
};*/

module.exports = mongoose.model('groups', group);
