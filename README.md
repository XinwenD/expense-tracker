# Expense Tracker

* This project creates an expense tracker. The user can see their balance, track each transaction and add/delete transactions. 
* The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### The project is published at [View Expense Tracker](https://xinwend.github.io/expense-tracker/).

## Intro

The project uses React hooks `useState`, `useReducer`, `useContext` and the Context API.

### Components

- :one: Header, :two: Balance & :three: IncomeExpense

  - The **Balance** is calculated based on all past transactions using `.map()` & `.reduce()` methods. 
  - The **Income** & **Expense** are calculated by `.map()` all transactions then `.filter()` & `.reduce()`.

![Image of header-balance](https://github.com/XinwenD/expense-tracker/blob/9106d8748e6d32afd670fd18cedc84000a64087d/imgs/header-balance.PNG)

- 4️⃣ TransactionList & 5️⃣ Transaction

  - **TransactionList** maps each **Transaction** and lists them in the "History" area. It receives `{transactions}` data from `GlobalContext` and passes each transaction to **Transaction** component.
  - **Transaction** displays the details of each `{transaction}`. It also receives the `deleteTransaction()` method from `GlobalContext` to delete unwanted transaction.

![Image of transaction history](https://github.com/XinwenD/expense-tracker/blob/9106d8748e6d32afd670fd18cedc84000a64087d/imgs/transactionlist.PNG)

- 6️⃣ AddTransaction

  - **AddTransaction** receives the amount and item entered by users, creates a random ID using `nanoid()` and add this new transaction to the state variable by calling `addTransaction()` method from `GlobalContext`.

![Image of addtransaction](https://github.com/XinwenD/expense-tracker/blob/0aae7f37cf1be7331c55cdfb678e2669ce43a960/imgs/addtransaction.PNG)

### Context

* GlobalState
  - Creates `deleteTransaction(id)`, `addTransaction(transaction)`, `initialState`.

* AppReducer
  - Defines two actions `DELETE_TRANSATION` & `ADD_TRANSACTION`.

* Constants
  - Normalizes actions' name.

### Code Build

Builds the app for production to the `build` folder.\ by [WebPack](https://webpack.js.org/)

Dependencies and loaders:

```
    "@babel/core": "^7.12.3",
    "@babel/preset-env": "^7.12.1",
    "@babel/preset-react": "^7.12.5",
    "babel-loader": "^8.2.1",
    "css-loader": "^4.3.0",
    "file-loader": "^6.2.0",
    "html-loader": "^1.3.2",
    "html-webpack-plugin": "^4.5.0",
    "url-loader": "^4.1.1",
    "webpack-cli": "^4.8.0",
    "webpack": "^4.44.2",
    "webpack-dev-server": "^3.11.1",
```
