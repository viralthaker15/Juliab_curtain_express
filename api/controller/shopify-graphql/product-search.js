import fetch from 'node-fetch';
exports.searchProduct = (req, res) => {
  let term = req.query.q;
  fetch("https://juliab-staging.myshopify.com/admin/api/graphql.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": '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'
    },
    body: JSON.stringify({
      query: `{
          products( query: "${term}", first: 25) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              cursor
              node {
                id
                title
                handle
              }
            }
          }
        }`
    })
  })
    .then(result => {
      return result.json();
    })
    .then(data => {
      return res.json(data);
    });
}
