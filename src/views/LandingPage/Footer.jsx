import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div>
      <footer className='new_footer_area bg_color'>
        <div className='new_footer_top'>
          <div className='footer_bg'>
            <div className='footer_bg_one'></div>
            <div className='footer_bg_two'></div>
          </div>
        </div>
        <div className='footer_bottom'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-sm-7'>
                <p className='mb-0 f_400'>
                  © brilliantbookstore Inc.. 2023 All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
