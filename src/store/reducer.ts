import { storeType } from "../types/storeType";
import { FETCH_DATA_SUCCESS,FETCH_DATA_REQUEST,FETCH_DATA_FAILURE,SET_NEXT_URL,SET_POKDEX,SET_PREV_URL, SET_POKEDATA, RESET_POKEDATA, SET_CURRENT_URL } from "./actions";

const initState:storeType = 
{
    data:[],
    loading: false,
    error:null,
    currentUrl:'https://pokeapi.co/api/v2/pokemon/',
    prevUrl:'',
    nextUrl:'',
    pokeDex:null,
    pokeData:[]
}

export const pokemonReducer = (state=initState,action:any):storeType=>{

    // eslint-disable-next-line default-case
    switch(action.type)
    {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading:true,
            };
        
        case FETCH_DATA_SUCCESS:
            return{
                ...state,
                data:action.payload,
                loading:false
            };

        case FETCH_DATA_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            };
        //additionnal cases
        case SET_NEXT_URL:
            return{
                ...state,
                nextUrl:action.payload
            };
        case SET_PREV_URL:
            return{
                ...state,
                prevUrl:action.payload
            };
        case SET_POKDEX:
            return {
                ...state,
                pokeDex:action.payload
            }
        case SET_POKEDATA:
            state = {
                ...state,
                pokeData : [...state.pokeData,action.payload]
            }
            state.pokeData.sort((a:any,b:any)=>a.id>b.id?1:-1);
            return state;

        case RESET_POKEDATA:
            return {
                ...state,
                pokeData:[]
            };
        case SET_CURRENT_URL:
            return{
                ...state,
                currentUrl:action.payload
            }
        
        default:return state;
    }
}