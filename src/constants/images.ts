/* Header */
import spakeLogoGreen from '../assets/images/header/spake-logo-green.svg';
import spakeLogoLichen from '../assets/images/header/spake-logo-lichen.svg';
import spakeLogoWhite from '../assets/images/header/spake-logo-white.svg';

/* Logos */
import berkleeOnline from '../assets/images/companies/berklee-online-umber.svg';
import blackstonePublishing from '../assets/images/companies/blackstone-publishing-umber.svg';
import dreamscapeMedia from '../assets/images/companies/dreamscape-media-umber.svg';
import harpercollinsPublishers from '../assets/images/companies/harpercollins-publishers-umber.svg';
import johnMarshallMedia from '../assets/images/companies/john-marshall-media-umber.svg';
import newYorkTimes from '../assets/images/companies/new-york-times-umber.svg';
import penguinRandomHouse from '../assets/images/companies/penguin-random-house-umber.svg';

const logos: { [key: string]: string } = {
  berkleeOnline,
  blackstonePublishing,
  dreamscapeMedia,
  harpercollinsPublishers,
  johnMarshallMedia,
  newYorkTimes,
  penguinRandomHouse
};

const header: { [key: string]: string } = {
  spakeLogoGreen,
  spakeLogoLichen,
  spakeLogoWhite
};

const images = {
  logos,
  header
};

export default images;
