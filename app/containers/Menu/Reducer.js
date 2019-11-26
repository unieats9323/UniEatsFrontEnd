
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
        "Dish_Id": "123",
        "Dish_Name": "Grilled Chicken Tacos",
        "Image_Url": "https://assets.epicurious.com/photos/54af451f4074bdfd06837f8c/master/pass/51175340_grilled-chicken-tacos_1x1.jpg",
        "Price": "14.9",
        "Quantity": 1
    }
]
     
       
  
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
        default:
            return state
    }
} 

// Your reducer should always define a state (initial state)