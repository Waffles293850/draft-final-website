function toggleCard(card) {
    const definition = card.querySelector('.definition');
    if (definition.style.display === 'none' || !definition.style.display) {
        definition.style.display = 'block'; // Show description
    } else {
        definition.style.display = 'none'; // Hide description
    }
}