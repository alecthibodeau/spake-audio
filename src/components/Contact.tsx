/* Components */
import FormInput from './FormInput';

/* Constants */
import stringValues from '../constants/string-values'

function Contact(): JSX.Element {

  function renderFormInput(formInputName: string): JSX.Element {
    return <FormInput key={formInputName} inputName={formInputName} />;
  }

  return (
    <form>
      {stringValues.formInputs.map(renderFormInput)}
      <div className="form-submit-button-wrapper">
        <button type="submit" className="form-submit-button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Contact;
