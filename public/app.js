const minus_btn= document.querySelector(".minus-btn");
const plus_btn= document.querySelector(".plus-btn");
const quantity= document.getElementById('quantity');

minus_btn.setAttribute("disabled","disabled");

var valueCount
plus_btn.addEventListener("click",function(){
    valueCount= quantity.value;
    valueCount++;
    quantity.value=valueCount;
    if(valueCount>0){
        minus_btn.removeAttribute("disabled");
        minus_btn.classList.remove('disabled');
    }
})

minus_btn.addEventListener("click",function(){
    valueCount= quantity.value;
    valueCount--;
    quantity.value=valueCount;
    if(valueCount==0){
        minus_btn.setAttribute("disabled","disabled");
    }
})


const cart=document.getElementById('cart');
const cart_box=document.getElementById('cart-box');

var a=0;
cart.addEventListener("click",function(){
    if(a==0){
        cart_box.style.display="flex";
        return a=1;
    }
    else {
        cart_box.style.display="none";
        return a=0;
    }
})

//cart box item number//
const add_cart= document.getElementById("add_cart");
const item_number= document.querySelector(".item_number");

add_cart.addEventListener("click",()=>{
    cartNumber();
    totalCost();
    displayCost();
    cartDisp();
})

function onLoadCardNum(){
    let productNumbers= localStorage.getItem("cartNumber");
    if(productNumbers==0){
       item_number.style.display="none";
       document.querySelector(".empty_text").style.display="flex";
       document.querySelector(".item_details").style.display="none";
       document.querySelector(".checkout").style.display="none";
    }
    else if(productNumbers>0){
        item_number.textContent= productNumbers;
        item_number.style.display="block";
    }
    else{
        item_number.style.display="none";
        
    }
}

function cartNumber(){
    let productNumbers= localStorage.getItem("cartNumber");
    
    if(productNumbers){
        localStorage.setItem('cartNumber',quantity.value);
        item_number.textContent= quantity.value;
        item_number.style.display="block";
    }
    
    else{
        localStorage.setItem('cartNumber',quantity.value);
        item_number.textContent= quantity.value;
        item_number.style.display="block";
    }
}
function totalCost(){
    let productNumbers= localStorage.getItem("cartNumber");
    numbers=parseInt(productNumbers);
    if(productNumbers){       
        localStorage.setItem("totalCost",numbers*125);
    }
    else{
        console.log("add item first");
    }
}
function displayCost(){
   const total_price= document.getElementById("total_price");
   const product_num= document.getElementById("product_num");

   total_price.textContent= `$ ${localStorage.getItem("totalCost")}.00`;
   
   product_num.textContent= localStorage.getItem("cartNumber");
}
function cartDisp(){
    let productNumbers= localStorage.getItem("cartNumber");

    if(productNumbers){
        document.querySelector(".empty_text").style.display="none";
        document.querySelector(".item_details").style.display="flex";
        document.querySelector(".checkout").style.display="block";
    }
    else{
        document.querySelector(".empty_text").style.display="flex";
        document.querySelector(".item_details").style.display="none";
        document.querySelector(".checkout").style.display="none";
    }
}
function removeCart(){
    localStorage.removeItem("cartNumber");
    localStorage.removeItem("totalCost");
    document.querySelector(".empty_text").style.display="flex";
        document.querySelector(".item_details").style.display="none";
        document.querySelector(".checkout").style.display="none";
        item_number.style.display="none";
}

const slider_img=document.querySelector(".slider_img");
var images=["image-product-1.jpg","image-product-2.jpg","image-product-3.jpg","image-product-4.jpg"];

function prev(){
    if(i <= 0)  i=images.length;
        i--;
        return setImg();
    
}
function next(){
    if(i >= images.length -1)  i = -1;
        i++;
        return setImg();
    
}
function setImg() {
   return slider_img.setAttribute('src','/images/' + images[i]);

}

function openModal(){
    document.querySelector(".modal").style.display="flex";
}
function closeModal(){
    document.querySelector(".modal").style.display="none";
}

cartDisp();
displayCost();

onLoadCardNum();