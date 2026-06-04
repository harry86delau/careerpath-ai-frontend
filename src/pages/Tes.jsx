import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import imgCarrie from "../assets/landing/carrie.png";

const howItWorksSteps = [
  {
    num: "1",
    title: "jawab pertanyaan",
    desc: "pilih sesuai dengan keadaan dan minat kamu!",
  },
  {
    num: "2",
    title: "analisis AI",
    desc: "AI kami menganalisis jawabanmu untuk mencocokkan dengan karir teknologi yang paling sesuai",
  },
  {
    num: "3",
    title: "lihat hasilnya",
    desc: "dapatkan rekomendasi karir digital untukmu",
  },
];

export default function Tes() {
  return (
    <div className="cp-root">
      <Navbar />

      <main className="cp-tes-main">
        <section className="cp-tes-hero">
          <div className="cp-tes-hero-content">
            <h1 className="cp-tes-hero-title">Temukan Karir Digitalmu!</h1>
            <p className="cp-tes-hero-desc">
              Coba asesmen dengan teknologi AI untuk menemukan karir digital yang paling cocok denganmu
            </p>
            <Link to="/tes/questions" className="cp-btn cp-tes-btn-start">
              coba tes
            </Link>
          </div>

          <div className="cp-tes-carrie">
            <img src={imgCarrie} alt="Carrie si ubur-ubur" />
          </div>
        </section>

        <section className="cp-tes-how">
          <h2 className="cp-tes-how-title">Cara Kerja Tes AI</h2>
          <div className="cp-tes-how-cards">
            {howItWorksSteps.map((step) => (
              <div className="cp-tes-how-card" key={step.num}>
                <div className="cp-tes-how-num">{step.num}</div>
                <p className="cp-tes-how-card-title">{step.title}</p>
                <p className="cp-tes-how-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="cp-footer">
        <div className="cp-footer-name">careerpath.ai</div>
        <div className="cp-footer-tagline">find your path in tech</div>
      </footer>
    </div>
  );
}
