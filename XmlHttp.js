
// method one xmlhttp 
const xml = new XMLHttpRequest();

xml.open('GET' , "https://fakestoreapi.com/products");

xml.onload= function() {
    if(xml.status === 200) {
        const data = JSON.parse(xml.responseText);
        console.log(data);
    } else {
        console.log("error" + xml.statusText);
    }
} ;

xml.onerror = function() {
    console.log("Request Failed");
}

xml.send();