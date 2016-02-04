import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['foo'],

  actions: {
    updateMyQueryParam() {
      this.set('foo', 'hello');
    }
  }
});
