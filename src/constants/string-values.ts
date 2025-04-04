/* Interfaces */
import Company from '../interfaces/Company';
import SectionProps from '../interfaces/SectionProps';

/* Images */
import images from './images';

const { logos } = images;

const textWelcome: string = 'welcome';
const textRecording: string = 'recording';
const textEditing: string = 'editing';
const textFAQ: string = 'faq';
const textConsulting: string = 'consulting';
const textAbout: string = 'about';
const textContact: string = 'contact';
const textContactSpakeAudio: string = 'Contact Spake Audio';
const textName: string = 'name';
const textEmail: string = 'email';
const textPhone: string = 'phone';
const textMessage: string = 'message';
const textModal: string = 'Thanks! Someone from Spake Audio will get back to you soon.';
const headerNavRoutes = [textRecording, textEditing, textConsulting, textAbout, textFAQ];

const companies: Company[] = [
  {
    name: 'The New York Times',
    logo: logos.newYorkTimes
  },
  {
    name: 'Penguin Random House',
    logo: logos.penguinRandomHouse
  },
  {
    name: 'HarperCollins Publishers',
    logo: logos.harpercollinsPublishers
  },
  {
    name: 'John Marshall Media',
    logo: logos.johnMarshallMedia
  },
  {
    name: 'Dreamscape Media',
    logo: logos.dreamscapeMedia
  },
  {
    name: 'Blackstone Publishing',
    logo: logos.blackstonePublishing
  },
  {
    name: 'Berklee Online',
    logo: logos.berkleeOnline
  }
];

const formInputs: string[] = [textName, textEmail, textPhone, textMessage];

const sections: SectionProps[] = [
  {
    heading: textWelcome,
    description: 'Spake Audio is a production house based in Providence, RI offering producing, casting, recording, editing, proofing and mastering services for audiobooks and podcasts. The studio can also be linked to remote producers, directors and engineers for ADR/looping and gaming VO.'
  },
  {
    heading: textRecording,
    description: 'We record your projects with care and professionalism in our comfortable, residential studio. During session breaks relax on our balcony with views of the Providence skyline. We want to hear what you hope to accomplish.'
  },
  {
    heading: textEditing,
    description: 'Do you have audio recordings that need editing, proofing or mastering? We accept files in standard formats and make your work sound its absolute best. Our turnaround times are fast. Let us know a bit more about your project.'
  },
  {
    heading: textConsulting,
    description: 'Many voice professionals want to set up their own home recording studios. But where to start? We can guide you in such areas as gear selection and sound isolation techniques. Tell us what you have in mind.'
  },
  {
    heading: textAbout,
    description: 'Spake Audio is operated by musician and recording engineer Joel Thibodeau. We\'ve produced many projects over the years. Below are some of our favorites.'
  },
  {
    heading: textFAQ,
    description: 'FAQ section content'
  },
  {
    heading: textContact,
    description: 'We\'re looking forward to hearing from you. Complete and submit the following form to get in touch with Spake Audio.'
  }
];

const stringValues = {
  companies,
  headerNavRoutes,
  sections,
  textModal,
  textWelcome,
  textAbout,
  textContact,
  textContactSpakeAudio,
  textName,
  textEmail,
  textPhone,
  textMessage,
  textFAQ,
  formInputs
};

export default stringValues;
