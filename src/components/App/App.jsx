import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

import { useSelector } from 'react-redux';

function App() {
  const contacts = useSelector(state => state.contacts.contacts);

  const checkContacts = contacts.length;

  return (
    <>
      <Section>
        <ContactForm />
      </Section>
      <Section>
        <>
          <ContactsFilter />
          {checkContacts ? (
            <ContactsList />
          ) : (
            <Notification text="You don't have contacts in the phone book. Please add new contacts." />
          )}
        </>
      </Section>
    </>
  );
}

export default App;
