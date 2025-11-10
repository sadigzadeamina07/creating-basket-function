let container = document.getElementById('container')
let basket = []
let quantity = 0
let cart = document.getElementById('cart')
function datanimaple(oturulendeyer) {
    container.innerHTML = '';
    oturulendeyer.map((items) => {
        container.innerHTML += `
        <div class="bg-white p-4">
            <img class="object-contain bg-center p-4 w-full h-[50vh]" 
                 src="${items.image}"  
                 alt="${items.title}" />
            <div class="p-2 mb-2">
                <h3 class=" uppercase text-gray-500">${items.category}</h3>
                <p class=" mt-8 font-bold">${items.title}</p>
                <span class="mt-3 text-gray-500 line-clamp-2">${items.description}</span>
               <div class="flex justify-between  flex-wrap  mt-6">
               <h2 class="font-bold text-3xl ">$ ${items.price}</h2>
<button onclick="addbasket(${items.id})" class="bg-blue-700 flex gap-3 items-center text-white px-4  py-2 rounded"> <i class="fa-regular fa-cart-shopping"></i>Əlavə et</button>
               </div>
                    </div>
        </div>`
    })
}


function filtirmleme(yenifiltr) {

    let filterlenmis = yenifiltr ? data.filter(f => f.category === yenifiltr) : data;
    datanimaple(filterlenmis)
}
function addbasket(id) {
    let product = data.find(item => item.id === id);
    if (product) {
        let inBasket = basket.find(i => i.id === id)
if (inBasket) {
  inBasket.quantity++
} else {
  basket.push({ ...product, quantity: 1 })
}

    }
    Cartcount()
   if (cart.style.right === '0px'|| cart.style.right === '0' ) {
    sebetgoster();
  }
}

function Cartcount() {
    let cartcount = document.getElementById('cartcount')
    cartcount.innerHTML = basket.length
}

function sebetgoster() {
    let totalprice = basket.reduce((sum, item) => sum + item.price * item.quantity, 0)
    cart.innerHTML = `
            <div class="h-full flex flex-col justify-between">
            <div>
                            <i onclick="bagla()" class="fa-solid fa-xmark text-2xl cursor-pointer p-2 block text-right"></i>
            </div>

                <div class="p-4 flex  flex-col gap-4">
                    ${basket.length > 0
            ? basket.map(item => `
                            <div class="flex items-center mb-3 border-b pb-2">
                                <img src="${item.image}" alt="${item.title}" class="w-[140px] h-[200px] object-contain">
                                <div class="px-2 flex flex-col gap-4">
                                 <p class="text-sm font-semibold ">${item.title}</p>
                                    <p class="text-gray-500">$${(item.price * item.quantity).toFixed(2)}</p>
                                    <div class="flex items-center gap-2">
    <button onclick="show(${item.id}, -1)" class="border px-2 rounded">-</button>
    <span>${item.quantity}</span>
    <button onclick="show(${item.id}, +1)" class="border px-2 rounded">+</button>
    <button onclick="sil(${item.id})" class="text-red-500 ml-2">
                                     <i onclick="sil()" class="fa-solid fa-trash flex justify-center items-center text-red-400 "></i>
    </button> </div>
        </div>
        </div>
                        `).join('')
            : '<p class="text-gray-500 text-center mt-10 text-2xl">Səbət boşdur</p>'}
                </div>
                <div class="flex flex-col justify-end " >
                     <div class="flex justify-between items-center mx-9">
                    <p class="text-xl">Total</p>
                    <h2 class="font-bold text-xl flex items-start">$ ${totalprice.toFixed(2)}</h2>
                </div>
                <button class="bg-blue-700 w-[80%] my-5 mx-auto flex gap-3 items-center justify-center text-white px-4 py-2 rounded">
                    Complete your order
                </button>
                </div>
           
            </div>
        `;
    cart.style.right = '0';

}

function bagla() {
    cart.style.right = '-100%';
}
function show(id, quant) {
    let product = basket.find(item => item.id === id);
    if (product) {
        product.quantity += quant;
        if (product.quantity < 1) {
            basket = basket.filter(item => item.id !== id);
        }

    }
    sebetgoster()
    Cartcount()
}
function sil(id) {
    basket = basket.filter(item => item.id != id)
    sebetgoster()
    Cartcount()
}
datanimaple(data)