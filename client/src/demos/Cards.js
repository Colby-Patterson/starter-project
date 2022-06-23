import styled from "styled-components"
import { devices } from "../styles/sizes";

export const CardContainer = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: space-between;

@media ${devices.tablet} {
  flex-direction: row;
}
`;

export const Card = styled.div`
border: 1px solid black;
min-width: 200px;
height: 300px;
background: blue`
;