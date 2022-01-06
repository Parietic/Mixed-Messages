// Store string arrays as global const's, keeps it neat, and it's no harm since this is just a small script
// Message should be of the format: PREFIX FAKE_FACT SUFFIX
const prefixes = [
	// ['Did you know ', '?'], // Array prefix will use predefined suffix
	// ['You should know ', '...'],
	"It's common knowledge ",
	"It's crazy to think ",
	"The Government doesn't want you to know ",
	"I can't believe you don't know ",
];
const suffixes = ['.', '!', '...'];

// substitution category keyword: THING, GROUP, NAME, PLACE, ADJECTIVE, NAMES, PLACES
const factBodies = ['THING are actually just the ADJECTIVE THING of PLACE'];

// Parts of speech: Nouns, Adjectives, Verbs and Adverbs
const nouns = {
	things: [
		/*Living*/
		'trees',
		'plants',
		'fungus',
		'mushrooms',
		'dogs',
		'cats',
		'pets',
		'birds',
		'reptiles',
		'horses',
		'lion',
		'giraffes',
		'fish',
		'elephants',
		'rhinoceros',
		'insects',
		'tigers',
		'cows',
		'pigs',
		'chickens',
		'humans',
		'people',
		/*Inanimate*/
		'houses',
		'cars',
		'rocks',
		'refrigerators',
		'computers',
		'clothes',
		'libraries',
		'hospitals',
		'banks',
		'offices',
		'tools',
		'jewelry',
		'trucks',
		'phones',
		'guns',
	],
	groups: [
		'Army',
		'Boy Scouts',
		'Girl Scouts',
		'Government',
		'Democrats',
		'Conservatives',
		'Labour',
		'Liberal Democrats',
		'Republican',
		'Royal Family',
		'House of Commons',
		'Doctors with out Borders',
		'A Union',
	],
	names: [
		'Marilyn Monroe',
		'Abraham Lincoln',
		'Nelson Mandela',
		'John F. Kennedy',
		'Martin Luther King',
		'Queen Elizabeth II',
		'Winston Churchill',
		'Donald Trump',
		'Bill Gates',
		'Muhammad Ali',
		'Mahatma Gandhi',
		'Mother Teresa',
		'Christopher Columbus',
		'Charles Darwin',
		'Elvis Presley',
		'Albert Einstein',
		'Paul McCartney',
		'Queen Victoria',
		'Pope Francis',
		'Vincent Van Gogh',
	],
	places: [
		/*Countries*/
		'France',
		'Spain',
		'United States',
		'China',
		'Italy',
		'Turkey',
		'Mexico',
		'Germany',
		'Thailand',
		'United Kingdom',
		'Japan',
		'South Korea',
		'North Korea',
		'Canada',
		/*Continents*/
		'Europe',
		'Antarctica',
		'Asia',
		'Africa',
		'Australia',
		'North America',
		'South America',
		/*Locations*/
		'the Great Wall of China',
		'the Chichén Itzá',
		'the Petra',
		'the Machu Picchu',
		'the Christ the Redeemer',
		'the Colosseum',
		'the Taj Mahal',
		'the Nile river',
		'the Mississippi river',
		'the Amazon Rainforest',
		'the Sahara Desert',
		'the Pacific Ocean',
		'the Atlantic Ocean',
		'the Arctic',
		'the Indian',
	],
};
const adjectives = [];
const verbs = [];
const adverbs = [];

// Helper functions
const randIndex = (length) => Math.floor(Math.random() * (length - 1));

// Removes randOffset from current year
const randYear = () => {
	const currentYear = 2022;
	const randOffset = Math.floor(Math.random() * 1000);
	return currentYear - randOffset;
};

// Generate the randomized fake fact
function genFact() {
	let factStr = factBodies[randIndex(factBodies.length)];
	const factWords = factStr.split(' ');

	// if word is a substitution category keyword (ADJECTIVE, VERB etc.), then return random word of category
	// This function is used for the factWords.map() to loop over each word
	const subWords = (word) => {
		switch (word) {
			case 'THING':
				return nouns.things[randIndex(nouns.things.length)];
			case 'GROUP':
				return nouns.groups[randIndex(nouns.groups.length)];
			case 'NAME':
				return nouns.names[randIndex(nouns.names.length)];
			case 'PLACE':
				return nouns.places[randIndex(nouns.places.length)];
			case 'DATE':
				return randYear().toString();
			default:
				return word;
		}
	};
	factStr = factWords.map(subWords).join(' ');
	console.log(factStr);

	// const prefixIndex = randIndex(prefixes.length);
	// const suffixIndex = randIndex(suffixes.length);
}
for (let i = 0; i < 10; i++) genFact();
