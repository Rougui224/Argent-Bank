export function Feature({ imgSrc, alt, title, paragraph }) {
  return (
    <article className="feature-item">
      <img src={imgSrc} alt={alt} className="feature-item-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p className="feature-item-paragraph"> {paragraph} </p>
    </article>
  );
}
