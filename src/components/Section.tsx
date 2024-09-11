import { NavLink } from 'react-router-dom';

/* Interfaces */
import SectionProps from '../interfaces/SectionProps';

/* Constants */
import stringValues from '../constants/string-values'

function Section(props: SectionProps): JSX.Element {
  const thumbnails: string[] = Array(10).fill('thumbnail-image');

  function renderThumbnail(thumbnailImage: string, index: number): JSX.Element {
    return (
      <img key={`${index}${thumbnailImage}`} className={thumbnailImage} />
    );
  }

  return (
    <section>
      <div className="image-placeholder"></div>
      <h1>
        {props.heading[0].toUpperCase() + props.heading.slice(1)}
      </h1>
      <div>
        <span>{props.description}</span>
        {
          props.heading === stringValues.textWelcome ||
          props.heading === stringValues.textAbout ?
          <span>
            &nbsp;
            <NavLink
              to={`/${stringValues.textContact}`}>
              Contact the studio
            </NavLink>.
          </span> :
          null
        }
      </div>
      {
        props.heading === stringValues.textAbout ?
        <div>{thumbnails.map(renderThumbnail)}</div> :
        null
      }
    </section>
  );
}

export default Section;
