import "./Header.css";

const Header = ({
  titulo = "My Store Tech",
  subtitulo = "Hardware del bueno",
}) => {
  return (
    <div className="Header">
      <a href="http://" target="/">
        <h1>{titulo}</h1>
      </a>
      <h2>{subtitulo}</h2>
    </div>
  );
};

export default Header;
