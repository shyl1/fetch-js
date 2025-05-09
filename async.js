
async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    
  } catch (err) {
    console.log("error" , err)
  }
}

fetchProducts();