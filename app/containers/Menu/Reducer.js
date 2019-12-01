
/* Menu reducer for storing cart information */

const initState = {
    cart_active: true,
    active_restaurant: {
        "id": "8",
        "name": "Coco Cubano",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/13/30/78/bb/coco-cubano.jpg",
        "type": "Cuban Tapas And Wine Bar",
        "location": "Lower campus"
    },
    cart_items: []     
       
  
}
export default (state = initState, action) => {
    switch (action.type){
        case 'ADD_ITEM_TO_CART':
            addedItem = action.payload
            //console.log(addedItem)
            let existingItem = state.cart_items.find(item => item.Dish_Id === addedItem.Dish_Id)
            if (existingItem){
                addedItem = existingItem
                addedItem.Quantity += 1
                //console.log(state)
                return{...state}
            }
            else {
                addedItem.Quantity = 1
                return {...state, cart_items: [...state.cart_items, addedItem]}
            } 
        case 'CLEAR_CART':
            //return state
            return {...state, cart_items: []}
        default:
            return state
    }
} 

// Your reducer should always define a state (initial state)