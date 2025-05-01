const axios = require('axios');

const emulatePoubelleFilling = async () => {
  try {
    // Simulation : 20% de chance qu'une poubelle devienne pleine
    const pleine = Math.random() < 0.2;

    await axios.post('http://localhost:3000/poubelles/update', {
      id: '1HZtsfCLOxQetHnHBNU4',
      pleine: pleine
    });
    console.log(`Envoyé pour la poubelle 1HZtsfCLOxQetHnHBNU4 : pleine = ${pleine}`);

    // Simulation pour une autre poubelle
    const pleine2 = Math.random() < 0.3;

    await axios.post('http://localhost:3000/poubelles/update', {
      id: '3K9VP1nuFvkEwCF0LBjY',
      pleine: pleine2
    });
    console.log(`Envoyé pour la poubelle 3K9VP1nuFvkEwCF0LBjY : pleine = ${pleine2}`);

    // Simulation pour une autre poubelle
    const pleine3 = Math.random() < 0.4;

    await axios.post('http://localhost:3000/poubelles/update', {
      id: '5Mzxr0HX3ja2nxio9kjn',
      pleine: pleine3
    });
    console.log(`Envoyé pour la poubelle 5Mzxr0HX3ja2nxio9kjn : pleine = ${pleine3}`);

    // Simulation pour une autre poubelle
    const pleine4 = Math.random() < 0.3;

    await axios.post('http://localhost:3000/poubelles/update', {
      id: 'zwlRPNzztLDuHVOHrfo5',
      pleine: pleine4
    });
    console.log(`Envoyé pour la poubelle zwlRPNzztLDuHVOHrfo5 : pleine = ${pleine4}`);

  } catch (error) {
    console.error("Erreur lors de l'émulation :", error.message);
  }
};

// Démarrage de l'émulateur toutes les 30 sec
//setInterval(emulatePoubelleFilling, 30000);
// Démarrage de l'émulateur toutes les 2 minutes
//setInterval(emulatePoubelleFilling, 120000);
// Démarrage de l'émulateur toutes les 1 heure
setInterval(emulatePoubelleFilling, 3600000);
console.log('Émulateur de remplissage des poubelles lancé...');
