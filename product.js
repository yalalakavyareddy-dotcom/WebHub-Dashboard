/* ==========================================
   DEVFUSION PRODUCT STORE
   Developed by: Yalala Kavya Reddy
========================================== */

const search = document.getElementById("search");
const categoryFilter = document.getElementById("categoryFilter");
const sort = document.getElementById("sort");

const productContainer = document.getElementById("productContainer");

let products = [...document.querySelectorAll(".product-card")];

// =========================
// Display Products
// =========================

function displayProducts(items){

    productContainer.innerHTML = "";

    items.forEach(product => {

        productContainer.appendChild(product);

    });

}

// =========================
// Search + Filter + Sort
// =========================

function updateProducts(){

    let filtered = [...products];

    // Search

    const keyword = search.value.toLowerCase();

    filtered = filtered.filter(product =>

        product.querySelector("h3").textContent
        .toLowerCase()
        .includes(keyword)

    );

    // Category

    if(categoryFilter.value !== "all"){

        filtered = filtered.filter(product =>

            product.dataset.category === categoryFilter.value

        );

    }

    // Sorting

    switch(sort.value){

        case "low":

            filtered.sort((a,b)=>

            Number(a.dataset.price) -

            Number(b.dataset.price)

            );

            break;

        case "high":

            filtered.sort((a,b)=>

            Number(b.dataset.price) -

            Number(a.dataset.price)

            );

            break;

        case "rating":

            filtered.sort((a,b)=>

            Number(b.dataset.rating) -

            Number(a.dataset.rating)

            );

            break;

        case "name":

            filtered.sort((a,b)=>

            a.querySelector("h3").textContent.localeCompare(

            b.querySelector("h3").textContent)

            );

            break;

    }

    displayProducts(filtered);

}

// =========================
// Events
// =========================

search.addEventListener("keyup",updateProducts);

categoryFilter.addEventListener("change",updateProducts);

sort.addEventListener("change",updateProducts);

// =========================
// Product Button Animation
// =========================

document.addEventListener("click",function(e){

    if(e.target.tagName==="BUTTON"){

        if(e.target.textContent==="View Details"){

            alert("Product Details Coming Soon!");

        }

    }

});

// =========================
// Hover Effect
// =========================

products.forEach(product=>{

    product.addEventListener("mouseenter",()=>{

        product.style.transform="translateY(-12px) scale(1.02)";

    });

    product.addEventListener("mouseleave",()=>{

        product.style.transform="translateY(0) scale(1)";

    });

});

// =========================
// Fade-in Animation
// =========================

function reveal(){

    const cards = document.querySelectorAll(".product-card");

    const trigger = window.innerHeight * 0.85;

    cards.forEach(card=>{

        const top = card.getBoundingClientRect().top;

        if(top<trigger){

            card.style.opacity="1";

            card.style.transform="translateY(0px)";

        }

    });

}

products.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition=".6s";

});

window.addEventListener("scroll",reveal);

reveal();

// =========================
// Footer Year
// =========================

const copy = document.querySelector(".copyright");

if(copy){

    copy.innerHTML =
    `© ${new Date().getFullYear()} DevFusion Product Store | Designed by Yalala Kavya Reddy`;

}

// =========================
// Welcome Message
// =========================

console.log("🚀 DevFusion Product Store Loaded Successfully");