import { NavLink } from 'react-router-dom';

/* Interfaces */
import SectionProps from '../interfaces/SectionProps';

/* Constants */
import stringValues from '../constants/string-values'

function Section(props: SectionProps): JSX.Element {
  const { textAbout, textContact, textFAQ, textContactSpakeAudio, textEmail, formInputs } = stringValues;
  const thumbnails: string[] = Array(10).fill('thumbnail-image');

  function makeTitleCase(text: string): string {
    return text[0].toUpperCase() + text.slice(1);
  }

  function renderHeadingText(heading: string): string {
    return heading === textFAQ ? heading.toUpperCase() : makeTitleCase(heading);
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

  function renderFormInput(inputName: string): JSX.Element {
    const inputId: string = `formInput${inputName}`;
    return (
      <div key={`formInputWrapper${inputName}`} className="form-input-wrapper">
        <label htmlFor={inputId} className="form-label">
          {`${makeTitleCase(inputName)}*`}
        </label>
        <input
          className="form-input"
          maxLength={256}
          name={inputName}
          data-name={inputName}
          placeholder=""
          type={inputName === textEmail ? textEmail : 'text'}
          id={inputId}
          required
        />
      </div>
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
            {formInputs.map(renderFormInput)}
            <button type="submit" className="form-submit-button">Submit</button>
          </form> :
          null
        }
      </div>
    </section>
  );
}

export default Section;
