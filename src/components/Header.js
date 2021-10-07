import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@mui/icons-material/Clear';

export const Header = () => {

    const [burgerStatus, setStatus] = useState(false); 

    const handleClick = () => {
        console.log("Burger should have closed by now !");
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
    background: black;
    justify-content: space-between;
    background-blend-mode: multiply;
    opacity: 0.8;
    overflow: auto;
    z-index: 1;
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
        color: white;
        align-items: center;
        padding: 0.8vh 1vh;
        margin-left: 30px;
        text-transform: uppercase;
        flex-wrap: nowrap;
        font-size: 1.5vh;        
        transition: border-color 0.7s ease-out;
        width: 4vw;
        border-radius: 300px;
        border-color: black;
        border: 2px solid black;
        opacity: 0.6;

        &:hover {
            border-color: white;
            color: white;
            background: black;
            opacity: 0.8;
        }
    }
`

const RightMenu = styled.div`

    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    padding-right: 2vh;

    a {
        font-weight: 600;
        margin-right: 10px;
        color: white;
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

    position: absolute;
    font-size: 2vh;
    top:0;
    bottom:0;
    right:0;
    background-color: inherit;
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

    li {
        padding: 15px 0;
        height: 5vh
        padding-left: 1em;
        margin-top: 15px;
        padding-bottom: 3px;
        display: flex;
        justify-content: center;
        border-bottom: 2px solid white;
        border-radius: 0 10px 0 0;
        margin-bottom: 4vh;

        a {
            font-weight: 800;
            color: white;
        }
    }
`

const CustomClose = styled(ClearIcon)`

    cursor: pointer;

`


const CloseWrapper = styled.div`

    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
    margin-right: 20px;
`