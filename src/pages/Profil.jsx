import Navbar from "../components/Navbar";

export default function Profil() {
  return (
    <div className="cp-root">
      <Navbar />
      <main className="cp-page-main">
        <h1 className="cp-page-title">Profil</h1>
        <p className="cp-page-desc">Profil Coming Soon ya</p>
      </main>
      <footer className="cp-footer">
        <div className="cp-footer-name">careerpath.ai</div>
        <div className="cp-footer-tagline">find your path in tech</div>
      </footer>
    </div>
  );
}
