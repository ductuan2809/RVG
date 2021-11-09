import Context from "./Context";
import {useContext} from 'react';

export const useLoginState = () => {
    const[state,dispatch]=useContext(Context)
    return [state,dispatch]
}