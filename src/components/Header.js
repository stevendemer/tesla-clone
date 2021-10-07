import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@mui/icons-material/Clear';

export const Header = () => {

    const [burgerStatus, setStatus] = useState(false); 

    const handleClick = () => {
        setStatus(false);
    }


    // Conditional rendering
    const renderedBurger = () => {
        if (burgerStatus) {
            return (
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={handleClick} />
                </CloseWrapper>
                <li><a href="#">Existing inventory</a></li>
                <li><a href="#">Used inventory</a></li>
                <li><a href="#">Trade in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
            </BurgerNav>);
        }
    }


    return (
        <Wrapper>
            <a>
                <img style={{ width: '20vh', marginLeft: '10px', alignItems: 'baseline', display:'flex'}} src="/images/tesla_logo.svg" alt="Logo" />
            </a>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Model 3</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                {burgerStatus ? " " : <CustomMenu onClick={() => setStatus(true)} />}
            </RightMenu>
            {renderedBurger()}
        </Wrapper>
    );
}


const Wrapper = styled.div`
    display: flex;
    font-weight: bold;
    padding: 1em 0;
    font-size: 4vh;
    background: transparent;
    justify-content: space-between;
    background-blend-mode: multiply;
    opacity: 0.8;
    overflow: auto;
    z-index: 1;
    position: fixed;
    width: 100vw;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    padding-right: 2vh;

    @media(max-width: 768px) {
        display: none;
    }

    @media(max-width: 820px) {
        display: none;
    }

    a {
        font-weight: 600;
        color: black;
        align-items: center;
        padding: 0.8vh 1vh;
        margin-left: 30px;
        text-transform: uppercase;
        flex-wrap: nowrap;
        font-size: 1.5vh;        
        transition: border-color 0.6s ease-in;
        width: 4vw;
        border-radius: 300px;
        border-color: white;
        border: 2px solid transparent;
        opacity: 0.6;

        &:hover {
            border-color: black;
            opacity: 0.8;
        }
    }
`

const RightMenu = styled.div`

    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    padding-right: 10vh;

    a {
        font-weight: 800;
        margin-right: 10px;
        color: black;
        margin-left: 30px;
        text-transform: uppercase;
        flex-wrap: nowrap;
        font-size: 1.5vh;
        margin-right: 30px;
        opacity: 0.6;
        transition: opacity 0.5s ease-in;

        &:hover {
            opacity: 0.9;
        }
    }

`


const CustomMenu = styled(MenuIcon)`

    cursor: pointer;

    @media (max-width: 370px) {
        width: 170px;
        height: 50vh;
    }

`

const BurgerNav = styled.div`

    position: fixed;
    font-size: 2vh;
    top:0;
    bottom:0;
    right:0;
    background: white;
    /* background-color: inherit; */
    border-radius: 55px;
    width: 15vw;
    z-index: 10;
    list-style: none;
    padding: 20px;
    flex-direction: column;
    text-align: start;
    padding-top: 0;
    margin: 0 10px 20px;
    color: white;
    align-items: baseline;
    transform: ${props => props.show ? "translateX(0)" : "translateX(100)"} ;
    margin-top: 8vh;
    animation-name: mymove;
    animation-duration: 1s;
    height: fit-content;

    @keyframes mymove {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }


    li {
        padding: 15px 0;
        height: 5vh
        padding-left: 1em;
        margin-top: 15px;
        padding-bottom: 3px;
        display: flex;
        justify-content: center;
        border-bottom: 4px solid black;
        border-radius: 0 10px 0 0;
        margin-bottom: 4vh;
        padding-top: 5vh;

        a {
            font-weight: bolder;
            color: black;
        }
    }
`

const CustomClose = styled(ClearIcon)`

    cursor: pointer;
    width: 10vh;
    color: black;
    animation-name: myclose;
    animation-duration: 1s;

    @keyframes myclose {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

`


const CloseWrapper = styled.div`

    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
    margin-right: 20px;
`