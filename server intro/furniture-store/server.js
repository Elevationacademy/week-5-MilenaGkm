const express = require('express')
const path = require('path')
const app = express()

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/priceCheck/:name', function(request, response) {
    let name = request.params.name
    let priceObj = {price: null}
    for(let obj of store) {
        if(obj.name === name) {
            priceObj = {price: obj.price}
        }
    }
    response.send(priceObj)
})

app.get("/buy/:name", function(req, res){
    let name = req.params.name
    for(let obj of store) {
        if(obj.name === name) {
            obj.inventory -= 1
            res.send(`Congrats! You've just bought ${obj.name} for ${obj.price}. There are ${obj.inventory} left in stock.`)
            console.log(`${obj.inventory}`);
        }
    }
})



const port = 3000

app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})