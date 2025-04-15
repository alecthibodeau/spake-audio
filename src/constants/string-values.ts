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
const textContactSpakeAudio: string = 'Contact Us';
const textEmail: string = 'email';
const textName: string = 'name';
const textMessage: string = 'message';
const textModal: string = 'Thanks! Someone from Spake Audio will get back to you soon.';
const textPhone: string = 'phone';
const textText: string = 'text';

const emailServiceId: string = 'service_motlos2';
const emailTemplateId: string = 'template_twmeleg';
const emailPublicKey: string = 'rv9Ct6p5U0kLM8po5';
const inputFieldNames: string[] = ['name', 'email', 'phone', 'message'];
const urlSendForm: string = 'https://api.emailjs.com/api/v1.0/email/send-form';
const textTime: string = 'time';

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

const sections: SectionProps[] = [
  {
    heading: textWelcome,
    description: 'Spake Audio is a production house based in Providence, Rhode Island offering producing, casting, recording, editing, proofing, mastering and consulting services for audiobooks and podcasts. The studio can also be linked to remote producers, directors and engineers for ADR/looping and gaming voiceovers. Get in touch to plan your next project:'
  },
  {
    heading: textRecording,
    description: 'We record your projects with care and professionalism in our comfortable, residential studio. During session breaks relax on our spacious balcony with views of the Providence skyline. We want to hear what you hope to accomplish:'
  },
  {
    heading: textEditing,
    description: 'Do you have audio recordings that need editing, proofing or mastering? We accept files in standard formats and make your work sound its absolute best. Our turnaround times are fast. Let us know a bit more about your project:'
  },
  {
    heading: textConsulting,
    description: 'Many voice professionals want to set up their own home recording studios. But where to start? We can guide you in such areas as gear selection and sound isolation techniques. Tell us what you have in mind:'
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
    description: 'We\'re looking forward to hearing from you. Complete and submit the following form to get in touch with Spake Audio. The asterisk (*) indicates a required field.'
  }
];

const errorMessages: { [key: string]: string } = {
  allRequiredFields: 'Please fill out all required fields.',
  formReferenceNull: 'Form reference is null.',
  invalidEmail: 'Invalid email address.',
  tryAgain: 'There was an error. Please try again.'
};

const svgPaths: { [key: string]: string } = {
  closingX: '125.66 76.67 90.42 41.43 125.66 6.19 120.71 1.24 85.47 36.48 50.23 1.24 45.28 6.19 80.52 41.43 45.28 76.66 50.23 81.61 85.47 46.38 120.71 81.62 125.66 76.67'
};

const stringValues = {
  companies,
  emailServiceId,
  emailTemplateId,
  emailPublicKey,
  errorMessages,
  headerNavRoutes,
  inputFieldNames,
  sections,
  svgPaths,
  textAbout,
  textContact,
  textContactSpakeAudio,
  textEmail,
  textFAQ,
  textMessage,
  textModal,
  textName,
  textPhone,
  textText,
  textTime,
  textWelcome,
  urlSendForm
};

export default stringValues;
