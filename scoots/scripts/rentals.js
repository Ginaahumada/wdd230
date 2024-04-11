const url = 'https://ginaahumada.github.io/wdd230/scoots/data/rentals.json'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(data) {
    const rentalsContainer = document.getElementById('rentals');

    data.rentalTypes.forEach(rental => {
        const card = createCard(rental);
        rentalsContainer.appendChild(card);
    });
}

function createCard(rental) {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h3');
    title.textContent = rental.type;
    card.appendChild(title);

    const maxPersons = document.createElement('p');
    maxPersons.textContent = `Max. Persons: ${rental.maxPersons}`;
    card.appendChild(maxPersons);

    const pricing = document.createElement('div');
    pricing.classList.add('pricing');

    const reservation = document.createElement('p');
    reservation.textContent = `Reservation: Half Day ${rental.pricing.reservation.halfDay} Full Day ${rental.pricing.reservation.fullDay}`;
    pricing.appendChild(reservation);

    const walkIn = document.createElement('p');
    walkIn.textContent = `Walk-In: Half Day ${rental.pricing.walkIn.halfDay} Full Day ${rental.pricing.walkIn.fullDay}`;
    pricing.appendChild(walkIn);

    card.appendChild(pricing);

    return card;
}

apiFetch();