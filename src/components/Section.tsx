import { NavLink } from 'react-router-dom';

/* Interfaces */
import SectionProps from '../interfaces/SectionProps';

/* Constants */
import stringValues from '../constants/string-values'

function Section(props: SectionProps): JSX.Element {
  const { textAbout, textContact, textContactSpakeAudio } = stringValues;
  const thumbnails: string[] = Array(10).fill('thumbnail-image');

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
          {props.heading[0].toUpperCase() + props.heading.slice(1)}
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
          <div>{thumbnails.map(renderThumbnail)}</div> :
          null
        }
        {
          props.heading !== textAbout && props.heading !== textContact ?
          <div className="section-large-nav-link-wrapper">
            {renderContactLink(false)}
          </div> :
          null
        }
      </div>
    </section>
  );
}

export default Section;
