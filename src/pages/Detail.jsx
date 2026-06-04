import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { jobCards } from "../data/jobCards";

export default function Detail() {
  const { slug } = useParams();

  // Match by slug field (add slug to jobCards data — see note below)
  const job = jobCards.find((j) => j.slug === slug);

  if (!job) {
    return (
      <div className="cp-root">
        <Navbar />
        <main className="cp-detail-not-found">
          <p>Karir tidak ditemukan 😢</p>
          <Link to="/eksplor" className="cp-btn">
            ← kembali ke eksplor
          </Link>
        </main>
        <footer className="cp-footer">
          <div className="cp-footer-name">careerpath.ai</div>
          <div className="cp-footer-tagline">find your path in tech</div>
        </footer>
      </div>
    );
  }

  return (
    <div className="cp-root">
      <Navbar />

      <div className="cp-detail-page">
        <div className="cp-detail-hero-gradient" aria-hidden="true" />

        <main className="cp-detail-main">
          {/* Back link */}
          <Link to="/eksplor" className="cp-detail-back">
            ← eksplor
          </Link>

          {/* Hero: title + info + image */}
          <section className="cp-detail-hero">
            <div className="cp-detail-info">
              <h1 className="cp-detail-title">{job.name}</h1>

              <div className="cp-detail-body">
                {job.description && (
                  <p className="cp-detail-desc">{job.description}</p>
                )}

                {job.skills && job.skills.length > 0 && (
                  <div className="cp-detail-row">
                    <span className="cp-detail-label">Skill</span>
                    <div className="cp-detail-tags">
                      {job.skills.map((s) => (
                        <span key={s} className="cp-detail-tag cp-detail-tag-blue">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {job.traits && job.traits.length > 0 && (
                  <div className="cp-detail-row">
                    <span className="cp-detail-label">Karakter Pekerja</span>
                    <div className="cp-detail-tags">
                      {job.traits.map((t) => (
                        <span key={t} className="cp-detail-tag cp-detail-tag-green">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {job.companions && job.companions.length > 0 && (
                  <div className="cp-detail-row">
                    <span className="cp-detail-label">Rekan Akrab</span>
                    <p className="cp-detail-companions">
                      {job.companions.join(", ")}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="cp-detail-img-wrap">
              <img src={job.img} alt={job.name} className="cp-detail-img" />
            </div>
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
