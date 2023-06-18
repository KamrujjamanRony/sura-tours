import logo from "../../assets/img/logo-green-2x.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logo} alt="" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="" className="footer__link">Company</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">Contact us</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">Careers</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">Privacy policy</a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">Terms</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
            <p className="footer__copyright">
            Built by <a href="#" className="footer__link">Md. Kamrujjaman</a> for his personal skill development. Copyright &copy; by Md. Kamrujjaman. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Md. Kamrujjaman, is of course highly appreciated!
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
