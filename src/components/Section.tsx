import { NavLink } from 'react-router-dom';

/* Interfaces */
import Contact from './Contact';
import SectionProps from '../interfaces/SectionProps';

/* Constants */
import stringValues from '../constants/string-values'

/* Helpers */
import formatText from '../helpers/format-text';

function Section(props: SectionProps): JSX.Element {
  const {
    textAbout,
    textContact,
    textFAQ,
    textContactSpakeAudio
  } = stringValues;
  const { makeTitleCase } = formatText;

  const thumbnails: string[] = Array(10).fill('thumbnail-image');
  const isAbout: boolean = props.heading === textAbout;
  const isContact: boolean = props.heading === textContact;
  const isFAQ: boolean = props.heading === textFAQ;

  function renderHeadingText(heading: string): string {
    return isFAQ ? heading.toUpperCase() : makeTitleCase(heading);
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

  function renderContactLink(isTextLink: boolean): JSX.Element {
    return (
      <NavLink
        to={`/${textContact}`}
        className={isTextLink ? 'section-text-link' : 'section-large-nav-link'}>
        {textContactSpakeAudio}
      </NavLink>
    );
  }

  function renderInlineContactLink(): JSX.Element {
    return (
      <span>
        <span>&nbsp;</span>{renderContactLink(true)}<span>.</span>
      </span>
    );
  }

  return (
    <section>
      <div className="image-placeholder"></div>
      <div className="section-content">
        <h1>
          {renderHeadingText(props.heading)}
        </h1>
        <div>
          <span>{props.description}</span>
          {isAbout ? renderInlineContactLink() : null}
        </div>
        {isAbout ? renderSectionThumbnails() : null}
        {!isAbout && !isContact ? renderContactLink(false) : null}
        {isContact ? <Contact /> : null}
      </div>
    </section>
  );
}

export default Section;
