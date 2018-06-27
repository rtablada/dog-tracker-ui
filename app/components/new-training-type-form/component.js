import Component from "@ember/component";
import { action } from '@ember-decorators/object';

export default class NewTrainingTypeForm extends Component {
  constructor() {
    super(...arguments);

    this.set('formValues', {
      name: ''
    });
  }

  @action
  async save(ev) {
    ev.preventDefault();

    let formValues = this.formValues;

    this.onsubmit(formValues);
  }
}
