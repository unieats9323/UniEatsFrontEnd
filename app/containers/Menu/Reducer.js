
const initState = {
    cart_active: true,
    active_restaurant: {
        "id": "8",
        "name": "Coco Cubano",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/13/30/78/bb/coco-cubano.jpg",
        "type": "Cuban Tapas And Wine Bar",
        "location": "Lower campus"
    },
    cart_items: [   
        {
        "id": "123",
        "name": "Grilled Chicken Tacos",
        "image": "https://assets.epicurious.com/photos/54af451f4074bdfd06837f8c/master/pass/51175340_grilled-chicken-tacos_1x1.jpg",
        "price": "14.9",
        "qty": 1
    },
    {
        "id": "456",
        "name": "Classic Beef Nachos",
        "image": "https://static.olocdn.net/menu/chilis/d5f1006eddb695acc19a34cc2548fc37.jpg",
        "price": "16",
        "qty": 2
    }
]
     
       
  
}
export default (state = initState, action) => {
    switch (action.type){
        case 'ADD_ITEM_TO_CART':
            addedItem = action.payload
            let existingItem = state.cart_items.find(item => item.id === addedItem.id)
            if (existingItem){
                addedItem = existingItem
                addedItem.qty += 1
                console.log(state)
                return{...state}
            }
            else {
                addedItem.qty = 1
                return {...state, cart_items: [...state.cart_items, addedItem]}
            } 
        default:
            return state
    }
} 

// Your reducer should always define a state (initial state)