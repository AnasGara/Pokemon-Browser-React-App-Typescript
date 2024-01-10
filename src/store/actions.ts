export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const SET_NEXT_URL = 'SET_NEXT_URL';
export const SET_PREV_URL = 'SET_PREV_URL';
export const SET_POKDEX = 'SET_POKDEX';
export const SET_POKEDATA = 'SET_POKEDATA';
export const RESET_POKEDATA = 'RESET_POKEDATA';
export const SET_CURRENT_URL = 'SET_CURRENT_URL';


//en cours de fetching (loading state)
export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST,
  });
  
//fetched succefully!
  export const fetchDataSuccess = (data:any) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
  });
  
//error while fetching data
  export const fetchDataFailure = (error:any) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
  });


export const setNextUrl = (nextUrl:string)=>({
  type:SET_NEXT_URL,
  payload:nextUrl
})

export const setPrevtUrl = (prevUrl:string)=>({
  type:SET_PREV_URL,
  payload:prevUrl
})

export const setPokDex = (pokeDex:any)=>({
  type:SET_POKDEX,
  payload:pokeDex
})
  
export const setPokeData = (pokeData:any)=>({
  type:SET_POKEDATA,
  payload:pokeData
})

export const resetPokeData = ()=>({
  type:RESET_POKEDATA
})

export const setCurrentUrl = (currUrl:string)=>({
  type:SET_CURRENT_URL,
  payload:currUrl
})