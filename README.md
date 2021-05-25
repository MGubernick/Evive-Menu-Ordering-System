# Evive Menu Ordering System

This Repository is for the take home coding challenge 'Menu Ordering System' from Evive

To to send requests to the API and test while developing, I utilized Postman and Wrote Curl-Scrips

**Dependencies Used:**

- Cores
- Express
- Mongoose
- MongoDB

## Set up instructions

1. To ensure dependencies are installed run **npm install** in terminal before use

2. Run the server using **npm run server**

3. To use this API (if testing from Postman), ensure you are using the correct url in the Requests: <http://localhost:4741/>

4. Be sure to follow endpoint instructions below

5. Enjoy!

### Breakfast

| Routes | Method | Endpoint |
| ----------- | ----------- | ----------- |
| Order | POST | /breakfast

### curl-script breakfast

Run this code in terminal while server is running for curl-script testing:

```sh
 ORD='*enter order numbers here separated by commas*' sh curl-scripts/order/breakfast.sh
```

#### Request Format: Breakfast (for body using Postman)

Ex 1:
{"breakfast": "1,2,3"}
// will return: Eggs,Toast,Coffee

Ex 2: (multiple drinks)
{"breakfast": "1,2,3,3"}
// will return: Eggs,Toast,Coffee,Coffee

### Lunch

| Routes | Method | Endpoint |
| ----------- | ----------- | ----------- |
| Order | POST | /lunch

### curl-script lunch

Run this code in terminal while server is running for curl-script testing:

```sh
 ORD='*enter order numbers here separated by commas*' sh curl-scripts/order/lunch.sh
```

#### Request Format: Lunch (for body using Postman)

Ex 1:
{"lunch": "1,2,3"}
// will return: Salad,Chips,Soda

Ex 2: (no drinks ordered)
{"lunch": "1,2"}
// will return: Salad,Chips,Water

Ex 3: (multiple sides)
{"lunch": "1,2,2,3"}
// will return: Salad, Chips,Chips,Soda

### Dinner

| Routes | Method | Endpoint |
| ----------- | ----------- | ----------- |
| Order | POST | /dinner

### curl-script dinner

Run this code in terminal while server is running for curl-script testing:

```sh
 ORD='*enter order numbers here separated by commas*' sh curl-scripts/order/dinner.sh
```

#### Request Format: Dinner (for body using Postman)

Ex 1:
{"dinner": "1,2,3,4"}
// will return: Steak,Potatoes,Wine,Water,Cake

Ex 2: (no drinks ordered)
{"lunch": "1,2,4"}
// will return: Steak,Potatoes,Water,Cake

Ex 3: (no desert ordered)
{"lunch": "1,2,3"}
// will return: Unable to process: Dessert is missing

## Technologies Used

- JavaScript
- Express
- MongoDB
- Mongoose
- Heroku
- VS Code

## Unsolved Problems

- The one element that I wanted to implement and was unable to in the time is incrementing the number of an item that has multiples by 1 rather than printing it again.
