import React from 'react'
import { useReducer} from "react";
import { wikiReducer } from "../components/App/reducer";
import { initialState } from "./initalState";
import { WikiContext } from "./WikiContext";

type Props = {
    children: React.ReactNode
  }

export function WikiDataProvider({children}: Props) {

    const [state, dispatch] = useReducer(wikiReducer, initialState);

    return (
        <WikiContext.Provider value={{state, dispatch}}>{children}</WikiContext.Provider>
    );

}