
const initState = {
    cart: {
        active: true,
        restaurant: {
            "id": "8",
            "name": "Coco Cubano",
            "image": "https://media-cdn.tripadvisor.com/media/photo-s/13/30/78/bb/coco-cubano.jpg",
            "type": "Cuban Tapas And Wine Bar",
            "location": "Lower campus"
        },
        menu: [
            {
            "id": "123",
            "name": "Grilled Chicken Tacos",
            "image": "https://assets.epicurious.com/photos/54af451f4074bdfd06837f8c/master/pass/51175340_grilled-chicken-tacos_1x1.jpg",
            "price": "14.9",
            "qty": "2"
            },
            {
            "id": "456",
            "name": "Classic Beef Nachos",
            "image": "https://static.olocdn.net/menu/chilis/d5f1006eddb695acc19a34cc2548fc37.jpg",
            "price": "16",
            "qty": "2"
            },
            {
            "id": "789",
            "name": "Cuban Sandwich",
            "image": "https://www.closetcooking.com/wp-content/uploads/2013/03/Cuban-Sandwich-500-4623.jpg",
            "price": "19.5",
            "qty": "2"
            },
            {
            "id": "012",
            "name": "Peach Mango Ice Tea",
            "image": "http://www.belinusa.com/wp-content/uploads/sites/24/2017/11/mango-peach-1030x639.jpg",
            "price": "6.5",
            "qty": "2"
            }
        ]
    }
}
export default (state = initState, action) => {
    switch (action.type){
        case 'ADD_ITEM_TO_CART':
            console.log()
            return {...state, cart: state.cart.concat(action.payload)}
        default:
            return state
    }
} 