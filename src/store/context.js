import { createContext, useState } from "react";

const MyContext = createContext()
function ContextProvider({ children }) {
    const [text, setText] = useState('');
    const [checked, setchecked] = useState(true);
    const [error, setError] = useState(false);
    const handleInputChange = (e) => {
        const input = e.target.value;
        // Allow only numbers
        if (/^\d*$/.test(input)) {
            setText(input);
        }
        if (input.length > 10) {
            setError(true)
        }
        else if (error) {
            setError(false)
        }
    };
    const handleChange = (event) => {
        setchecked(event.target.checked);
    };

    const handleClear = () => {
        setText('');
        setError(false)
    };
    const ContextValue = {
        text, setText,
        checked, setchecked,
        error, setError,
        handleInputChange,
        handleChange,
        handleClear

    }
    return (
        <MyContext.Provider value={ContextValue}>
            {children}
        </MyContext.Provider>
    )
}
export {MyContext, ContextProvider}