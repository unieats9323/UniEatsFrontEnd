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
            return response
        }).catch(error => {
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
    }
}

export default services;