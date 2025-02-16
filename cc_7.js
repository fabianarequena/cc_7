// Task 1: Customer Invoice Calculation

function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;
};
console.log(calculateInvoice(100, 0.08, 5)); // Expected: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // Expected: "Total Invoice: $530.00"

// Here we created a function with 3 parameters and developed a formula to calculate an invoice, followed by returning test data


// Task 2: Employee Hourly Wage Calculatio

function calculateHourlyWage(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52); 
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};
console.log(calculateHourlyWage(52000, 40)); // Expected: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected: "Hourly Wage: $41.21"

// Here we created a function with 2 parameters and developed a formula to calculate hourly wage, followed by returning test data


// Task 3: Customer Loyalty Discount

function calculateLoyaltyDiscount(amount, years) {
    let discountRate = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    let discountedPrice = amount * (1 - discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
}

console.log(calculateLoyaltyDiscount(100, 6)); // Expected: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected: "Discounted Price: $190.00"

// Here we created an arrow function to calculate a loyalty discount given 3 situations, then proceeded by adding test data


// Task 4: Product Shipping Cost Calculation

function calculateShippingCost(weight, location, expedited = false) {
    let baseCost = location === "USA" ? 5 + (0.5 * weight) : 10 + (0.7 * weight);
    if (expedited) baseCost += 10;
    return `Shipping Cost: $${baseCost.toFixed(2)}`;
}
console.log(calculateShippingCost(10, "USA", true)); // Expected: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected: "Shipping Cost: $13.50"

// Here we created a function to calculate shipping costs for certain regions/countries, the exepction is if it is expitited to add $10


// Task 5: Business Loan Interest Calculation

function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
}
console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected: "Total Interest: $1750.00"

// Here we created a function to calculate loan interest with 3 parameters and tested with given data


// Task 6: Filtering High-Value Transactions

function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

let transactions = [500, 1200, 3000, 800, 2200];
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); // Expected: [1200, 3000, 2200]

// Here we greated a function that filters values and then given an array, we filtered the high-value transactions

