import Component from '@ember/component';
import Axios from 'axios';


export default class DogList extends Component {
  constructor() {
    super(...arguments);

    this.loadData();
  }

  async loadData() {
    let { data: breeds } = await Axios.get('http://dog-tracker.test/breeds');

    this.setProperties({
      breeds
    });
  }
}
