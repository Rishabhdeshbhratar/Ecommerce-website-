const cartIcon= document.querySelector("#cart-icon");
const cart= document.querySelector(".cart");
const cartClose= document.querySelector("#cart-close");
cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));

const addCartButtons =document.querySelectorAll(".add-cart")
addCartButtons.forEach(button=>{
    button.addEventListener("click",event=>{
        const productBox= event.target.closest(".product-box");
        addToCart(productBox);
    });
});
const cartContent = document.querySelector(".cart-content");
const addToCart=productBox=>{
    const productImgSrc=productBox.querySelector("img").src;
    const productTitle=productBox.querySelector(".product-title").textContent;
    const productPrice=productBox.querySelector(".price").textContent;
    const CartBox=document.createElement("div");
    CartBox.classList.add("cart-box");
    CartBox.innerHTML=`
      <img src="${productImgSrc}" class="cart-img">
            <div class="cart-detail">
                <h2 class="cart-product-title">${productTitle}</h2>
                <span class="cart-price">${productPrice}</span>
                <div class="cart-quantity">
                <button id="decrement">-</button>
                <span class="number">1</span>
                <button id="increment">+</button>
            </div>
        </div>
        <i class='bx bx-trash cart-remove'></i>    `;

cartContent.appendChild(CartBox);
CartBox.querySelector(".cart-remove").addEventListener("click",()=> {
    CartBox.remove(); 
    updateCartCount(-1);
    updateTotalPrice();
});
CartBox.querySelector(".cart-quantity").addEventListener("click",event =>{
    const numberElement=CartBox.querySelector(".number");
    const decrementButton=CartBox.querySelector("#decrement");
    let quantity =numberElement.textContent;
    if(event.target.id==="decrement"&& qusntity >1){
        quentity--;
        if(quantity===1){
            decrementButton.style.color="#999";
        }
    }else if (event.target.id==="increment"){
        quantity++;
        decrementButton.style.color="#333";
    }
    numberElement.textContent=quantity;
    updateTotalPrice();

});
 
updateTotalPrice();
updateCartCount(1);
};
const updateTotalPrice =()=>{
    const totalPriceElement=document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelectorAll(".cart-box");
    let total=0;
    cartBoxes.forEach(CartBox=>{
        const priceElement=CartBox.querySelector(".cart-price");
        const quantityElement=CartBox.querySelector(".number");
        const price=priceElement.textContent.replace("$","");
        const quantity=quantityElement.textContent;
        total +=price*quantity;
    });
    totalPriceElement.textContent=`$${total}`;
};
let cartItemCount=0;
const updateCartCount=change=>{
    const cartItemCountBadge=document.querySelector(".cart-item-count");
    cartItemCount+=change;
    if(cartItemCount>0){
    cartItemCountBadge.style.visibility="visible";
    cartItemCountBadge.textContent=cartItemCount;
}else{
    cartItemCountBadge.style.visibility="hidden";
    cartItemCountBadge.textContent="";
}
};
const buyNowBotton=document.querySelector(".btn-buy");
buyNowBotton.addEventListener("click",()=>{
    const cartBoxes=cartContent.querySelectorAll(".cart-box");
    if(cartBoxes.length===0){
        alert("your cart is empty. Please add item to your cart before buying.");
        return;
    }
    cartBoxes.forEach(CartBox=> CartBox.remove());
    cartItemCount=0;
    updateCartCount(0);
    updateTotalPrice();
    alert("thank for your purchase!");
});