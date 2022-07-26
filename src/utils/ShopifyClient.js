const queryGetProduct = `
  query getProduct ($handle: String!) {
    product (handle: $handle) {
      id
      title
      variants (first: 10) {
        nodes {
          id
          priceV2 {
            amount
            currencyCode
          }
          sku
          title
          sellingPlanAllocations (first: 10) {
            nodes {
              sellingPlan {
                description
                id
                name
                options {
                  name
                  value
                }
                priceAdjustments {
                  adjustmentValue {
                    ... on SellingPlanFixedAmountPriceAdjustment {
                      adjustmentAmount {
                        amount
                        currencyCode
                      }
                    }
                    ... on SellingPlanPercentagePriceAdjustment {
                      adjustmentPercentage
                    }
                    ... on SellingPlanFixedPriceAdjustment {
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                  orderCount
                }
                recurringDeliveries
              }
            }
          }
        }
      }
    }
  }
`;

async function fetchShopify(domain, accessToken, query, variables) {
  const request = await fetch(
    `https://${domain}.myshopify.com/api/2022-04/graphql.json`,
    {
      mode: 'cors',
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    }
  );

  const response = await request.json();

  return response;
} 

export async function getShopifyProduct(domain, accessToken, productHandle) {
  const queryVariables = { handle: productHandle }
  return await fetchShopify(domain, accessToken, queryGetProduct, queryVariables)
}