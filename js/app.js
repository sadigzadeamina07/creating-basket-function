let container = document.getElementById('container')

let basket = []
let quantity = 0
let cart = document.getElementById('cart')
let cart2 = document.getElementById('cart2')
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
    if (cart.style.right === '0px' || cart.style.right === '0') {
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
                                    </button>
                                    </div>
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
function dahaetrafli(){
cart2.innerHTML+=`
<div class="p-4 mx-auto lg:max-w-screen-xl">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
        <div class="flex flex-col border border-gray-300 shadow-sm rounded-md p-1.5 transition-all relative overflow-hidden">
          <a href="javascript:void(0)" class="block">
            <div class="w-full bg-slate-50">
              <img src="https://readymadeui.com/images/sunscreen-img-1.webp" alt="Product-1" class="w-full aspect-square object-cover object-top" />
            </div>
            <div class="py-4 px-2 text-left">
              <h6 class="text-sm sm:text-[15px] font-semibold text-slate-900 line-clamp-2">Skin Glow Combo</h6>
              <div class="flex items-center gap-1 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" width="14" height="14" viewBox="0 0 511.987 511">
                  <path fill="#ffc107" d="M510.652 195.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77c-4.31-10.023-14.122-16.509-25.024-16.509s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418a27.208 27.208 0 0 0-23.402 18.71c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927zm0 0" data-original="#ffc107">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" width="14" height="14" viewBox="0 0 511.987 511">
                  <path fill="#ffc107" d="M510.652 195.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77c-4.31-10.023-14.122-16.509-25.024-16.509s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418a27.208 27.208 0 0 0-23.402 18.71c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927zm0 0" data-original="#ffc107">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" width="14" height="14" viewBox="0 0 511.987 511">
                  <path fill="#ffc107" d="M510.652 195.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77c-4.31-10.023-14.122-16.509-25.024-16.509s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418a27.208 27.208 0 0 0-23.402 18.71c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927zm0 0" data-original="#ffc107">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" width="14" height="14" viewBox="0 0 511.987 511">
                  <path fill="#ffc107" d="M510.652 195.902a27.158 27.158 0 0 0-23.425-18.71l-147.774-13.419-58.433-136.77c-4.31-10.023-14.122-16.509-25.024-16.509s-20.715 6.487-25.023 16.534l-58.434 136.746-147.797 13.418a27.208 27.208 0 0 0-23.402 18.71c-3.371 10.368-.258 21.739 7.957 28.907l111.7 97.96-32.938 145.09c-2.41 10.668 1.73 21.696 10.582 28.094 4.757 3.438 10.324 5.188 15.937 5.188 4.84 0 9.64-1.305 13.95-3.883l127.468-76.184 127.422 76.184c9.324 5.61 21.078 5.097 29.91-1.305a27.223 27.223 0 0 0 10.582-28.094l-32.937-145.09 111.699-97.94a27.224 27.224 0 0 0 7.98-28.927zm0 0" data-original="#ffc107">
                  </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" width="14" height="14" fill="#ffc107" viewBox="0 0 511.987 511">
                  <path d="M114.594 501.14c-5.61 0-11.18-1.75-15.934-5.187a27.223 27.223 0 0 1-10.582-28.094l32.938-145.09L9.312 224.81a27.188 27.188 0 0 1-7.976-28.907 27.208 27.208 0 0 1 23.402-18.71l147.797-13.419L230.97 27.027c4.307-10.047 14.119-16.535 25.022-16.535s20.715 6.488 25.024 16.512l58.433 136.77 147.774 13.417c10.882.98 20.054 8.344 23.425 18.711 3.372 10.368.254 21.739-7.957 28.907L390.988 322.75l32.938 145.086c2.414 10.668-1.727 21.7-10.578 28.098-8.832 6.398-20.61 6.89-29.91 1.3l-127.446-76.16-127.445 76.203c-4.309 2.559-9.11 3.864-13.953 3.864zm141.398-112.874c4.844 0 9.64 1.3 13.953 3.859l120.278 71.938-31.086-136.942a27.21 27.21 0 0 1 8.62-26.516l105.473-92.5-139.543-12.671a27.18 27.18 0 0 1-22.613-16.493L255.992 49.895 200.844 178.96c-3.883 9.195-12.524 15.512-22.547 16.43L38.734 208.062l105.47 92.5c7.554 6.614 10.858 16.77 8.62 26.54l-31.062 136.937 120.277-71.914c4.309-2.559 9.11-3.86 13.953-3.86zm-84.586-221.848s0 .023-.023.043zm169.13-.063.023.043c0-.023 0-.023-.024-.043zm0 0" data-original="#000000">
                  </path>
                </svg>
                <span class="ml-1.5 text-sm font-medium">(50)</span>
              </div>
              <div class="mt-4">
                <p class="text-slate-900 font-semibold text-sm sm:text-[15px] break-words">
                  <span class="mr-1.5">MRP:</span><strike class="mr-1.5 text-slate-600">$11.00</strike>$8.00</p>
              </div>
            </div>
          </a>
          </div>
`
}
datanimaple(data)
