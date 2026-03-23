import React from "react";
import { data, Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebookF, faInstagram, faPinterest, faTwitter} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-10 text-sm">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/">
              <h1 className="font-bold text-3xl">
                <span className="text-yellow-500 font-serif">N</span>K
              </h1>
            </Link>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, aspernatur?</p>
            <p className="mt-2">123 Lorem ipsum dolor sit amet.</p>
            <p>Email: example@example.com</p>
            <p>Phone: +91 9265727408</p>

          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Customer Services</h3>
            <ul className="space-y-1">
                <li>Contact Support</li>
                <li>FAQs</li>
                <li>Shipping & Retirns</li>
                <li>Order Tracking</li>
                <li>Size Guide</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Social media</h3>
            <div className="flex gap-4 mt-2 text-xl">
                    
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faPinterest} />

                    
            </div>
          </div>
          <div>
             <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
             <p>Subcribe for updates</p>
             <form className="mt-4 flex">
                <input type="email" placeholder="Your Email " className="flex-1 p-2 rounded-l bg-gray-800 border-gray-700 text-white"></input>
                <button className="bg-yellow-600 px-4 rounded-r text-white ">Subcribe</button>
             </form>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p>&copy;{new Date().getFullYear()} NK. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
