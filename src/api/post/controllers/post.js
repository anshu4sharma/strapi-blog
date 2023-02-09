'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params
    const entity = await strapi.db.query('api::post.post').findOne({
      where: { slug },
    });
    const sanitizedEntity = await this.sanitizeOutput(entity)
    return this.transformResponse(sanitizedEntity)
  }
}));
