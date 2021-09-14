import Section from './components/Section/Section';
import Form from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import FilterContact from './components/FilterContacts/FilterContacts';

const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <Section>
        <Form />
      </Section>
      <Section title="Contacts">
        <FilterContact />
        <ContactList />
      </Section>
    </>
  );
};

export default App;
