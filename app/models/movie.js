import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  overview: DS.attr('string'), 
  release_date: DS.attr('string'),
  inventory: DS.attr('string'),
  poster_filename: DS.attr('string')
});




