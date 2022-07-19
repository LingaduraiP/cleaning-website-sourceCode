import React from "react";
import "./Footer.css";
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
const Footer = () => {
    return (
        <div className='footer'>
            <hr />
            <motion.h2
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.2 }}
            >
                Follow us
            </motion.h2>
            <div className='icons'>
                <a href='https://www.instagram.com/m_r_porukki/'>
                    <FiInstagram />
                </a>

                <a href='https://github.com/LingaduraiP'>
                    {" "}
                    <FiGithub />
                </a>
                <a href='https://twitter.com/Lingadurai333'>
                    {" "}
                    <FiTwitter />
                </a>
                <a href='https://www.linkedin.com/in/lingadurai-p-971b53218/'>
                    {" "}
                    <FiLinkedin />
                </a>
            </div>
        </div>
    );
};

export default Footer;
