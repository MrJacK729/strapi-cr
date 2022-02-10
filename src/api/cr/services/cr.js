'use strict';

/**
 * cr service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cr.cr');
