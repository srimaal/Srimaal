// Example of dynamically adding ticker items
document.addEventListener('DOMContentLoaded', function () {
    const tickerContent = document.querySelector('.ticker-content');

    const headlines = [
        "Breaking: Stock market hits new highs!",
        "Weather: Heavy rain expected tomorrow.",
        "Sports: Local team wins championship.",
        "Tech: New iPhone release next week.",
        // Add more headlines here
    ];

    // Create ticker items dynamically
    headlines.forEach(headline => {
        const tickerItem = document.createElement('span');
        tickerItem.classList.add('ticker-item');
        tickerItem.textContent = headline;
        tickerContent.appendChild(tickerItem);
    });
});