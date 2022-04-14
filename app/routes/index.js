import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  beforeModel(transition) {
    transition.to.find((routeInfo, index, array) => {
      console.log('routeInfo: ', routeInfo);
      console.log('index: ', index);
      console.log('array: ', array);
    });
  }

  async model() {
    return this.store.findAll('rental');
  }
}
