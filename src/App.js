import React , {useRef, useState, useEffect} from 'react';
import './App.css';
import Home from './Components/Home';
import { HomePage2 } from './Components/HomePage2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PhoneNumber from './Components/PhoneNumber';
import Head from './Components/Head';
import { HomePage3 } from './Components/HomePage3';
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 760,
      lg: 1200,
      xl: 1920,
    },
  },
});
function App() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
 useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header className="App-header">
        <Head/>
        </header>
        <div className='page' ref={elementRef}>
          <Home />
        </div>

        <div className='page'>
          <HomePage2 />
        </div>
        <div className='page-2'>
         <HomePage3/>
         
        </div>
           </ThemeProvider>
       {<PhoneNumber isVisible={!isVisible}/>}
    </div>
  );
}

export default App;
