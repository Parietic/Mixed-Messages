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

