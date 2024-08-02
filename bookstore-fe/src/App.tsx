import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Navbar} from "./containers/Navbar";
import {Footer} from "./containers/Footer";
import {Outlet} from "react-router-dom";
import {FormLoginAndRegister} from "./containers/FormLoginAndRegister";

const StatusFormLoginAndRegisterContext = React.createContext<boolean>(false);
const FormLoginAndRegisterDispatch = React.createContext<null | React.Dispatch<boolean>>(null);
const FormLoginAndRegisterReducer = (state: boolean, action: boolean) => {
    switch (action){
        case true:
            return action;
        case false:
            return action;
        default:
            return state;
    }
}

export const useFormLoginAndRegisterDispatch = () => {
    const context = React.useContext(FormLoginAndRegisterDispatch);
    if(context === null){
        throw new Error("useFormLoginAndRegisterDispatch must be used within a FormLoginAndRegisterProvider");
    }
    return context;
}

function App() {

    const [statusFormLoginAndRegister, setStatusFormLoginAndRegister] = React.useReducer(FormLoginAndRegisterReducer, false);

    return (
        <div className="App">
            <StatusFormLoginAndRegisterContext.Provider value={statusFormLoginAndRegister}>
                <FormLoginAndRegisterDispatch.Provider value={setStatusFormLoginAndRegister}>
                    <Navbar />
                    <Outlet />
                    <Footer />
                    {
                        statusFormLoginAndRegister && <FormLoginAndRegister />
                    }
                </FormLoginAndRegisterDispatch.Provider>
            </StatusFormLoginAndRegisterContext.Provider>
        </div>
    );
}

export default App;
