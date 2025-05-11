import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer-container mt-2 pb-5">
      <div className="footer-item instagram">
        <a href="https://www.instagram.com/primoamore_performingart/">
          <small>instagram @primoamore_performingart</small>
        </a>
      </div>
      <div className="footer-item email">
        <a href="mailto:primoamoreperformingart@gmail.com">
          <small>
            laboratorio e produzioni primoamoreperformingart@gmail.com
          </small>
        </a>
      </div>
      <div className="footer-item facebook">
        <a href="https://www.facebook.com/primoamoreperformingarts?locale=it_IT">
          <small>facebook primoamoreperformingarts</small>
        </a>
      </div>
    </div>
  );
};

export default Footer;
