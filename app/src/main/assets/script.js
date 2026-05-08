let total = 0;

function addItem() {
    const budgetInput = document.getElementById('budget');
    const nameInput = document.getElementById('itemName');
    const qtyInput = document.getElementById('itemQuantity'); // Novo: pegando a quantidade
    const priceInput = document.getElementById('itemPrice');

    const budget = parseFloat(budgetInput.value) || 0;
    const name = nameInput.value || "Item sem nome";
    const qty = parseInt(qtyInput.value) || 1; // Novo: garantindo que seja um número inteiro
    const unitPrice = parseFloat(priceInput.value) || 0;

    if (unitPrice <= 0) {
        alert("Insira um preço válido!");
        return;
    }

    // --- A MÁGICA ACONTECE AQUI ---
    // Calculamos o subtotal desse item específico
    const subtotalItem = unitPrice * qty;

    // Somamos o subtotal ao total geral da compra
    total += subtotalItem;

    // Adiciona na lista visual
    const list = document.getElementById('itemList');
    const li = document.createElement('li');

    // Melhoramos o texto da lista para você ver a conta que foi feita
    li.innerHTML = `
        <div style="display: flex; justify-content: space-between; width: 100%;">
            <span><strong>${qty}x</strong> ${name} <small>(R$ ${unitPrice.toFixed(2)}/un)</small></span>
            <span><strong>R$ ${subtotalItem.toFixed(2)}</strong></span>
        </div>
    `;
    list.prepend(li);

    updateDashboard(budget);

    // Limpa os campos para o próximo item
    nameInput.value = "";
    priceInput.value = "";
    qtyInput.value = "1"; // Volta a quantidade para 1
    nameInput.focus();
}

function updateDashboard(budget) {
    const totalDisplay = document.getElementById('totalSpent');
    const balanceDisplay = document.getElementById('remainingBalance');

    const remaining = budget - total;

    totalDisplay.innerText = `R$ ${total.toFixed(2)}`;
    balanceDisplay.innerText = `R$ ${remaining.toFixed(2)}`;

    // Se estourar o orçamento, fica vermelho
    if (remaining < 0) {
        balanceDisplay.classList.add('over-budget');
        balanceDisplay.style.color = "red"; // Garantia visual
    } else {
        balanceDisplay.classList.remove('over-budget');
        balanceDisplay.style.color = "#28a745"; // Verde se estiver no limite
    }
}