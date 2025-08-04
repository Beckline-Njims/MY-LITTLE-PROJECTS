const form = document.getElementById('expense-form');
const nameInput = document.getElementById('name');
const amountInput = document.getElementById('amount');
const dateInput = document.getElementById('date');
const expenseList = document.getElementById('expense-list');
const totalSpan = document.getElementById('total');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function updateTotal() {
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    totalSpan.textContent = total.toFixed(2);
}

function renderExpenses() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
      <div>
        <strong>${expense.name}</strong> - $${expense.amount.toFixed(2)} <small>(${expense.date})</small>
      </div>
      <button class="delete-btn" onclick="deleteExpense(${index})">X</button>
    `;
        expenseList.appendChild(li);
    });
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    renderExpenses();
    updateTotal();
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const date = dateInput.value;

    if (!name || isNaN(amount) || !date) return;

    const expense = { name, amount, date };
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));

    nameInput.value = '';
    amountInput.value = '';
    dateInput.value = '';

    renderExpenses();
    updateTotal();
});

renderExpenses();
updateTotal();
