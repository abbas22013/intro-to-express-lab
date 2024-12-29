const express = require('express');
const app = express();
app.get('/greetings/:username',(req, res) => {
    const username = req.params.username;
    res.send(`Hello there, ${username}!`)
})

//http://localhost:3000/greetings/Christy









app.get('/roll/:number', (req, res) => {
    const number = req.params.number;

    if (isNaN(number)) {
      return res.send('You must specify a number.');
    }
  
    const maxNumber = parseInt(number, 10);
  
    if (maxNumber < 1) {
      return res.send('The number must be greater than 0.');
    }
  
    const randomRoll = Math.floor(Math.random() * (maxNumber + 1));
    res.send(`You rolled a ${randomRoll}.`);
  });
 
  //http://localhost:3000/roll/6 */






  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
  app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (index < 0 || index >= collectibles.length) {
      return res.send('This item is not yet in stock. Check back soon!');
    }
  
    const item = collectibles[index];
    const queryName = req.query.name; 
    if (queryName) {
      res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours, ${queryName}!`);
    } else {
      res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
    }
  });
 
//http://localhost:3000/collectibles/2 */



app.get('/hello', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    if (name && age) {
      res.send(`Hello there, ${name}! I hear you are ${age} years old!`);
    } else {
      res.send('Please provide both your name and age as query parameters.');
    }
  });
 

  //http://localhost:3000/hello?name=Christy&age=40   













const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];
  
  app.get('/shoes', (req, res) => {
   
    const { 'min-price': minPrice, 'max-price': maxPrice, type } = req.query;
  
    let filteredShoes = [...shoes];
  
    if (minPrice) {
      filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseFloat(minPrice));
    }
    if (maxPrice) {
      filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseFloat(maxPrice));
    }
  
    if (type) {
      filteredShoes = filteredShoes.filter(shoe => shoe.type.toLowerCase() === type.toLowerCase());
    }
  
    res.json(filteredShoes);
  });
  
  


  const PORT = 3000;  
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

  
//http://localhost:3000/shoes?min-price=50&type=boot
//http://localhost:3000/shoes?type=sandal



