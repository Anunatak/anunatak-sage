/** import external dependencies */
import 'jquery';
import 'foundation-sites';

/** import local dependencies */
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';
// import vueRoute from './routes/vueRoute';

/**
 * Populate Router instance with DOM routes
 * @type {Router} routes - An instance of our router
 */
const routes = new Router({
  /** All pages */
  common,
  /** Home page */
  home,
  /** About Us page, note the change from about-us to aboutUs. */
  aboutUs,
  /** A route that contains a vue app */
  // vueRoute,
});

/** Load Events */
jQuery(document).ready(() => {
  jQuery(document).foundation()
  routes.loadEvents()
});
