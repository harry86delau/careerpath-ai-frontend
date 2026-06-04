export default function JobCard({ image, name, className = "", style }) {
  return (
    <div className={`cp-job-card ${className}`.trim()} style={style}>
      <img src={image} alt={name} />
      <div className="cp-job-card-name">{name}</div>
    </div>
  );
}
