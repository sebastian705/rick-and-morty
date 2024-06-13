import { create } from "zustand";

export const useStore = create((set) => ({
  characters: [],
  info: [],
  setCharacters: (url) => fetch(url).then(response => response.json())
    .then(data => {
      set({ characters: data.results });
      set({ info: data.info });
    }),
  search: "",
  setSearch: (newSearch) => set({ search: newSearch }),
}));