var API = require('./api');

var services = {

    async getRestaurantList(str) {
        const url = API.RESTARANT_API;
        return this.getNetworkItem(url).then(response => {
            console.log(response);
            return response
        }).catch(error => {
            console.log(error)
        })
    },
    async getMenu(id) {
        const url = API.MENU_API + id;
        return this.getNetworkItem(url).then(response => {
            console.log(url)
            console.log("Menu call")
            console.log(response)
            return response
        }).catch(error => {
            return []
            console.log(error)
        })
    },
    async getOpenOrders() {
        const url = API.OPEN_ORDERS_API;
        return this.getNetworkItem(url).then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
    },
    async acceptOrders(jsonData) {
        const url = API.ACCEPT_ORDERS_API;
        return this.postNetworkItem(url, jsonData).then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
    },

    async postOrders(jsondata) {
        fetch('post.deliveries'), {
            method: 'POST',
            body: JSON.stringify({
                User_Id: "",

            })
        }
    },
    async processOrders(cart, restaurant){

        //cart = JSON.stringify(cart)
        order = JSON.stringify({
            User_Id: 1235,
            Restaurant_Id: restaurant,
            Dishes: cart.cart_items,
            Delivery_Location: "K17",
            Total_Price: 17,
            Payment_Sequence: 123
        })
        payment = JSON.stringify({
            User_Id: 1235,
            Amt: 50,
            Type: "Debit",
            Reason: "Payment"
        })
        //this.sendOrders(order)
        return this.payment(payment, cart, restaurant)

    },
    async payment(payment, cart, restaurant){
        const url = API.PAYMENT_API;
        return this.postNetworkItemJSON(url, payment).then(response => {
            console.log("payment")
            console.log(response);
            prices = cart.cart_items.map(item => item.Price * item.Quantity)

            const sumPrice = function(accumulator, current) {
                const newSum = accumulator + (current.Price * current.Quantity)
                return newSum
            }
            total = cart.cart_items.reduce(sumPrice, 0)
            order = JSON.stringify({
                User_Id: "1235",
                Restaurant_Id: restaurant,
                Dishes: cart.cart_items,
                Delivery_Location: "K17",
                Total_Price: total,
                Payment_Sequence: response.Payment_Sequence
            })
            this.sendOrders(order)
        }).catch(error => {
            console.log(error)
        })
    },
    async sendOrders(jsondata){
        console.log('order')
        console.log(jsondata)
        const url = API.SEND_ORDERS_API;
        return this.postNetworkItemJSON(url, jsondata).then(response => {
            console.log("order")
            console.log(response);
            return response
        }).catch(error => {
            console.log(error)
        })
    },
    async delivered(id){
        const url = API.DELIVERY_API+"/"+id;
        return this.postNetworkItemJSON(url, "{}").then(response => {
            console.log("delivery")
            console.log(response);
            return response
        }).catch(error => {
            console.log(error)
        })

    },
    async getNetworkItem(url) {
        return fetch(url,
            {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(res => res.json())
            .then((response) => {
                return response;
            })
            .catch(error => {
                console.warn(error)
            })
    },
    async postNetworkItem(url, jsonData) {
        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: jsonData,
        })
    },
    async postNetworkItemJSON(url, jsonData) {
        return fetch(url,
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: jsonData,
            })
            .then(res => res.json())
            .then((response) => {
                return response;
            })
            .catch(error => {
                console.warn(error)
            })
    }
}

export default services;