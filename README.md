# _{Template}_

#### _A template._

#### By _**{Connor Hansen}**_

## Technologies Used

- _HTML_
- _CSS_
- _Bootstrap_
- _Javascript_
- _JQuery_
- _VSCode_

## Description

_{This webpage has been created to demonstrate constructors and prototypes. The user selects a size and optional toppings, and the program displays the final price upon submission:}_
- _The user can choose the size of the pizza they'd like to order._
- _The user can choose any additional toppings on the pizza._
- _The program creates a pizza object and calls prototype methods to display the cost._

<!-- #### Additional Objectives -->


## Setup/Installation Requirements

- _To clone and run from [GitHub Repo](https://github.com/chansen1395/pizza-parlor8-27):_

  - _In bash at a folder of your choice, type the following:_
    - $ git clone https://github.com/chansen1395/pizza-parlor8-27
    - $ code .
  - _Use a program such as VSCode to view and run the program._

<!-- - _Alternatively, see links below to open the [Active gh-pages link](https://chansen1395.github.io/pizza-parlor8-27/)_ -->

## Specs

### Describe: getSizePrice()

### Test: "If the pizza is a Small, the base price is 5."
- Code: Pizza("S");
- Expected Output: 5

### Test: "If the pizza is a Medium, the base price is 10."
- Code: Pizza("M");
- Expected Output: 10

### Test: "If the pizza is a Large, the base price is 15."
- Code: Pizza("L");
- Expected Output: 15


### Describe: getToppingsPrice()

### Test: "If no topping is selected, it returns no added price."
- Code:
    * toppings = [];
    * Pizza("S", toppings);
- Expected Output: 5

### Test: "If one topping is selected, it returns the added price of the topping."
- Code:
    * toppings = ["mushrooms"];
    * Pizza("S", toppings);
- Expected Output: 6

### Test: "If more than one topping is selected, it returns the added price of the toppings."
- Code:
    * toppings = ["mushrooms", "ravioli"];
    * Pizza("S", toppings);
- Expected Output: 12

### Describe displayPrice(newPizza)

### Test: "Calculates price and shows it to the user."
- Code: 
    * toppings = ["mushrooms", "ravioli"];
    * newPizza("S", toppings);
    * displayPrice(newPizza);
- Expected Output: 12


## Known Bugs

- No known bugs.

## License

_{Let me know if you run into any issues or have questions, ideas or concerns. I encourage you to contact me or make a contribution to the code.}_

## Contact Information

- _{<chansen13@georgefox.edu>}_
- _{[GitHub Repo - main](https://github.com/chansen1395/pizza-parlor8-27)}_
<!-- - _{[Active gh-pages link](https://chansen1395.github.io/pizza-parlor8-27/)}_ -->