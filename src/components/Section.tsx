import { NavLink } from 'react-router-dom';

/* Interfaces */
import SectionProps from '../interfaces/SectionProps';

/* Constants */
import stringValues from '../constants/string-values'

function Section(props: SectionProps): JSX.Element {
  const { textAbout, textContact, textFAQ, textContactSpakeAudio } = stringValues;
  const thumbnails: string[] = Array(10).fill('thumbnail-image');

  function renderHeadingText(headingText: string): string {
    if (headingText === textFAQ) {
      headingText = headingText.toUpperCase();
    } else {
      headingText = headingText[0].toUpperCase() + headingText.slice(1);
    }
    return headingText;
  }

  function renderThumbnail(thumbnailImage: string, index: number): JSX.Element {
    return (
      <img key={`${index}${thumbnailImage}`} className={thumbnailImage} />
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

  return (
    <section>
      <div className="image-placeholder"></div>
      <div className="section-content">
        <h1>
          {renderHeadingText(props.heading)}
        </h1>
        <div>
          <span>{props.description}</span>
          {
            props.heading === textAbout ?
            <span>
              <span>&nbsp;</span>{renderContactLink(true)}<span>.</span>
            </span> :
            null
          }
        </div>
        {
          props.heading === textAbout ?
          <div className="section-thumbnails">
            {thumbnails.map(renderThumbnail)}
          </div> :
          null
        }
        {
          props.heading !== textAbout && props.heading !== textContact ?
          <div className="section-large-nav-link-wrapper">
            {renderContactLink(false)}
          </div> :
          null
        }
        {
          props.heading === textContact ?
          <form>
            <label htmlFor="formInputName" className="form-label">Name*</label>
            <input
              className="form-input"
              maxLength={256}
              name="name"
              data-name="Name"
              placeholder=""
              type="text"
              id="formInputName"
              required
            />
            <label
              htmlFor="formInputEmail"
              className="form-label"
            >
              Email*
            </label>
            <input
              className="form-input"
              maxLength={256}
              name="email"
              data-name="Email"
              placeholder=""
              type="text"
              id="formInputEmail"
              required
            />
            <label
              htmlFor="formInputMessage"
              className="form-label"
            >
              Message*
            </label>
            <input
              className="form-input"
              maxLength={256}
              name="email"
              data-name="Message"
              placeholder=""
              type="text"
              id="formInputMessage"
              required
            />
            <button type="submit" className="form-submit-button">Submit</button>
          </form> :
          null
        }
      </div>
    </section>
  );
}

export default Section;
