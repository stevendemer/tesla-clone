import React from 'react'
import styled from 'styled-components';
import { Section } from './Section';

export const Homepage = () => {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order online for a touchless delivery"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
                imageBg="tesla_model_s.jpg"
            />
            <Section
                title="Model X"
                description="Order online for a touchless delivery"
                leftBtnText="custom order"
                rightBtnText="Existing inventory"
                imageBg="tesla_model_x.jpg"
            />
            <Section
                title="Model Y"
                description="Order online for a touchless delivery"
                leftBtnText="custom order"
                rightBtnText="Existing inventory"
                imageBg="tesla_model_y.jpg"            
            />
        </Container>
    );
}


const Container = styled.div`
    position:absolute;
    background-repeat:no-repeat;
    background-size: cover;

`
