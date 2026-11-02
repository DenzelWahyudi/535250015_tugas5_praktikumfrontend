"use client";
import React from "react";
import BsNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default function Navbar() {
  return (
    <BsNavbar expand="lg" bg="white" className="border-bottom shadow-sm sticky-top py-2">
      <Container>
        <BsNavbar.Brand href="#beranda" className="d-flex align-items-center fw-bold text-dark fs-5">
          PT UNTAR
          <span className="badge bg-success ms-2 fs-6 fw-normal">Vendor MBG</span>
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="navbarMBG" />
        <BsNavbar.Collapse id="navbarMBG">
          <Nav className="ms-auto align-items-lg-center gap-lg-2">
            <Nav.Link href="#beranda" className="text-secondary">Beranda</Nav.Link>
            <Nav.Link href="#menu" className="text-secondary">Paket Menu</Nav.Link>
            <Nav.Link href="#standar-gizi" className="text-secondary">Standar Gizi</Nav.Link>
            <Nav.Link href="#kontak" className="text-secondary">Kontak</Nav.Link>
            <div className="ms-lg-2 my-2 my-lg-0">
              <Button href="#kontak" variant="success" size="sm" className="px-3 fw-semibold">
                Hubungi Dapur
              </Button>
            </div>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
