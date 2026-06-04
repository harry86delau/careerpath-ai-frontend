import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import { jobCards } from "../data/jobCards";

export default function Eksplor() {
  return (
    <div className="cp-root">
      <Navbar />

      <div className="cp-eksplor-page">
        <div className="cp-eksplor-hero-gradient" aria-hidden="true" />

        <main className="cp-eksplor-main">
          <section className="cp-eksplor-hero">
            <h1 className="cp-eksplor-title">Eksplor Parade Digital!</h1>
            <p className="cp-eksplor-desc">
              Dunia digital ini sangat luas! Cari tahu apa saja yang ada di dunia karir digital.
            </p>
          </section>

          <section className="cp-eksplor-grid">
            {jobCards.map((job, i) => (
              <Link
                key={job.slug}
                to={`/detail/${job.slug}`}
                className="cp-eksplor-card-link"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <JobCard
                  image={job.img}
                  name={job.name}
                  className="cp-eksplor-card"
                />
              </Link>
            ))}
          </section>
        </main>
      </div>

      <footer className="cp-footer">
        <div className="cp-footer-name">careerpath.ai</div>
        <div className="cp-footer-tagline">find your path in tech</div>
      </footer>
    </div>
  );
}
