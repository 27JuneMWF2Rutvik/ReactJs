import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
const Headerfile = () => {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="dark">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id="navbarColor02">
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              {content}
              <MDBNavbarItem className="active">
                {/* <MDBNavbarLink aria-current="page" to='/'>
                  Home
                </MDBNavbarLink> */}
                <Link className='nav-link' to='/home'>Home</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='nav-link' to='/features'>Features</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link className='nav-link' to='/pricing'>Pricing</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link className='nav-link' to='/about'>About</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link className='nav-link' to='/examples'>Example</Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Headerfile;
