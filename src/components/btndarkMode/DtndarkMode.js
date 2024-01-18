import { useEffect, useRef } from 'react'
import {useLocalStorage} from './../../utils/useLocalStorage'
import detectDarkMode from '../../utils/detectDarkMode'

import sun from './sun.svg'
import moon from './moon.svg'

import './style.css'


const BtnDarkMode = () => {

    // const [dakMode, setDakMode] = useState('Light');
    const [dakMode, setDakMode] = useLocalStorage('dakMode', detectDarkMode())

    

    const btnRef = useRef(null);

    useEffect(() => {
      

        if (dakMode === 'dark') {
            document.body.classList.add('dark')
            btnRef.current.classList.add('dark-mode-btn--active')
        } else { 
            document.body.classList.remove('dark')
            btnRef.current.classList.remove('dark-mode-btn--active')
        }
        
    }, [dakMode])

    useEffect(() => {
            window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
            const newColorScheme = event.matches ? "dark" : "light";
            setDakMode(newColorScheme);

            
        });
    }, [setDakMode])
 
    const tooggleDarkMode = () => {
        setDakMode((cV) => {
            return cV === 'Light' ? 'dark' : 'Light'
            
        })
    }
    return (
      
            <button ref={btnRef} className="dark-mode-btn" onClick={tooggleDarkMode}>
                <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
                <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
            </button>
    
        
    );
  }
  
  export default BtnDarkMode;

