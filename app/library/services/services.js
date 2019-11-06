
var API = require('./api')

var services = {

    async getRestaurantList(str) {
        const url = API.RESTARANT_API;
        return this.getNetworkItem(url).then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
    },
    async getMenu(id) {
        const url = API.MENU_API;
        return this.getNetworkItem(url).then(response => {
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
        .catch(error=>{
            console.warn(error)
        })
    }
    
}

export default services;