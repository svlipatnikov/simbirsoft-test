import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <span className="footer__text">created by:</span>
        <span className="footer__autor">Lipatnikov Sergey</span>
      </div>
      <div className="footer__container">
        <span className="footer__text">e-mail:</span>
        <span className="footer__autor">sv.lipatnikov@gmail.com</span>
      </div>
      <div className="footer__container">
        <span className="footer__text">phone:</span>
        <span className="footer__autor">+7(960)373-73-40</span>
      </div>
    </footer>
  )
}
