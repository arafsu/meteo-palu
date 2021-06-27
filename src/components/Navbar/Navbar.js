import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink    
} from './Navbar.elements'


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

useEffect(() => {
    showButton()
}, [])

window.addEventListener('resize', showButton);

    return (
      <>
        <IconContext.Provider value = {{ color: '#fff'}}>
         <Nav>
             <NavbarContainer>
                <NavLogo to='/' onClick={closeMobileMenu}>
                    <NavIcon />
                    STAMET PALU
                </NavLogo>
                <MobileIcon onClick={handleClick}
                    >{click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>Beranda</NavLinks>    
                    </NavItem>   
                    <NavItem>
                        <NavLinks to='/meteorologi'>Meteorologi</NavLinks>    
                    </NavItem> 
                    <NavItem>
                        <NavLinks to='/pelayanan'>E-Pelayanan</NavLinks>    
                    </NavItem> 
                    <NavItem>
                        <NavLinks to='/pengaduan'>E-Pengaduan</NavLinks>    
                    </NavItem>
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to="/daftar">
                                <Button primary>DAFTAR</Button>
                            </NavBtnLink>
                        ) : (
                            <NavBtnLink to="/daftar">
                                <Button fontBig primary>
                                    DAFTAR
                                </Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
                </NavMenu>
             </NavbarContainer>
         </Nav>
        </IconContext.Provider>    
      </>
    )
}

export default Navbar
