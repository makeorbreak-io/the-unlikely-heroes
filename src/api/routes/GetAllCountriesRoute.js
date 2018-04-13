'use strict';

/**
 * REST API routes to GET countries. You can retrieve all or find one by id (which is the name)
 * @param {} app 
 */
module.exports = function(app) {
  var countryList = require('../controller/GetAllCountries');

  // Routes to Get countries. You can find all or find one by id.

  app.route('/countries')
    .get(countryList.list_all_countries);

  app.route('/countries/{country_id}')
    .get(countryList.list_country_by_id);

}