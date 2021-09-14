import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

import s from './FilterContacts.module.css';

const FilterContact = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e =>
    dispatch(contactsActions.filterContacts(e.target.value));

  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input
          placeholder="type name"
          className={s.input}
          type="text"
          name="name"
          title="Search contacts"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default FilterContact;
