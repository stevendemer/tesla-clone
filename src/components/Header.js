import React from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/CloseIcon';

export const Header = () => {
    return (
        <Wrapper>
            <a>
                <img style={{ width: '20vh', marginLeft: '10px'}} src="/images/tesla_logo.svg" alt="Logo" />
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
                <CustomMenu />
            </RightMenu>
            <BurgerNav>
                <li><a href="#">Existing inventory</a></li>
                <li><a href="#">Used inventory</a></li>
                <li><a href="#">Trade in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
            </BurgerNav>
        </Wrapper>
    );
}


const Wrapper = styled.div`
    display: flex;
    font-weight: bold;
    padding: 1em 0;
    font-size: 4vh;
    background: rgb(245,238,230);
    background: linear-gradient(90deg, rgba(245,238,230,1) 0%, rgba(236,233,228,1) 0%, rgba(210,215,218,1) 100%); 
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

    a {
        font-weight: 600;
        padding: 0 1rem;
        margin-left: 30px;
        text-transform: uppercase;
        flex-wrap: nowrap;
        font-size: 1.5vh;
    }

`

const RightMenu = styled.div`

    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        margin-right: 10px;
        margin-left: 30px;
        text-transform: uppercase;
        flex-wrap: nowrap;
        font-size: 1.5vh;
        margin-right: 30px;
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

    display: flex;
    position: fixed;
    font-size: 2vh;
    top:0;
    bottom:0;
    right:0;
    background-color: white;
    width: 300px;
    z-index: 10;
    list-style: none;
    padding: 20px;
    flex-direction: column;
    text-align: start;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }
    }

`

const CustomClosed = styled(CloseIcon)`

        



`