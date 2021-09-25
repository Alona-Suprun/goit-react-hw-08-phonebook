import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/slice-filter';
import * as contactsSelectors from '../../redux/contacts/contacts-selectors';

import s from './FilterContacts.module.css';

const FilterContact = () => {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  //const value = useSelector(getFilter);

  //const onChange = e =>
  //  dispatch(contactsActions.filterContacts(e.target.value));

  return (
    <>
      <h2>Contacts</h2>
      <label className={s.label}>
        Find contacts by name
        <input
          filter={filter}
          placeholder="type name"
          className={s.input}
          type="text"
          name="name"
          title="Search contacts"
          //value={value}
          onChange={e => dispatch(filterContact(e.target.value))}
        />
      </label>
    </>
  );
};

export default FilterContact;
