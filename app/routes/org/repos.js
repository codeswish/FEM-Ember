import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
        {repo_id: 'react'},
        {repo_id: 'react-native'},
        {repo_id: 'watchman'}
    ]
  }
});
