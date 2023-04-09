import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
  name: "display",
  initialState: {
    selectedCountry: "",
    selectedLeague: "",
    selectedDate: new Date(),
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
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const {
  setSelectedCountry,
  setSelectedLeague,
  setDisplayComponent,
  setIsLeagueButtonCliked,
  setLeagueId,
  setSelectedDate,
} = displaySlice.actions;

export default displaySlice.reducer;
