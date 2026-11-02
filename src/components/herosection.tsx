"use client";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

interface SlideItem {
  badge: string;
  title: string;
  description: string;
  imageUrl: string;
  btnLabel: string;
  btnTarget: string;
}

const slides: SlideItem[] = [
  {
    badge: "Program Makan Bergizi Gratis",
    title: "Katering Sehat & Bergizi - PT UNTAR",
    description: "Melayani penyediaan paket makan siang higienis dengan standar gizi seimbang untuk sekolah.",
    imageUrl: "/images/banner_01.jpg",
    btnLabel: "Lihat Paket Menu",
    btnTarget: "#menu",
  },
  {
    badge: "Menu Seimbang",
    title: "Pilihan Menu Lengkap & Bervariasi",
    description: "Setiap paket terdiri dari nasi pulen, lauk hewani, lauk nabati, sayuran segar, buah, dan susu.",
    imageUrl: "/images/banner_02.jpg",
    btnLabel: "Standar Porsi",
    btnTarget: "#standar-gizi",
  },
  {
    badge: "Dapur Bersih & Tepat Waktu",
    title: "Distribusi Terjadwal ke Sekolah",
    description: "Diproses setiap pagi di dapur higienis dan diantar langsung sebelum jam makan siang sekolah.",
    imageUrl: "/images/banner_03.jpg",
    btnLabel: "Hubungi Kami",
    btnTarget: "#kontak",
  },
];

export default function HeroSection() {
  return (
    <section id="beranda">
      <Carousel fade interval={4500}>
        {slides.map((item, index) => (
          <Carousel.Item key={index}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.6)), url(${item.imageUrl})`,
              }}
            />
            <Carousel.Caption className="text-start pb-4" style={{ maxWidth: "680px", left: "8%", right: "8%" }}>
              <span className="badge bg-success mb-2 px-3 py-2">{item.badge}</span>
              <h1 className="fw-bold fs-2 text-white mb-2">{item.title}</h1>
              <p className="fs-6 text-light mb-3">{item.description}</p>
              <Button href={item.btnTarget} variant="light" size="sm" className="fw-semibold px-3">
                {item.btnLabel} &rarr;
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
