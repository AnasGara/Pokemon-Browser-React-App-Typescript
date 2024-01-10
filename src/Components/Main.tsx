import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
//redux setup library
import { useDispatch,useSelector } from "react-redux";
import { storeType } from "../types/storeType";
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess, resetPokeData, setCurrentUrl, setNextUrl, setPokeData, setPrevtUrl } from "./../store/actions";


const Main=()=>{
    const {currentUrl,nextUrl,prevUrl,pokeDex,loading,error,data,pokeData}:storeType = useSelector((state:any)=>state.pokemon);
    const dispatch = useDispatch();

    const pokeFun=async()=>{
        dispatch(fetchDataRequest());
        try {
                const res=await axios.get(currentUrl);
                dispatch(fetchDataSuccess(res.data));
                dispatch(setNextUrl(res.data.next));
                dispatch(setPrevtUrl(res.data.previous));

                getPokemon(res.data.results)
            } catch (error:any) {
                dispatch(fetchDataFailure(error));
            }
    }
    const getPokemon=async(res:any)=>{

       res.map(async(item:any)=>{
          const result=await axios.get(item.url)
          dispatch(setPokeData(result.data));
       })   
    }
    useEffect(()=>{
        pokeFun();
    },[currentUrl])
    return(
        <>
            <div className="container">
                <div className="left-content">
                    {error?<p>error</p>:null}
                    <Card />
                    
                    <div className="btn-group">
                        {  prevUrl && <button onClick={()=>{
                            dispatch(resetPokeData());
                            dispatch(setCurrentUrl(prevUrl));
                        }}>Previous</button>}

                        { nextUrl && <button onClick={()=>{
                            dispatch(resetPokeData());
                            dispatch(setCurrentUrl(nextUrl))
                        }}>Next</button>}

                    </div>
                </div>
                <div className="right-content">
                   <Pokeinfo />
                </div>
            </div>
        </>
    )
}
export default Main;