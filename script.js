var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDesc");
var mainBtn = document.getElementById("mainBtn");

var productsContainer ;

if (localStorage.getItem("productsList") == null) 
{
    productsContainer = [] ;
} 
else 
{
productsContainer = JSON.parse(localStorage.getItem("productsList"));
displayProducts() ;
}

function addProduct() {
    if (checkInputs() == true) 
    {
        var product = {
            name: productNameInput.value,
            price: productPriceInput.value,
            category: productCategoryInput.value,
            desc: productDescInput.value
        }
        productsContainer.push(product);
        localStorage.setItem("productsList" ,JSON.stringify(productsContainer));      
        displayProducts();
        clearForm();
    } 
    else 
    {
       window.alert('Sorry All Fields are Required') 
    }
}

function clearForm() {


    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";
}
function displayProducts()
{
 var cartoona = `` ;

for(i=0; i<productsContainer.length; i++)
{
    cartoona+= `<tr>
        <td>${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td><button onclick="changeFormForUpdate(`+i+`)" class="btn btn-outline-warning">update</button></td>
        <td><button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">delete</button></td>
        </tr>`;

}

    document.getElementById("tableBody").innerHTML=cartoona;
}

function checkInputs()
{
if (productNameInput.value != "" && productPriceInput.value != "" &&productCategoryInput.value != "" && productDescInput.value != "") 
{
   return true ;
} 
else 
{
     return false ;
}

}

function deleteProduct(productIndex)
{
productsContainer.splice(productIndex , 1);
localStorage.setItem("productsList" ,JSON.stringify(productsContainer));
displayProducts();
}

function searchProduct(searchTerm)
{
   var cartoona = `` ;
   
   for (var i = 0 ; i< productsContainer.length; i++)
   {
   if (productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true )
   {
    cartoona+= `<tr>
        <td>${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td><button class="btn btn-outline-warning">update</button></td>
        <td><button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">delete</button></td>
        </tr>`;

   }
   else 
   {
    console.log("msh mowgod");
   }
   }
   document.getElementById("tableBody").innerHTML=cartoona ;
}
function changeFormForUpdate(productIndex)
{
 productNameInput.value = productsContainer[productIndex].name;
 productPriceInput.value = productsContainer[productIndex].price;
 productCategoryInput.value = productsContainer[productIndex].category;
 productDescInput.value = productsContainer[productIndex].desc;

 mainBtn.innerHTML= "update" ;

}







