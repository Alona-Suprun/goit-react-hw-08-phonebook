import Section from '../Section/Section';
import Form from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import FilterContact from '../FilterContacts/FilterContacts';

const PhonebookPage = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <Section>
        <Form />
        <div>
          <FilterContact />
          <ContactList />
        </div>
      </Section>
    </>
  );
};

export default PhonebookPage;
