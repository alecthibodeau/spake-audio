/* Interfaces */
import SectionProps from '../interfaces/SectionProps';

const textWelcome: string = 'welcome';
const textRecording: string = 'recording';
const textEditing: string = 'editing';
const textFAQ: string = 'faq';
const textConsulting: string = 'consulting';
const textAbout: string = 'about';
const textContact: string = 'contact';
const textContactSpakeAudio: string = 'Contact Spake Audio';
const textModal: string = 'Thanks! Someone from Spake Audio will get back to you soon.';
const headerNavRoutes = [textRecording, textEditing, textConsulting, textAbout, textFAQ];

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
  headerNavRoutes,
  sections,
  textModal,
  textWelcome,
  textAbout,
  textContact,
  textContactSpakeAudio,
  textFAQ
};

export default stringValues;
