const data = [
    {
        id: 1,
        name: "watch 1",
        img: "img3/pexels-fernando-arcos-190819.jpg",
        price: 84,
        cat: "Sports",
    },
    {
        id: 2,
        name: "watch 2",
        img: "img3/pexels-jatin-anand-125779.jpg",
        price: 64,
        cat: "Casual",
    },
    {
        id: 3,
        name: "watch 3",
        img: "img3/pexels-joey-nguyễn-2113994.jpg",
        price: 54,
        cat: "Dress",
    },
    {
        id: 4,
        name: "watch 4",
        img: "img3/pexels-philip-lindvall-1120275.jpg",
        price: 44,
        cat: "Sports",
    },
    {
        id: 5,
        name: "watch 5",
        img: "img3/pexels-pixabay-162426.jpg",
        price: 74,
        cat: "Luxury",
    }
]

const productsContainer = document.querySelector(".products")
const searchInput = document.querySelector(".search")
const categoriesContainer = document.querySelector(".cats")
const priceRange = document.querySelector(".priceRange")
const priceValue = document.querySelector(".priceValue")

const displayproducts = (filteredProducts) =>{
    productsContainer.innerHTML = filteredProducts.map(
        (product) =>
        `
        <div class="product">
                <img 
                src=${product.img}
                alt="">
                <span class="name">${product.name}</span>
                <span class="price">$${product.price}</span>
            </div>
        `
    ).join("")
};

displayproducts(data)

searchInput.addEventListener("keyup", (e)=>{
    const value = e.target.value.toLowerCase();


if(value) {
    displayproducts(
        data.filter((item) => item.name.toLowerCase().indexOf(value)!== -1)
    )
} else {
    displayproducts(data);
}
})

const setcategories = () => {
    const allcats = data.map((item) => item.cat);
    const categories = [
        "All",
        ...allcats.filter((item, i) =>{
            return allcats.indexOf(item) === i;
        })
    ]

    categoriesContainer.innerHTML = categories.map(cat =>
        `
        <span class="cat">${cat}</span>
        `).join("")

        categoriesContainer.addEventListener("click", (e)=>{
            const selectedCat = e.target.textContent;

            selectedCat === "All"
            ? displayproducts(data)
            : displayproducts(data.filter((item)=> item.cat === selectedCat))
        })
}

const setPrices = ()=>{
const priceList = data.map((item)=> item.price);
const minPrice = Math.min(...priceList)
const maxPrice = Math.max(...priceList)

priceRange.min = minPrice;
priceRange.max = maxPrice;
priceRange.value = maxPrice; 
priceValue.textContent = "$" + maxPrice;

priceRange.addEventListener("input", (e)=>{
    priceValue.textContent = "$" + e.target.value
    displayproducts(data.filter((item) => item.price <= e.target.value))
})

}

setcategories();
setPrices();















