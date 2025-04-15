const allButLettersAndNumbers: RegExp = /[^a-zA-Z0-9]/g;
const allNonDigits: RegExp = /\D/g;
const validEmail: RegExp = /^\S+@\S+\.\S+$/;

function formatLettersAndNumbers(text: string): string {
  return text.replace(allButLettersAndNumbers, '');
}

function formatTitleCase(text: string): string {
  return text[0].toUpperCase() + text.slice(1);
}

const formatText = {
  allNonDigits,
  validEmail,
  formatLettersAndNumbers,
  formatTitleCase
};

export default formatText;
