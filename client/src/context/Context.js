import { createContext, useEffect, useReducer } from "react"
import Reducer from "./Reducer";

const INITIAL_STAGE = {
    user: JSON.parse(localStorage.getItem("user"))||null,
    isFetching: false,
    error: false,
}

export const Context = createContext(INITIAL_STAGE);

export const ContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(Reducer, INITIAL_STAGE);
    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])
    return(
        <Context.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </Context.Provider>
    )
}