export default {
  hasCharacters(state) {
    return !!state.characters;
  },
  hasNextButton(state) {
    return state.totalCount / 10;
  },

  filteredList(state) {
    return state.characters.filter((character) => {
      return character.name.toLowerCase().includes(state.keyword.toLowerCase());
    });
  },
  forceCloseOfMenu(state) {
    if (state.isMenuOpen) return (state.isMenuOpen = false);
  },
};
