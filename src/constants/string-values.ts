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
const textPrivacyPolicy: string = 'privacy policy';
const textText: string = 'text';
const textTime: string = 'time';

const emailServiceId: string = 'service_motlos2';
const emailTemplateId: string = 'template_twmeleg';
const emailPublicKey: string = 'rv9Ct6p5U0kLM8po5';
const inputFieldNames: string[] = ['name', 'email', 'phone', 'message'];
const urlSendForm: string = 'https://api.emailjs.com/api/v1.0/email/send-form';

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
    description: 'Spake Audio is a production house based in Providence, Rhode Island that offers producing, casting, recording, editing, proofing and mastering services for audiobooks, podcasts, narrated articles and other spoken media. Our fully-equipped, sound-isolated recording studio can also link to remote producers, directors and engineers for looping/dubbing with Automated Dialogue Replacement (ADR) and gaming voiceovers. We also offer consultation services. Our clients include entities of various sizes: companies, schools, organizations, individual narrators and more. Get in touch to plan your next project'
  },
  {
    heading: textRecording,
    description: 'We record your projects with care and professionalism in our comfortable studio that\'s adjacent to downtown Providence and close to amenities like coffee shops, a grocery store and an electric vehicle charging facility. We\'re near Providence station, which offers easy travel by train to and from Boston and New York City. During session breaks relax in our lounge area, in our kitchen or on our spacious balcony with expansive views of the city\'s skyline. Have an idea for a recording project? We want to hear about it'
  },
  {
    heading: textEditing,
    description: 'Do you have existing audio that need editing, proofing or mastering? We have deep experience in these areas, and we accept digital files in various formats for smooth audio processing. We want your work to sound its absolute best, and our turnaround times are fast. Tell us about your project'
  },
  {
    heading: textConsulting,
    description: 'Many voice professionals want to set up their own recording studios, but don\'t know where to start. We can guide you in such areas as gear selection, microphone placement and sound isolation techniques. Write to arrange a consultation'
  },
  {
    heading: textAbout,
    description: 'Spake Audio is operated by musician and recording engineer Joel Thibodeau. We\'ve produced many projects over the years. Below are some of our favorites'
  },
  {
    heading: textFAQ,
    description: 'FAQ section content'
  },
  {
    heading: textPrivacyPolicy,
    description: 'Privacy Policy content'
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
