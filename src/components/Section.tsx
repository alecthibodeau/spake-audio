import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

/* Components */
import InfoModal from './InfoModal';
import Loader from './Loader';
import Pattern from './Pattern';

/* Interfaces */
import Contact from './Contact';
import SectionProps from '../interfaces/SectionProps';

/* Constants */
import stringValues from '../constants/string-values'

/* Helpers */
import formatText from '../helpers/format-text';

/* Styles */
import '../styles/section.css';

function Section(props: SectionProps): JSX.Element {
  const {
    textAbout,
    textContact,
    textFAQ,
    textContactSpakeAudio
  } = stringValues;
  const { formatDisplayedRouteName } = formatText;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isBreakpointXs, setIsBreakpointXs] = useState<boolean>(true);
  const [isModalDisplayed, setIsModalDisplayed] = useState<boolean>(false);
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

  const breakpointSm: number = 576;
  const thumbnails: string[] = Array(10).fill('thumbnail-image');
  const isAbout: boolean = props.heading === textAbout;
  const isContact: boolean = props.heading === textContact;
  const isHeadingUpperCase: boolean = props.heading === textFAQ;
  const resize: string = 'resize';

  useEffect(() => {
    window.addEventListener(resize, getViewportWidth);
    setIsBreakpointXs(viewportWidth < breakpointSm);
    return(() => window.removeEventListener(resize, getViewportWidth));
  }, [viewportWidth]);

  function getViewportWidth(): void {
    setViewportWidth(window.innerWidth);
  }

  function handleSuccessfulSubmission(): void {
    setIsLoading(false);
    setIsModalDisplayed(true);
  }

  function renderThumbnail(thumbnailImage: string, index: number): JSX.Element {
    return (
      <img key={`${index}${thumbnailImage}`} className={thumbnailImage} />
    );
  }

  function renderSectionThumbnails(): JSX.Element {
    return (
      <div className="section-thumbnails">
        {thumbnails.map(renderThumbnail)}
      </div>
    );
  }

  function renderContactLink(): JSX.Element {
    return (
      <NavLink
        to={`/${textContact}`}
        className="large-nav-link">
        {textContactSpakeAudio}
      </NavLink>
    );
  }

  return (
    <section>
      {isLoading ? <Loader /> : null }
      {
        isModalDisplayed ?
          <InfoModal
            isModalDisplayed={isModalDisplayed}
            onClickCloseButton={() => setIsModalDisplayed(false)}
          /> :
        null
      }
      <Pattern
        isBreakpointXs={isBreakpointXs}
        viewportWidth={viewportWidth}
      />
      <div className="section-content">
        <h1>
          {formatDisplayedRouteName(props.heading, isHeadingUpperCase)}
        </h1>
        <div className="section-description">
          <span>{props.description}&hellip;</span>
        </div>
        {!isContact ? renderContactLink() : null}
        {isAbout ? renderSectionThumbnails() : null}
        {isContact ?
          <Contact
            onSubmitForm={() => setIsLoading(true)}
            onSuccessfulSubmission={handleSuccessfulSubmission}
          /> :
        null}
      </div>
    </section>
  );
}

export default Section;
