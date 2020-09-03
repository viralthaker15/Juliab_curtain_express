const Shopify = require('shopify-api-node');
class ShopifyAPI {
  constructor() {
    this.shopify = new Shopify({
      shopName: 'juliab-staging.myshopify.com',
      apiKey: '7d32cec68b1312751a691090752d98ee',
      password: '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'
    });
  }
  createMeta() {
    let shopify = this.shopify;
  return  shopify.metafield
  .create({
    key: 'Nirav',
    value: "Hello world",
    value_type: 'string',
    namespace: 'inventory',
    owner_resource: 'shop'
  })
  .then(
    (metafield) => metafield,
    (err) => err
  );

  }
  createProduct() {
    let shopify = this.shopify;
    return shopify.product
      .create({
        "title": `custom_${Math.random()}`,
        "body_html": "<strong>Good snowboard!</strong>",
        "product_type": "Curtain dummy",
        "template_suffix": "none",
        "variants": [
          {
            "price": "35.00"
          }
        ],
        "tags": [
          "curtain-custom"
        ]
      })
      .then((orders) => orders)
      .catch((err, test) => {
        console.log(err);
        return error;
      }
      );
  }
}

exports.createProduct = async (req, res) => {
  let shopify = new ShopifyAPI();
  let createProduct = await shopify.createProduct();
  res.json(createProduct);
}
exports.createMetaFields = async (req, res) => {
  let shopify = new ShopifyAPI();
  let createMetafield = await shopify.createMeta();
  res.json(createMetafield);
}