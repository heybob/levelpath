import React from "react";
import { createContext } from "react";
import { initialState } from "./initalState";
import { WikiState } from "../shared/types";

export const  WikiContext = createContext<{ 
    state: WikiState; dispatch: React.Dispatch<any>;}>(
        {state: initialState, dispatch: () => null});