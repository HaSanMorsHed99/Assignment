const expense=document.getElementById('cost');
const perplri = document.getElementById('ipercost');
const m = document.getElementById('imanagercost');
const c = document.getElementById('icoachcost');
const tc = document.getElementById('tcost');

document.getElementById("bclc").addEventListener("click", function() {
    const calculateexpense = 5 * parseFloat(perplri.value);
    expense.innerText = calculateexpense;
});
document.getElementById("btotalcost").addEventListener("click", function () {
    const total = parseFloat(m.value) + parseFloat(c.value)+parseFloat(expense.innerText);
    tc.innerText = total;
});


 