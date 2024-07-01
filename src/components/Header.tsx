/* Constants */
import images from '../constants/images';

function Header(): JSX.Element {
  return (
    <header>
      <img
        className="spake-logo"
        src={images.header.spakeLogo}
        alt="Spake Audio logo" />
    </ header>
  );
}

export default Header;
