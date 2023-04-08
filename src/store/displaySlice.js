import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
  name: "display",
  initialState: {
    selectedCountry: "",
    selectedLeague: "",
    leagueId: null,
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
    setLeagueId: (state, action) => {
      state.leagueId = action.payload;
    },
  },
});

export const {
  setSelectedCountry,
  setSelectedLeague,
  setDisplayComponent,
  setIsLeagueButtonCliked,
  setLeagueId,
} = displaySlice.actions;

export default displaySlice.reducer;
