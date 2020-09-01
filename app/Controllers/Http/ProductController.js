"use strict";

const Product = use("App/Models/Product");

class ProductController {

  //return all products
  async index({ request, response }) {
    return await Product.all();
  }

  //create product
  async create({ request, response }) {
    const { name, price, category } = request.all();
    const product = await Product.create({
      name,
      price,
      category,
    });
    return product;
  }
}

module.exports = ProductController;
