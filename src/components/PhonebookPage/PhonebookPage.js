import Section from '../Section/Section';
import ContactForm from '../../components/ContactForm/ContactForm.js';
import ContactList from '../../components/ContactList/ContactList.js';
import FilterContact from '../../components/FilterContacts/FilterContacts.js';

const PhonebookPage = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <Section>
        <ContactForm />
        <div>
          <FilterContact />
          <ContactList />
        </div>
      </Section>
    </>
  );
};

export default PhonebookPage;
