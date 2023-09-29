import React from 'react';
import { FaGithub } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <FaGithub />
        <AiFillMail />
        <a target='_blank' rel='noreferrer' href='https://es.react.dev'>< FaReact /></a>
    </footer>
  )
}

export default Footer
