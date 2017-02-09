import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://10.20.30.100:3000'
});
