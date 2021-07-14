const fs = require('fs');
const { Chocolate, Sweet, Strawberry }= require('./Cookies.js')

class Kitchen{
    constructor(cookies){
        this.cookies = cookies || [];

    }

    bake(...cookie){
        let cookies = this.getCookies();
        let id = cookies[cookies.length - 1].id+1;
        let [name, price, type, isSweet] = cookie;
        switch (type){
            case 'Chocolate':
                cookies.push(new Chocolate (id,name,price,type,isSweet))
                break;
            case 'Sweet':
                cookies.push(new Sweet (id,name,price,type,isSweet))
                break;
            case 'Strawberry':
                cookies.push(new Strawberry (id,name,price,type,isSweet))
                break;
        }
        //console.log(Cookies)
        this.saveToCSV(cookies)
        console.log(`${name} has been added...`)
    }

    eat(cookieName){
        let cookies = this.getCookies();

        for(let i= 1; i<cookies.length; i++){
            if(cookies[i].name === cookieName){
                cookies.splice(i, 1);
            }
        }
        this.saveToCSV(cookies);
        console.log(`${cookieName} has been eaten`);
    }


    addSugar(cookieName){
        let cookies = this.getCookies();

        cookies.forEach(cookie => {
            if (cookie.name === cookieName){
                cookie.isSweet = true;
            }
        })

        this.saveToCSV(cookies);
        console.log(`Sugar is added to ${cookieName}`)
    }

    showCookies(){
        let cookies = this.getCookies();
        console.log("Cookies List : ");
        cookies.forEach((cookie) => {
            let { id, name, price, type, isSweet}= cookie
            console.log(`${id}. ${name}, Price : ${price}, Type : ${type}, Sweet : ${isSweet} `)
        })
    }

    getCookies() {
        let data = fs.readFileSync('./Cookies.csv','utf8')
        let tempData = data.split('\r\n');

        let cookiesArray = [];
        for (let i = 1; i < tempData.length; i++){
            cookiesArray.push(tempData[i].split(','))
        }
        let cookies = cookiesArray.map(cookie => {
            let [ id, name, price, type, isSweet ] = cookie;
            
            switch(type){
                case 'Chocolate':
                    return new Chocolate(+id, name, +price, type, Boolean(isSweet));
                case 'Sweet':
                    return new Sweet(+id, name, +price, type, Boolean(isSweet));
                case 'Strawberry':
                    return new Strawberry(+id, name, +price, type, Boolean(isSweet));
            }
        })
        return cookies;
    }
    saveToCSV(cookies){
        let tempArr = [];
        cookies.forEach(cookie => {
            let {id, name, price, type, isSweet} = cookie;
            tempArr.push([id, name, price, type, isSweet]);
        })
        let data = ['id,name,price,type,isSweet'];
        tempArr.forEach(temp => {
            data.push(temp.join());
        })

        let dataFix = data.join('\r\n');

        fs.writeFileSync('./cookies.csv', dataFix)
    }
}


module.exports = Kitchen