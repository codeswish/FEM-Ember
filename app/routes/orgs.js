import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: 'facebook'},
      {id: 'google'},
      {id: 'jquery'},
      {id: 'emberjs'}
    ];
  }
});
