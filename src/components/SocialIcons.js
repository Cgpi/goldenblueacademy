import "../styles/socialIcons.css";

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a
        href="https://www.facebook.com/goldenblueacademy/"
        target="_blank"
        rel="noreferrer"
        className="facebook"
      >
        <i className="fab fa-facebook-f"></i>
      </a>

      <a
        href="https://www.instagram.com/goldenblueacademy/"
        target="_blank"
        rel="noreferrer"
        className="instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>

      <a
        href="https://www.youtube.com/channel/UCpnS3DEAZnaFntcJqW_OF6w"
        target="_blank"
        rel="noreferrer"
        className="youtube"
      >
        <i className="fab fa-youtube"></i>
      </a>

      <a
        href="https://www.linkedin.com/company/the-golden-blue-academy/"
        target="_blank"
        rel="noreferrer"
        className="linkedin"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>

      <a
        href="https://wa.me/9850030794"
        target="_blank"
        rel="noreferrer"
        className="whatsapp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}
