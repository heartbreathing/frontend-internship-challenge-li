import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="bg-slate-950 text-white py-4 absolute bottom-0 w-full">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold">Revam</h3>
          <p className="my-4">
            "Find products and their suppliers to profit on Revam!"
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Revam. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
