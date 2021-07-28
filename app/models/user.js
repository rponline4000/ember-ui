import Model, { attr } from '@ember-data/model';
export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') image;
  @attr('boolean', { defaultValue: false }) archive;

  archiveClick(event) {
    console.log(this.model.id)   
    this.store.findRecord('user', this.model.id).then(function (user) {     
      user.set('archive', !user.archive);
      user.save();
    });
  }
}
