import Component from "@ember/component";
import Axios from "axios";
import { action } from '@ember-decorators/object';

export default class NewTrainingTypeForm extends Component {
  constructor() {
    super(...arguments);

    this.set('formValues', {
      name: ''
    });
  }

  @action
  async save() {
    let formValues = this.formValues;

    let request = await Axios.post('http://dog-tracker.test/training-types', formValues);

    debugger;
  }
}
