import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
  name: "display",
  initialState: {
    selectedCountry: "",
    selectedLeague: "",
    displayComponent: "COUNTRIES",
    isLeagueButtonCliked: false,
  },
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    setSelectedLeague: (state, action) => {
      state.selectedLeague = action.payload;
    },
    setDisplayComponent: (state, action) => {
      state.displayComponent = action.payload;
    },
    setIsLeagueButtonCliked: (state) => {
      state.isLeagueButtonCliked = !state.isLeagueButtonCliked;
    },
  },
});

export const {
  setSelectedCountry,
  setSelectedLeague,
  setDisplayComponent,
  setIsLeagueButtonCliked,
} = displaySlice.actions;
export default displaySlice.reducer;
