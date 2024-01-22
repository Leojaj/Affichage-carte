// Attendez que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function () {
    // Créez une instance de carte avec Leaflet
    var maCarte = L.map('maCarte').setView([46.603354, 1.888334], 6); // Les coordonnées ([latitude, longitude]) et le niveau de zoom (6) pour centrer sur la France

    // Ajoutez une couche de carte OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(maCarte);
});