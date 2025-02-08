const Footer = ({ footerShape = false }) => {
  return (
    <footer>
      {footerShape && (
        <img
          src="images/misc/scratches-3.webp"
          className="w-20 me-5 abs bottom-0 abs-center"
          alt
        />
      )}
      <div className="container-fluid">
        <div className="px-2">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="d-menu-1 wow" data-wow-delay=".3s">
                <ul>
                  <li>
                    <a href="https://www.instagram.com/dj_lubaba">Instagram</a>
                  </li>
                  <li>
                    <a href="https://x.com/dj_lubaba">X</a>
                  </li>
                  {/* <li>
                    <a href="https://linktr.ee/natekodi">Linktree</a>
                  </li> */}
                </ul>
                <p className="no-bottom">
                  All Rights Reserved
                  {/* <br />
                  Template By Designesia */}
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <a href="/contact">
                <h2
                  className="fs-84 fw-800 pe-3 shuffle wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  Let's Talk
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
