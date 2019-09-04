import styled from 'styled-components';

export const DetailButton1Container = styled.button`
text-transform:capitalize;
font-size:1rem;
background: transparent;
border:0.05rem solid black;
color:black;
border-radius: 0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.8s ease-in-out;
&:hover {
  color:var(--lightBlue);
  border: 0.05rem solid var(--lightBlue);
}
&:focus {
  outline: none;
}
`;

export const DetailButton2Container = styled.button`
text-transform:capitalize;
font-size:1rem;
background: transparent;
border:0.05rem solid green;
color:green;
border-radius: 0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.8s ease-in-out;
&:hover {
  color:var(--lightBlue);
  border: 0.05rem solid var(--lightBlue);
}
&:focus {
  outline: none;
}
`;