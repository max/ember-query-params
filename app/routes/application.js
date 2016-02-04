import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateMyQueryParam() {
      this.controllerFor('application').set('foo', 'bar');
    }
  }
});
