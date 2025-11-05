let container = document.getElementById('container')
let basket = []
function datanimaple(oturulendeyer) {
    container.innerHTML='';
  oturulendeyer.map((items) => {
        container.innerHTML += `
        <div class="bg-white p-4">
            <img class="object-contain bg-center p-4 w-full h-[50vh]" 
                 src="${items.image}"  
                 alt="${items.title}" />
            <div class="p-4 mb-2">
                <h3 class=" uppercase text-gray-500">${items.category}</h3>
                <p class=" mt-8 font-bold">${items.title}</p>
                <span class="mt-3 text-gray-500 line-clamp-2">${items.description}</span>
               <div class="flex justify-between  flex-wrap  mt-6">
               <h2 class="font-bold text-3xl ">$ ${items.price}</h2>
<button class="bg-blue-700 flex gap-3 items-center text-white px-4  py-2 rounded"> <i class="fa-regular fa-cart-shopping"></i>Əlavə et</button>
               </div>
                    </div>
        </div>`
    })
}

datanimaple(data)
function filtirmleme(yenifiltr){

let filterlenmis=yenifiltr ? data.filter(f => f.category===yenifiltr ) :data;
datanimaple(filterlenmis)
}
