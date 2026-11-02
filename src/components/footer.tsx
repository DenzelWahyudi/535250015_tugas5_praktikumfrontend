"use client";
import React from "react";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <footer className="border-top py-4 bg-white text-center text-secondary small" id="kontak">
      <Container>
        <p className="mb-1 text-dark fw-semibold">PT UNTAR &bull; Vendor Makan Bergizi Gratis (MBG)</p>
        <p className="mb-1 text-muted">Jl. Letjen S. Parman No. 1, Grogol Petamburan, Jakarta Barat</p>
        <p className="mb-0 text-muted">&copy; {new Date().getFullYear()} PT UNTAR - Praktikum Pemrograman Front-End</p>
      </Container>
    </footer>
  );
}
