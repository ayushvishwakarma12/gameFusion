import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncCreators } from "./creatorsUtils";

const initialState = {
  creators: [],
  creatorsStatus: STATUS.IDLE,
};

const creatorsSlice = createSlice({
  name: "creators",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncCreators.pending, (state) => {
      state.creatorsStatus = STATUS.LOADING;
    });

    builder.addCase(fetchAsyncCreators.fulfilled, (state, action) => {
      state.creators = action.payload;
      state.creatorsStatus = STATUS.SUCCEEDED;
    });

    builder.addCase(fetchAsyncCreators.rejected, (state) => {
      state.creatorsStatus = STATUS.FAILED;
    });
  },
  reducers: {},
});

export default creatorsSlice.reducer;
