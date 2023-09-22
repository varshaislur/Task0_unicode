function convertProducts(products) {
  return products.map((productString) => {
    let [productname, price] = productString.split(' ');
    return {
      productname: productname,
      price: parseFloat(price),
    };
  }
  );
}
function sortProductsByPriceAscending(items) {
  return items.sort((a, b) => a.price - b.price);
}

function displayProducts(sortedProducts) {
  console.log('Sorted Products by Price (Ascending):');
  sortedProducts.forEach((product, index) => {
    console.log(`${index + 1} ${product.productname} = $${product.price}`);
  });
}

 inputProducts = [
  'Television 899.99',
  'Iphone 599.99',
  'Speakers 599.99',
  'Headphones 149.99',
];

let convertedProducts = convertProducts(inputProducts);
let sortedProducts = sortProductsByPriceAscending(convertedProducts);
displayProducts(sortedProducts);
