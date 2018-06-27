import Component from "@ember/component";
import { service } from '@ember-decorators/service';
import { action } from '@ember-decorators/object';
import { findAll, create } from 'dog-tracker-ui/actions/training-type';

export default class TrainingTypeRoute extends Component {
  @service redux

  constructor() {
    super(...arguments);

    this.redux.store.dispatch(findAll());
  }

  @action
  saveNew(attrs) {
    this.redux.store.dispatch(create(attrs));
  }
}
