const getSources = state => Object.values(state.sources);
const getSource = state => id => state.sources[id];

export {
  getSources,
  getSource,
};
