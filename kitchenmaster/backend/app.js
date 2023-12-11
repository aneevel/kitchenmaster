const express = require('express');

const app = express();

app.use('/api/grocery-items', (req, res, next) => {
    const groceryItems = [
        { id: '42034aslkj', 
            name: 'Broccoli', 
            type: 'Vegetable', 
            amount: 1
        },
        {
            id: '23azfglj3',
            name: 'Green Bellpeper',
            type: 'Vegetable',
            amount: 2
        }
    ];
    res.status(200).json({
        message: 'Grocery items fetched successfully!',
        items: groceryItems
    });
});

module.exports = app;