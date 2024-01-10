import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./reducer";

export const store = configureStore({
    reducer: {
        pokemon:pokemonReducer
    }
})
