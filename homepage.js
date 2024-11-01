const redirectButton = document.getElementById('redirectButton');
if (redirectButton) {
    redirectButton.addEventListener('click', () => {
        window.location.href = 'blueprint.html';
    });
}
const properties = [
    { id: 1, title: 'Property 1', location: 'Location 1', price: 200000, bhk: 3, sqft: 7000, imageUrl: "https://via.placeholder.com/1800", link: 'property1.html' },
    { id: 2, title: 'Property 2', location: 'Location 2', price: 100000, bhk: 3, sqft: 5500, imageUrl: "https://via.placeholder.com/1800", link:  'property2.html'},
    { id: 3, title: 'Property 3', location: 'Location 3', price: 75000, bhk: 2, sqft: 2000, imageUrl: "https://via.placeholder.com/1800", link: 'property3.html' },
    { id: 4, title: 'Property 4', location: 'Location 4', price: 60000, bhk: 2, sqft: 1800, imageUrl: "https://via.placeholder.com/1800", link: 'property4.html' }
];

function displayProperties(propertyList) {
    const propertyContainer = document.getElementById('property-list');
    propertyContainer.innerHTML = '';
    propertyList.forEach(property => {
        const propertyCard = `
            <div class="col-md-4">
                <div class="card property-card">
                    <img src="${property.imageUrl}" class="card-img-top property-image" alt="${property.title}">
                    <div class="card-body">
                        <h5 class="card-title">${property.title}</h5>
                        <p class="card-text">Price: ${property.price.toLocaleString()}</p>
                        <p class="card-text">Location: ${property.location}</p>
                        <p class="card-text">Bhk: ${property.bhk} | Sq Ft: ${property.sqft}</p>
                        <a href="${property.link}" class="btn btn-warning">View Details</a>
                    </div>
                </div>
            </div>`;
        propertyContainer.innerHTML += propertyCard;
    });
}

displayProperties(properties);

function filterProperties() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;

    const filteredProperties = properties.filter(property => 
        (property.location.toLowerCase().includes(searchTerm) || searchTerm === '') &&
        (property.price >= minPrice && property.price <= maxPrice)
    );

    displayProperties(filteredProperties);
}
