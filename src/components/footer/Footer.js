import React from 'react'
import user from '../../img/user.svg'
import phone from '../../img/phone.svg'
import mail from '../../img/mail.svg'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info-block">
        <div className="footer__item">
          <img className="footer__item__icon" src={user} />
          <span className="footer__item__text">Lipatnikov Sergey</span>
        </div>

        <a
          className="footer__item"
          href="mailto:sv.lipatnikov@mail.com"
          title="Написать"
        >
          <img className="footer__item__icon" src={mail} />
          <span className="footer__item__text footer__item__link">
            sv.lipatnikov@gmail.com
          </span>
        </a>

        <a className="footer__item" href="tel:+79603737340" title="Позвонить">
          <img className="footer__item__icon" src={phone} />
          <span className="footer__item__text footer__item__link">
            +7(960)373-73-40
          </span>
        </a>
      </div>
    </footer>
  )
}
