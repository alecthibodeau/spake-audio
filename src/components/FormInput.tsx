/* Constants */
import stringValues from '../constants/string-values'

/* Helpers */
import formatText from '../helpers/format-text';

function FormInput(props: { inputName: string }): JSX.Element {
  const { textEmail, textPhone, textMessage } = stringValues;
  const { makeTitleCase } = formatText;

  const inputName: string = props.inputName;
  const inputId: string = `formInput${makeTitleCase(inputName)}`;
  const isRequired: boolean = inputName !== textPhone;

  return (
    <div
      key={`formInputWrapper${makeTitleCase(inputName)}`}
      className="form-input-wrapper"
    >
      <label htmlFor={inputId} className="form-label">
        <span>{makeTitleCase(inputName)}</span>
        {inputName === textPhone ? null : <span className="required-star">*</span>}
      </label>
      {
        inputName === textMessage ?
        <textarea
          id={inputId}
          className={`form-input form-input-${inputName}`}
          name={inputName}
          rows={5}
          required
        /> :
        <input
          id={inputId}
          className={`form-input form-input-${inputName}`}
          name={inputName}
          type={inputName === textEmail ? textEmail : 'text'}
          maxLength={256}
          required={isRequired}
        />
      }
    </div>
  );
}

export default FormInput;
