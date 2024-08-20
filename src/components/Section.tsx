/* Interfaces */
import SectionProps from '../interfaces/SectionProps';

function Section(props: SectionProps): JSX.Element {
  return (
    <section id={props.id}>
      <h1>{props.heading[0].toUpperCase() + props.heading.slice(1)}</h1>
      <div>{props.description}</div>
    </section>
  );
}

export default Section;
