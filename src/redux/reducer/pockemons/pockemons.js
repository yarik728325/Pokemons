import { createSlice } from "@reduxjs/toolkit";
import filterHandler from "../../../utils/filterHandler";

export const pockemons = createSlice({
  name:"toolkit",
  initialState:{
    data:null,
    isLoading:false,
    count:null,
    onePockemon : null,
    countLoad:0,
    filters:[],
    tmpData:null,
    currentPage:1,
    isClosed:false
  },
  reducers:{
    startRequest (state) {
      state.isLoading = true
    },
    endRequest(state,{payload}){
      state.data = payload.results;
      state.tmpData = payload.results;
      state.count = Math.ceil(payload.count/10);
      state.isLoading = false;
    },
    changeOnePocke(state,{payload}){
      state.isClosed = true;
      state.onePockemon = payload;
    },
    moreLoadingPocke(state){
      state.isLoading = true;
    },
    closedPocke(state){
      state.isClosed = false;
    },
    successLoadingPocke(state, {payload}){
      const tmp = filterHandler(payload.pockeData,state.filters);
      state.data.push(...tmp);
      state.tmpData.push(...payload.pockeData);
      state.countLoad = payload.count;
      state.currentPage+=1;
      state.isLoading = false;
    },
    filterPockemon(state,{payload}){
      state.filters = payload;
      state.data = filterHandler(state.tmpData,payload);
    }
  }
})

export const { 
  startRequest,
  endRequest,
  changeOnePocke, 
  moreLoadingPocke,
  successLoadingPocke, 
  filterPockemon,
  closedPocke 
} = pockemons.actions


export default pockemons.reducer