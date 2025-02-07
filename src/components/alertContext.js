import React, {useState, useContext} from 'react';

export const AlertContext = React.createContext();
// export const AlertToggleContext = React.createContext();

export const useAlert = () => {
    return useContext(AlertContext);
}

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(false);

    const toggleAlert = () => setAlert(prev => !prev);

    return (
        <AlertContext.Provider value={{
            visible: alert,
            toggleAlert
            }}>
                { children }
        </AlertContext.Provider>
    )
}

// export const useAlertToggle = () => {
//     return useContext(AlertToggleContext);
// }

// export const AlertProvider = ({ children }) => {
//     const [alert, setAlert] = useState(false);

//     const toggleAlert = () => setAlert(prev => !prev);

//     return (
//         <AlertContext.Provider value={alert}>
//             <AlertToggleContext.Provider value={toggleAlert}>
//                 { children }
//             </AlertToggleContext.Provider>
//         </AlertContext.Provider>
//     )
// }