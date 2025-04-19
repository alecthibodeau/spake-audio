/* Interfaces */
import PatternProps from '../interfaces/PatternProps';

/* Styles */
import '../styles/pattern.css';

function Pattern(props: PatternProps): JSX.Element {
  const fourRows: number = 4;
  const eightRows: number = 8;
  const rowsCount: number = props.isBreakpointXs ? fourRows : eightRows;

  function renderPatternUnit(patternUnitName: string, index: number): JSX.Element {
    return (
      <div
        key={`${patternUnitName}-${index}`}
        className={`${patternUnitName} top-left`}>
      </div>
    );
  }

  function renderPatternUnitRow(patternUnitRowName: string, index: number): JSX.Element {
    const unitsCount: number = Math.floor(props.viewportWidth/24);
    return (
      <div key={`${patternUnitRowName}-${index}`} className={patternUnitRowName}>
        {Array(unitsCount).fill('pattern-unit').map(renderPatternUnit)}
      </div>
    );
  }

  return (
    <div className={`pattern-blue`}>
      {Array(rowsCount).fill('pattern-unit-row').map(renderPatternUnitRow)}
    </div>
  );
}

export default Pattern;
