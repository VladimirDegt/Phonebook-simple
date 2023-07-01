import { Formik } from 'formik';
import {DebounceInput} from 'react-debounce-input';
import { useDispatch } from 'react-redux';
import { StyledForm } from './Filter.styled';
import { filterContact } from 'redux/contacts/filterReducer';

function Filter() {
  const dispatch = useDispatch();

  return (
    <Formik initialValues={{ vidibleContacts: '' }}>
      {({ values, setFieldValue }) => (
        <StyledForm>
          <label htmlFor="findcontact">Find contacts by name</label>
          <DebounceInput
            debounceTimeout={300}
            id="findcontact"
            name="vidibleContacts"
            type="text"
            onChange={({ target }) => {
              dispatch(filterContact(target.value));
              setFieldValue('vidibleContacts', target.value);
            }}
            value={values.vidibleContacts}
          />
        </StyledForm>
      )}
    </Formik>
  );
}

export default Filter;
