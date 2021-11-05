// import styled from 'styled-components'
// import {useState, useEffect} from 'react';

// const Wrapper = styled.div`
//   display:flex;
//   justify-content: center;
//   align-items: center;
// `;
// const ToggleThemeBlock = styled.div`
//   width:80px;
//   height:40px;
//   border: 2px, solid, #000;
//   color: --colors-text;
//   backgroundColor: --colors-bg;
//   margin-top:10px;
// `;

// const ModeSwitcher = styled.div`
//   color: var(--colors-text);
//   font-size: var(--fs-sm);
//   cursor: pointer;
//   text-transform: capitalize;
// `;

// export const Header = () => {
//   const [theme, setTheme] = useState('light')

//   const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  
//   useEffect(() => {
//       document.body.setAttribute('data-theme', theme)
//   }, theme)
  
//   return(
//       <Wrapper>
//         <ToggleThemeBlock>
//           <ModeSwitcher onClick={toggleTheme}>
//               {theme === 'light' ? (
//                 'light'
//               ) : (
//                 'dark'
//               )}{' '}
//               <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
//           </ModeSwitcher>
//         </ToggleThemeBlock>
//       </Wrapper>
//   );
// } 

// export default Header;