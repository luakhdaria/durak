const selectedItems = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.parentElement.parentElement; // Получаем элемент карточки
        const title = card.getAttribute('data-title');
        const description = card.getAttribute('data-description');
        const quantity = parseInt(card.querySelector('.qty-input').value); // Получаем количество

        // Проверяем, если элемент уже выбран
        const existingItem = selectedItems.find(item => item.title === title);
        if (existingItem) {
            existingItem.quantity += quantity; // Увеличиваем количество
            alert(`Количество обновлено: ${title} (${existingItem.quantity})`);
        } else {
            selectedItems.push({ title, description, quantity }); // Добавляем новый товар
            alert(`Добавлено: ${title} (${quantity})`);
        }
    });
});

document.getElementById('checkoutBtn').addEventListener('click', function() {
    if (selectedItems.length === 0) {
        alert('Корзина пуста!');
        return;
    }
    let info = selectedItems.map(item => `${item.title}: ${item.description} (Количество: ${item.quantity})`).join('\n');
    // Отправляем данные в Bing
    const encodedData = encodeURIComponent(info);
    window.open(`https://www.bing.com/search?q=${encodedData}`, '_blank');
});