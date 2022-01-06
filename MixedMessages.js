// Store string arrays as global const's, keeps it neat, and it's no harm since this is just a small script
// Message should be of the format: PREFIX FAKE_FACT SUFFIX
const prefixes = [
	['Did you know ', '?'], // Array prefix will use predefined suffix
	['You should know ', '...'],
	"It's common knowledge ",
	"It's crazy to think ",
	"The Government doesn't want you to know ",
	"I can't believe you don't know ",
];
const suffixes = ['.', '!', '...'];

// substitution category keyword: THING, GROUP, NAME, PLACE, ADJECTIVE, NAMES, PLACES
const factBodies = [
	'THING are actually just the THING of PLACE',
	'THING are just ADJECTIVE THING',
	'NAMEs favorite past time is visiting PLACE to ADVERB VERB',
	'GROUP were counted as GROUP until DATE',
	'THING were used as a currency by GROUP until DATE',
	'NAME brought THING to PLACE',
	'NAME was actually alive in DATE',
	'NAME had been dead since DATE, they are actually NAME in disguise',
	'PLACE uses THING so GROUP can ADVERB VERB',
	'NAME is just ADJECTIVE THING in a suit',
	'the THING of NAME were stolen from PLACE',
];

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
		'Labour party',
		'Liberal Democrats',
		'Republicans',
		'Royal Family',
		'House of Commons',
		'Doctors with out Borders',
		'a Union',
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
const adjectives = [
	'able',
	'bad',
	'best',
	'better',
	'big',
	'certain',
	'clear',
	'different',
	'early',
	'easy',
	'economic',
	'federal',
	'free',
	'full',
	'good',
	'great',
	'hard',
	'high',
	'human',
	'important',
	'international',
	'large',
	'late',
	'little',
	'local',
	'long',
	'low',
	'major',
	'military',
	'national',
	'new',
	'old',
	'only',
	'other',
	'political',
	'possible',
	'public',
	'real',
	'recent',
	'right',
	'small',
	'social',
	'special',
	'strong',
	'sure',
	'true',
	'whole',
	'young',
];
const verbs = [
	'walk',
	'look up',
	'look down',
	'see',
	'run',
	'eat',
	'drink',
	'lie down',
	'lie',
	'speak',
	'hear',
	'swear',
	'read',
	'understand',
	'jump',
	'work',
	'feel',
	'mate',
	'love',
	'die',
	'drive',
	'swim',
	'fly',
	'sit down',
	'stand up',
	'smoke',
	'do drugs',
];
const adverbs = [
	'accidentally',
	'anxiously',
	'arrogantly',
	'awkwardly',
	'beautifully',
	'bitterly',
	'bravely',
	'briefly',
	'carefully',
	'easily',
	'generally',
	'happily',
	'honestly',
	'jealously',
	'keenly',
	'miserably',
	'mysteriously',
	'naturally',
	'often',
	'politely',
	'quickly',
	'rapidly',
	'randomly',
	'slowly',
	'suddenly',
	'thankfully',
	'unexpectedly',
	'wrongly',
];

// Helper functions
const randIndex = (length) => Math.floor(Math.random() * length);

// Removes randOffset from current year
const randYear = () => {
	const currentYear = 2022;
	const randOffset = Math.floor(Math.random() * 1000);
	return currentYear - randOffset;
};
// console.log(randYear());

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
				return 'the ' + nouns.groups[randIndex(nouns.groups.length)];
			case 'NAME':
				return nouns.names[randIndex(nouns.names.length)];
			case "NAME's":
				return nouns.names[randIndex(nouns.names.length)] + "'s";
			case 'NAMEs':
				return nouns.names[randIndex(nouns.names.length)] + 's';
			case 'PLACE':
				return nouns.places[randIndex(nouns.places.length)];
			case 'ADJECTIVE':
				return adjectives[randIndex(adjectives.length)];
			case 'VERB':
				return verbs[randIndex(verbs.length)];
			case 'ADVERB':
				return adverbs[randIndex(adverbs.length)];
			case 'DATE':
				return randYear().toString();
			default:
				return word;
		}
	};
	factStr = factWords.map(subWords).join(' ');

	const prefixIndex = randIndex(prefixes.length);
	if (typeof prefixes[prefixIndex] === 'object') {
		console.log(
			prefixes[prefixIndex][0] + factStr + prefixes[prefixIndex][1]
		);
	} else {
		const suffixIndex = randIndex(suffixes.length);
		console.log(prefixes[prefixIndex] + factStr + suffixes[suffixIndex]);
	}
}
genFact();
