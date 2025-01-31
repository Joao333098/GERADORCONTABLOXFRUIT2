document.addEventListener('DOMContentLoaded', () => {
    const ruleCards = document.querySelectorAll('.rule-card');

    ruleCards.forEach(card => {
        card.addEventListener('click', () => {
            const isExpanded = card.classList.contains('expanded');

            // Close all cards
            ruleCards.forEach(c => c.classList.remove('expanded'));

            // Toggle the clicked card
            if (!isExpanded) {
                card.classList.add('expanded');
            }
        });
    });
});
