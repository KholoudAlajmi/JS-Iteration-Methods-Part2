
const transactions = [
    ["income", 1000],
    ["income", 1500],
    ["expense", 500],
    ["expense", 300],
    ["income", 700],
];

//Part 1: Transaction Analysis
// Task 1

const incomeTransactions = transactions.filter(transactions =>
        transactions[0] === "income");


//console.log(incomeTransactions);


// Task 2

const expenseTransactions = transactions.filter(transactions =>
       transactions[0] === "expense");


//console.log(expenseTransactions);



// Part 2: Financial Summary
// Task 3

const totalIncome = incomeTransactions.reduce((accumulator ,num) => {
       return accumulator += num[1];
     }, 0)
//console.log(totalIncome);


// Task 4
const totalExpenses = expenseTransactions.reduce((accumulator ,num) => {
       return accumulator += num[1];
     }, 0)
//console.log(totalExpenses);



// Part 3: Net Analysis
// Task 5

function netTotal(a, b){
       total = a - b;
       return total;
}
//console.log(netTotal(totalIncome, totalExpenses));



// Task 6
const newArray = transactions.filter(transactions =>
       transactions[1] >= 500);

//console.log(newArray);