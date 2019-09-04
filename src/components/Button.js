import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1rem;
background: transparent;
border:0.05rem solid var(--mainWhite);
color:var(--mainWhite);
border-radius: 0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.8s ease-in-out;
&:hover {
  background: var(--mainYellow);
  border: 0.05rem solid var(--mainYellow);;
}
&:focus {
  outline: none;
}
`;

export const ProductButtonContainer = styled.button `
text-transform:capitalize;
font-size:1rem;
background: transparent;
border:0.05rem solid var(--lightBlue);
color: var(--lightBlue);
border-radius: 0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.8s ease-in-out;
&:hover {
  color:var(--mainWhite);
  background: var(--lightBlue);
}
&:focus {
  outline: none;
}
`;

export const CartButtonContainer = styled.button`
text-transform:capitalize;
font-size:1rem;
background: transparent;
border:0.05rem solid var(--lightBlue);
border-color: 
${props => props.cart ? "#99aab5" : "var(--mainYellow)"};
color:
${prop => prop.cart ? "#99aab5" : "var(--mainYellow)"};
border-radius: 0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.8s ease-in-out;
&:hover {
  color:var(--mainWhite);
  background: ${prop => prop.cart ? "#99aab5" : "var(--mainYellow)"};
}
&:focus {
  outline: none;
}
`;