
async function fetchData() {
  try{
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
  } catch (err) {
    console.log("error" , err);
  }
}

fetchData();