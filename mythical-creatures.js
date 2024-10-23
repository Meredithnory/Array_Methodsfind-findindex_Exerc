const mythicalCreatures = [
	{ name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
	{ name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
	{ name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
	{ name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
	{ name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" }
];

const catalogCreature = mythicalCreatures.find((creature) => {
	const waterType = creature.type === 'Water';
	return waterType;

});
console.log(catalogCreature);
const creatureIndex = mythicalCreatures.findIndex((creature) => {
	const indexOfCreature = creature.name === 'Griffin';
	return indexOfCreature;
});
console.log(creatureIndex);

const locateCreature = mythicalCreatures.find((creature) => {
	const lastSeen = creature.lastSeen === 'Enchanted Forest';
	return lastSeen;
});
console.log(locateCreature);