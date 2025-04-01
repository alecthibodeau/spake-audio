const allButLettersAndNumbers: RegExp = /[^a-zA-Z0-9]/g;

function formatLettersAndNumbers(text: string): string {
  return text.replace(allButLettersAndNumbers, '');
}

function makeTitleCase(text: string): string {
  return text[0].toUpperCase() + text.slice(1);
}

const formatText = {
  formatLettersAndNumbers,
  makeTitleCase
};

export default formatText;
