const express = require('express');
const router = express.Router();

let productsArray = [
    {
      id: "1",
      name: "pants",
    },
    {
      id: "2",
      name: "shorts",
    },
    {
      id: "3",
      name: "shirts",
    },
  ];

router.get('/', (req, res)=>{
    console.log('this is the shop router')
})

router.get('/get-all-products', (req, res)=>{
    res.json(productsArray)
})

router.get('/get-product-by-id/:id', (req, res)=>{
    let itemFound = false;
    for(let item of productsArray){
        if(item.id === req.params.id){
            itemFound = true;
            res.json(item)
        }
    }
    if(!itemFound){
        res.json({
            message: "Could not find an item with that ID."
        })
    }
})

router.get('/get-item-by-name/:name', (req, res)=>{
    let itemFound = false;;
    for(let item of productsArray){
        if(item.name === req.params.name){
            itemFound = true;
            res.json(item)
            
        }
    }
    if(itemFound === false){
        res.json({
            message: "Could not find an item with that name."
        })
    }
    
})

router.post('/add-product', (req, res)=>{
    const {name} = req.body;
    let ID = productsArray.length+1;
    if(name){
        let newItem = {
            name: name,
            id: ID.toString()
        }
        productsArray.push(newItem);
        res.json(productsArray)
    }else{
        res.json({
            message: "You must enter a product name."
        })
    }
    
})

router.put('/update-by-id/:id', (req, res)=>{
    let itemFound = false;
    const {name} = req.body;
    for(let item of productsArray){
        if(item.id === req.params.id){
            itemFound = true;
            if(name){
                item.name = name;
                res.json(productsArray)
            }else{
                res.json({
                    message: "You must enter an updated name."
                })
            }
            
        }
    }
    if(itemFound === false){
        res.json({
            message: "There is no item to update with that ID."
        })
    }
})

router.delete('/delete-by-id/:id', (req, res)=>{
    let itemFound = false;
    for(let item of productsArray){
        if(item.id === req.params.id){
            itemFound = true;
        }
    }
    if(itemFound){
        const result = productsArray.filter((item)=> item.id !== req.params.id);
        res.json(result)
    }
    if(!itemFound){
        res.json({
            message: "There is no item with that ID to delete."
        })
    }
})



module.exports = router;



