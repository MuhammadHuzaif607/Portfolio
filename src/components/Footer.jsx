import React from 'react';

const Footer = () => {
  return (
    <footer className="section-spacing pb-0">
      <div className="container">
        <div className="section-spacing bg-charcoal p-4 p-md-5 box-shadow border-radius-top">
          <div className="row g-2 align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start">
              © 2024 FlaTheme. All rights reserved.
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <a href="#" className="link-hover-line">
                Scroll to Top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
