/**
 * Used to bootstrap new vue apps
 */

// Import external dependencies
import Vue from 'vue';

export default class VueApp {

  /**
   * Creates a new Vue app
   * @param  {String}         el
   * @param  {Vue Component}  component
   * @param  {Object}         data      (optinal)
   * @return {Void}
   */
  constructor(el, component, data) {
    if(jQuery(el).length > 0) {
      data = data || {};
      new Vue({
        el: el,
        data() {
          return data
        },
        render: h => h(component),
      });
    }
  }

}
