export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
//export const getName = state => state.contacts.items.name;

export const getContactsList = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  // const name = getName(state);

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
