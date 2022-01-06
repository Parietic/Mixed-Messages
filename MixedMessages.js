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

const factBodies = [
	'SUBJECT are just ADJECTIVE OBJECTS',
	'SUBJECT were part of OBJECTS until DATE',
	'SUBJECT have been used as a form of currency by OBJECTS',
	'ADVERB VERB was made illegal in OBJECT after DATE',
];

// Following SVO, and SVIO word order
const subjects = [];
const indirectObjects = [];
const verbs = [];
const objects = [];

// Helper functions
const randIndex = (length) => Math.floor(Math.random() * (length - 1));
const randYear = () => {
	const currentYear = 2022;
	const randOffset = Math.floor(Math.random() * 1000);
	return currentYear - randOffset;
};

// Generate the randomized fake fact
function genFact() {
	let factStr = factBodies[randIndex(factBodies.length)];
	const factWords = factStr.split(' ');

	// if word is a substitution keyword (SUBJECT, VERB etc.), then return random word of the sub type.
	const subWords = (word) => {
		switch (word) {
			// case 'ADJECTIVE':
			// case 'SUBJECT':
			// case 'ADVERB':
			// case 'VERB':
			// case 'OBJECT':
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
genFact();
