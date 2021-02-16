import { createContext, useContext} from 'react';

const AppContext = createContext();

let sharedState = {};

//Set context info
export function AppWrapper({children}) {

    return (
        <AppContext.Provider value={sharedState}>
           {children}
        </AppContext.Provider>
    );

}

//Get the context info 
export function useAppContext() {
    return useContext(AppContext)
}
