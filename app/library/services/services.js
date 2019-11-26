
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
        const url = API.MENU_API + id;
        return this.getNetworkItem(url).then(response => {
            console.log(url)
            console.log(response)
            return response
        }).catch(error => {
            console.log(error)
        })
    },
    async getDeliveryDetails(id) {
        console.log("resto_id :", id);
        const url = API.DELIVERY_API;
        return this.getNetworkItem(url).then(response => {
            return response
        }).catch(error => {
            console.log(error)
        })
    },
    async postOrders(jsondata){
      fetch('post.deliveries'),{
          method: 'POST' ,
          body: JSON.stringify({
              User_Id : "",

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
        .catch(error=>{
            console.warn(error)
        })
    },
    async postNetworkItem(url , JSONdata) {
        return fetch(url,
            {
                method: "POST",
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