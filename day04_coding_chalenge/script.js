function calculateTip() {
  const bill = parseFloat(document.getElementById('bill').value);
  const tip = parseFloat(document.getElementById('tip').value);
  const people = parseInt(document.getElementById('people').value);

  if (bill > 0 && tip >= 0 && people > 0) {
    const totalTip = (bill * tip) / 100;
    const tipPerPerson = totalTip / people;
    const totalPerPerson = (bill + totalTip) / people;

    document.getElementById('tipPerPerson').textContent = `${tipPerPerson.toFixed(2)} FCFA`;
    document.getElementById('totalPerPerson').textContent = `${totalPerPerson.toFixed(2)} FCFA`;
  } else {
    alert("Please enter valid numbers in all fields.");
  }
}
