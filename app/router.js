import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('orgs', {});
    this.route('org', {path: 'org/:id'}, function() {
        this.route('repos', {});

        this.route('repo', {
            path: ':id_repo'
        }, function() {
            this.route('issues', {});
            this.route('contributors', {});
        });
    });
});

export default Router;
