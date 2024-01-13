const GET_TIMER = (ms) => new Date(ms).toISOString().substring(11, 19);

const ADD_ENTRIES = (object, newEntries) => ({
  ...object,
  ...newEntries,
});

export { GET_TIMER, ADD_ENTRIES };
