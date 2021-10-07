import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

export const Section = ({ title, description, leftBtnText, rightBtnText, imageBg }) => {
    return (
        <>
        <Wrapper backgroundImg={imageBg}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            </Fade>
            <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                </ButtonGroup>
            </Fade>
            </Wrapper>
        </>
    );
}


const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between; // vertical allignment
    background-image: ${props => `url("/images/${props.backgroundImg}")`};
    padding-bottom: 20vh;
    background-position: center;
    align-items: center; // horizontal allignment
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    opacity: 0.8;
    margin-bottom: 4vh;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 100px;
    margin-top: 20px;
    justify-content: center;
    align-items: baseline;
    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 2vh;        
    }
    @media (max-width: 370px) {
        flex-direction: column;
        margin-top: 2vh;
    }

`

const LeftButton = styled.button`
    background-color: rgba(23, 26, 32, 0.8);
    height: 34px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.9;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;
    margin-left: 20px;
    transition-property: font-size, width;
    transition-duration: 0.4s;
    font-style: bolder;
    transition-delay: 0.15s;
    &:hover {
        font-size: 18px;
        width: 290px;
    }
    @media (max-width: 370px) {
        margin: 1vh 0.4vh;
        width: 200px;
        &:hover {
            font-size: 16px;
            width: 220px;
        }
    }

`
    

const RightButton = styled(LeftButton)`

    background:white;
    color: black;
    opacity: 0.7;

`

const DownArrow = styled.img`

`