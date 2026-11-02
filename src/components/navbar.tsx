"use client";

import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";

export default function AppNavbar() {
  return (
    <Navbar expand="lg" bg="white" className="border-bottom shadow-sm sticky-top py-2">
      <Container>
        <Navbar.Brand href="#beranda" className="d-flex align-items-center fw-bold text-dark fs-5">
          PT UNTAR
          <Badge bg="success" className="ms-2 fs-6 fw-normal">
            Vendor MBG
          </Badge>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarMBG" />
        <Navbar.Collapse id="navbarMBG">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link href="#beranda" className="text-secondary">
              Beranda
            </Nav.Link>
            <Nav.Link href="#menu" className="text-secondary">
              Paket Menu
            </Nav.Link>
            <Nav.Link href="#standar-gizi" className="text-secondary">
              Standar Gizi
            </Nav.Link>
            <Nav.Link href="#kontak" className="text-secondary">
              Kontak
            </Nav.Link>
            <div className="ms-lg-2 my-2 my-lg-0">
              <Button href="#kontak" variant="success" size="sm" className="px-3 fw-semibold">
                Hubungi Dapur
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
