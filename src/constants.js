const apiKey = 'c438a65736msh7cc3376f061f6d6p1a5459jsn02dd1739b365';

export const chuckUrl = `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random`; // also 'jokes/categories', 'jokes/search'

export const chuckHeaders = {
	headers: {
		accept: 'application/json',
		'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
		'x-rapidapi-key': apiKey
	}
};

export const hardstoneUrl = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards`; // full list: https://rapidapi.com/omgvamp/api/hearthstone/

export const hardstoneHeaders = {
	headers: {
		accept: 'application/json',
		'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
		'x-rapidapi-key': apiKey
	}
};

const Stone = {
	cardBackId: '149',
	name: 'Frostwolf',
	description:
		'The Frostwolf orc clan trains frost wolves as loyal companions. What a crazy coincidence!',
	source: '1',
	howToGet: 'Acquired from winning five games in Ranked Play, December 2018.',
	enabled: true,
	img: 'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1a92b3ef40f5678877c299fb49cacb8b63f7cf156f5665c1c832b1bd970aa3d3.png',
	imgAnimated:
		'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/1a92b3ef40f5678877c299fb49cacb8b63f7cf156f5665c1c832b1bd970aa3d3.png',
	sortCategory: '5',
	sortOrder: '0',
	locale: 'enUS'
};

export const stoneTypes = ['Hero', 'Minion', 'Spell', 'Enchantment', 'Weapon', 'Hero Power'];
