'use strict';

/**
 * manager-email service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::manager-email.manager-email');
