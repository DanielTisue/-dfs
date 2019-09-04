import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark bg-dark px-sm-5">
        <Link to='/'>
          <img src={logo} alt="logo" className="navbar-brand" />
          <h1 className="navbar-brand">D-T's</h1>
        </Link>
        <ul className="navbar-nav justify-content-center">
          <li className="nav-item mx-auto">
          <Link to="/" className="nav-link text-lowercase">
          products  
          </Link>
          </li>     
        </ul>
        <Link to='/cart' className="ml-auto">
          <ButtonContainer className="text-lowercase">
            <span className="mr-2">
              <i className="fas fa-cart-plus"></i>
            </span>
           cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
img.navbar-brand {
  width: 18%;
}
.nav-link {
  color:var(--mainWhite) !important;
  font-size:1.2rem;
  text-transform: capitalize;
}
`;
