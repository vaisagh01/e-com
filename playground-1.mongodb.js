/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('test');

// Insert a few documents into the sales collection.
db.getCollection('products').insertMany([
  {
    "type": "Wallet",
    "unique": true,
    "require": true,
    "desc": "Secure and stylish wallet to hold your essentials",
    "img": "https://media.istockphoto.com/id/180756294/photo/wallet.jpg?s=612x612&w=0&k=20&c=sc6I6KsEbiv9Y4BtKji8w5rBYono2X63-ipfhYk6Ytg=",
    "categories": ["Accessories"],
    "size": "",
    "color": "Brown",
    "price": 34.99
  },
  {
    "type": "Backpack",
    "unique": true,
    "require": true,
    "desc": "Spacious and comfortable backpack for everyday use",
    "img": "https://example.com/backpack.jpg",
    "categories": ["Bags"],
    "size": "",
    "color": "Black",
    "price": 49.99
  },
  {
    "type": "Mug",
    "unique": true,  
    "require": true,
    "desc": "Insulated mug to keep your drinks hot or cold",
    "img": "https://example.com/mug.jpg",
    "categories": ["Kitchenware"],
    "size": "16 oz",
    "color": "Red",
    "price": 15.99
  },
  {
    "type": "Desk Lamp",
    "unique": true,
    "require": true,
    "desc": "Adjustable desk lamp for better lighting",
    "img": "https://example.com/desk_lamp.jpg",
    "categories": ["Homeware"],
    "size": "",
    "color": "Black",
    "price": 24.99
  },
  {
    "type": "Movie",
    "unique": true,
    "require": true,
    "desc": "A thrilling action movie for a night in",
    "img": "https://example.com/movie.jpg",
    "categories": ["Entertainment", "Movies"],
    "size": "",
    "color": "",
    "price": 19.99
  },
  {
    "type": "Board Game",
    "unique": true,
    "require": true,
    "desc": "A fun and engaging board game for the whole family",
    "img": "https://example.com/board_game.jpg",
    "categories": ["Entertainment", "Games"],
    "size": "",
    "color": "",
    "price": 39.99
  },
  {
    "type": "Plant",
    "unique": true,
    "require": true,
    "desc": "A beautiful and low-maintenance houseplant",
    "img": "https://example.com/plant.jpg",
    "categories": ["Homeware"],
    "size": "",
    "color": "",
    "price": 19.99
  },
  {
    "type": "Candle",
    "unique": true,
    "require": true,
    "desc": "Scented candle to fill your home with a relaxing aroma",
    "img": "https://example.com/candle.jpg",
    "categories": ["Homeware"],
    "size": "",
    "color": "White",
    "price": 12.99
  },
  {
    "type": "Makeup Brush Set",
    "unique": true,
    "require": true,
    "desc": "High-quality makeup brushes for a flawless look",
    "img": "https://example.com/makeup_brush_set.jpg",
    "categories": ["Beauty"],
    "size": "",
    "color": "",
    "price": 49.99
  },
  {
    "type": "Video Game",
    "unique": true,
    "require": true,
    "desc": "An immersive and exciting video game for all ages",
    "img": "https://example.com/video_game.jpg",
    "categories": ["Entertainment", "Games"],
    "size": "",
    "color": "",
    "price": 59.99
  },
  {
    "type": "Shirt",
    "unique": true,
    "require": true,
    "desc": "A comfortable and stylish cotton shirt",
    "img": "https://example.com/shirt.jpg",
    "categories": ["Clothing", "Tops"],
    "size": "M",
    "color": "Blue",
    "price": 29.99
  },
  {
    "type": "Pants",
    "unique": true,
    "require": true,
    "desc": "Elegant and flowy dress perfect for any occasion",
    "img": "https://example.com/dress.jpg",
    "categories": ["Clothing", "Dresses"],
    "size": "",
    "color": "Black",
    "price": 79.95
  },
  {
    "type": "Hat",
    "unique": true,
    "require": true,
    "desc": "Warm and stylish beanie for the colder months",
    "img": "https://example.com/hat.jpg",
    "categories": ["Accessories"],
    "size": "",
    "color": "Grey",
    "price": 19.99
  },
  {
    "type": "Sneakers",
    "unique": true,
    "require": true,
    "desc": "Lightweight and comfortable running shoes",
    "img": "https://example.com/sneakers.jpg",
    "categories": ["Shoes", "Sportswear"],
    "size": "US 8",
    "color": "White",
    "price": 89.99
  },
  {
    "type": "Book",
    "unique": true,
    "require": true,
    "desc": "A captivating novel for book lovers",
    "img": "https://example.com/book.jpg",
    "categories": ["Books", "Fiction"],
    "size": "",
    "color": "",
    "price": 14.99
  },
  {
    "type": "Phone Case",
    "unique": true,
    "require": true,  
    "desc": "Durable and stylish phone case to protect your device",
    "img": "https://example.com/phone_case.jpg",
    "categories": ["Accessories"],
    "size": "",
    "color": "Red",
    "price": 12.99
  },
  {
    "type": "Watch",
    "unique": true,
    "require": true,
    "desc": "Sleek and sophisticated watch for any occasion",
    "img": "https://example.com/watch.jpg",
    "categories": ["Accessories"],
    "size": "",
    "color": "Silver",
    "price": 199.99
  },
  {
    "type": "Sunglasses",
    "unique": true,
    "require": true,
    "desc": "Stylish sunglasses to protect your eyes in the sun",
    "img": "https://example.com/sunglasses.jpg",
    "categories": ["Accessories"],
    "size": "",
    "color": "Black",
    "price": 39.99
  },
  {
    "type": "Headphones",
    "unique": true,
    "require": true,
    "desc": "Wireless headphones with superior sound quality",
    "img": "https://example.com/headphones.jpg",
    "categories": ["Electronics"],
    "size": "",
    "color": "Black",
    "price": 99.99
  },
  {
    "type": "Laptop",
    "unique": true,
    "require": true,
    "desc": "Powerful and lightweight laptop for work or play",
    "img": "https://example.com/laptop.jpg",
    "categories": ["Electronics", "Computers"],
    "size": "13 inch",
    "color": "Space Grey",
    "price": 799.99
  }
]

);


// Print a message to the output window.
// console.log(`${salesOnApril4th} sales occurred in 2014.`);
