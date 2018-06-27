import Service from '@ember/service';
import store from '../store';

export default class ReduxService extends Service {
  constructor() {
    super(...arguments);

    this.setProperties({
      store
    });

    store.subscribe(() => {
      this.set('state', store.getState());
    });
  }
}
