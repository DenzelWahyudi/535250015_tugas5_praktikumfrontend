"use client";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

interface DailyMenu {
  day: string;
  badge: string;
  mainDish: string;
  sideDish: string;
  vegetable: string;
  fruit: string;
  drink: string;
}

const weeklyMenu: DailyMenu[] = [
  {
    day: "Senin",
    badge: "Hari 1",
    mainDish: "Ayam Goreng Lengkuas",
    sideDish: "Tahu & Tempe Bacem",
    vegetable: "Tumis Buncis Jagung Manis",
    fruit: "Pisang Barangan",
    drink: "Susu UHT",
  },
  {
    day: "Selasa",
    badge: "Hari 2",
    mainDish: "Semur Telur & Daging Sapi",
    sideDish: "Perkedel Kentang",
    vegetable: "Sup Wortel & Kembang Kol",
    fruit: "Semangka Potong",
    drink: "Susu UHT",
  },
  {
    day: "Rabu",
    badge: "Hari 3",
    mainDish: "Ikan Fillet Crispy Asam Manis",
    sideDish: "Orek Tempe Manis",
    vegetable: "Sayur Bening Bayam Jagung",
    fruit: "Jeruk Manis",
    drink: "Susu UHT",
  },
  {
    day: "Kamis",
    badge: "Hari 4",
    mainDish: "Ayam Panggang Bumbu Kecap",
    sideDish: "Tahu Goreng Gurih",
    vegetable: "Capcay Sayur Segar",
    fruit: "Melon Potong",
    drink: "Susu UHT",
  },
  {
    day: "Jumat",
    badge: "Hari 5",
    mainDish: "Rolade Daging Sapi",
    sideDish: "Telur Dadar Sayur",
    vegetable: "Tumis Labu Siam",
    fruit: "Pisang Mas",
    drink: "Susu UHT",
  },
];

const nutritionStandards = [
  {
    title: "Karbohidrat",
    desc: "Porsi nasi terukur (100–150 gram) sebagai sumber kalori utama untuk belajar dan beraktivitas.",
  },
  {
    title: "Protein Hewani & Nabati",
    desc: "Kombinasi lauk utama (ayam, telur, ikan, daging) dan tahu/tempe untuk membantu tumbuh kembang anak.",
  },
  {
    title: "Sayuran Kaya Serat",
    desc: "Sayuran segar yang dimasak setiap hari tanpa pewarna dan pengawet buatan.",
  },
  {
    title: "Buah & Susu",
    desc: "Tambahan buah potong manis dan 1 kotak susu kemasan UHT untuk melengkapi kebutuhan gizi harian.",
  },
];

export default function MenuSection() {
  return (
    <section className="py-5 bg-light" id="menu">
      <Container>
        <div className="text-center mb-4">
          <h2 className="fw-bold fs-3 text-dark mb-1">Paket Menu Harian MBG</h2>
          <p className="text-muted small">
            Jadwal menu bergizi seimbang untuk siswa sekolah dari hari Senin sampai Jumat.
          </p>
        </div>

        <Row className="g-3 mb-5 justify-content-center">
          {weeklyMenu.map((item, idx) => (
            <Col key={idx} xs={12} sm={6} lg={4} xl>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Header className="bg-white border-bottom py-2 d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-dark">{item.day}</span>
                  <Badge bg="success" className="fw-normal">{item.badge}</Badge>
                </Card.Header>
                <Card.Body className="p-3">
                  <div className="small mb-2">
                    <span className="text-muted d-block">Makanan Pokok:</span>
                    <span className="fw-medium">Nasi Putih Pulen</span>
                  </div>
                  <div className="small mb-2">
                    <span className="text-muted d-block">Lauk Utama:</span>
                    <span className="fw-medium text-dark">{item.mainDish}</span>
                  </div>
                  <div className="small mb-2">
                    <span className="text-muted d-block">Lauk Pendamping:</span>
                    <span className="fw-medium text-dark">{item.sideDish}</span>
                  </div>
                  <div className="small mb-2">
                    <span className="text-muted d-block">Sayur:</span>
                    <span className="fw-medium text-dark">{item.vegetable}</span>
                  </div>
                  <div className="small mb-2">
                    <span className="text-muted d-block">Buah:</span>
                    <span className="fw-medium text-dark">{item.fruit}</span>
                  </div>
                  <div className="small">
                    <span className="text-muted d-block">Minuman:</span>
                    <span className="badge bg-light text-secondary border">{item.drink}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="pt-3" id="standar-gizi">
          <div className="text-center mb-4">
            <h3 className="fw-bold fs-4 text-dark mb-1">Standar Nutrisi & Higiene</h3>
            <p className="text-muted small">
              Komposisi makanan disusun sesuai panduan gizi seimbang untuk memenuhi kebutuhan kalori anak usia sekolah.
            </p>
          </div>

          <Row className="g-3 mb-4">
            {nutritionStandards.map((item, idx) => (
              <Col key={idx} xs={12} md={6} lg={3}>
                <Card className="h-100 border p-3 bg-white shadow-sm">
                  <h6 className="fw-bold text-success mb-2">{item.title}</h6>
                  <p className="text-secondary small mb-0">{item.desc}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}
