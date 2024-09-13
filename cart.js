document.addEventListener('DOMContentLoaded', () => {
    renderitems()
})

function renderitems() {

    const cart_Item = getItems()
        console.log(cart_Item);

        const cart_Main = document.querySelector('.main');
     
        cart_Item.forEach((items) => {
            const cartMains = document.createElement('div')


            cartMains.classList.add('main');

            const innerHTML =  `<div class="first">
                    <img src="${items?.image}" alt="">
                    <p style="margin-left: 6rem;">${items?.name}</p>
                    <p style="color: orange; margin-left: 7rem;">${items?.price}</p>
                    <button id="btnn" style="border: 1px solid orange; padding: .4rem .8rem; border-radius: 4px;">-</button>
                    <p>${items?.quantity}</p>   
                    <button id="subbtn" style="border: 1px solid orange; padding: .4rem .8rem; border-radius: 4px;">+</button>
                    <p style="margin-left: 5rem; color: #999;">X</p>
                </div>`
            cartMains.innerHTML = innerHTML
            const incrementbtn = cartMains.querySelector('#btnn')
            const decrementbtn = cartMains.querySelector('#subbtn')

            incrementbtn.addEventListener('click', handleincrement)
            cart_Main.append(cartMains)

        })
}

function handleincrement(item){
    const cart_Item = getItems();
    const newcartitems = cart_Item.map((cart_) => {
        if(cart_.id == item.id) {
            return {...cart_, quantity: cart_.quantity + 1};
        }else{
            return cart_
        }
    }) 
}

function getItems(){
    const cart_Item = JSON.parse(localStorage.getItem('cart-items'));
    return cart_Item;
}