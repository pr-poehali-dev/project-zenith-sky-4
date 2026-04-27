import { Facebook, Instagram, Twitter, Github, Mail, MapPin, Phone } from "lucide-react"

const data = {
  facebookLink: "https://facebook.com/digitalhub",
  instaLink: "https://instagram.com/digitalhub",
  twitterLink: "https://twitter.com/digitalhub",
  githubLink: "https://github.com/digitalhub",
  services: {
    web: "/web-razrabotka",
    mobile: "/mobilnye-prilozheniya",
    design: "/ui-ux-dizajn",
    marketing: "/digital-marketing",
  },
  about: {
    story: "/o-nas",
    team: "/komanda",
    portfolio: "/portfolio",
    careers: "/vakansii",
  },
  help: {
    faqs: "/faq",
    support: "/podderzhka",
    blog: "/blog",
  },
  contact: {
    email: "hello@digitalhub.ru",
    phone: "+7 (495) 123-45-67",
    address: "Москва, Россия",
  },
  company: {
    name: "ДиджиталХаб",
    description:
      "Создаём цифровые продукты, которые помогают бизнесу расти. Веб-разработка, мобильные приложения и дизайн под ключ.",
  },
}

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: data.facebookLink },
  { icon: Instagram, label: "Instagram", href: data.instaLink },
  { icon: Twitter, label: "Twitter", href: data.twitterLink },
  { icon: Github, label: "GitHub", href: data.githubLink },
]

const aboutLinks = [
  { text: "О нас", href: data.about.story },
  { text: "Команда", href: data.about.team },
  { text: "Портфолио", href: data.about.portfolio },
  { text: "Вакансии", href: data.about.careers },
]

const serviceLinks = [
  { text: "Веб-разработка", href: data.services.web },
  { text: "Мобильные приложения", href: data.services.mobile },
  { text: "UI/UX Дизайн", href: data.services.design },
  { text: "Digital-маркетинг", href: data.services.marketing },
]

const helpfulLinks = [
  { text: "FAQ", href: data.help.faqs },
  { text: "Поддержка", href: data.help.support },
  { text: "Блог", href: data.help.blog, hasIndicator: true },
]

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
]

export default function Footer() {
  return (
    <>
      <style>{`
        .ai-footer {
          background-color: #073642;
          position: relative;
          overflow: hidden;
        }

        .ai-footer::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #d33682;
          filter: blur(140px);
          height: 60%;
          width: 50%;
          position: absolute;
          top: 20%;
          left: -25%;
          z-index: 0;
        }

        .ai-footer::after {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.2;
          background: #cb4b16;
          filter: blur(120px);
          height: 40%;
          width: 40%;
          position: absolute;
          bottom: 10%;
          right: -20%;
          z-index: 0;
        }

        .footer-container {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 30px 30px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          margin-bottom: 60px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
        }

        .brand-icon {
          width: 50px;
          height: 50px;
          background: #d33682;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: #002b36;
        }

        .brand-name {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 28px;
          color: #ffffff;
          text-transform: uppercase;
        }

        .brand-description {
          font-family: "Montserrat";
          font-size: 16px;
          line-height: 1.8;
          color: #aaa;
          margin-bottom: 40px;
          max-width: 400px;
        }

        .social-links {
          display: flex;
          gap: 20px;
        }

        .social-link {
          width: 45px;
          height: 45px;
          background: rgba(211, 54, 130, 0.1);
          border: 1px solid #333;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d33682;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #d33682;
          color: #002b36;
          transform: translateY(-2px);
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .link-column h3 {
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #d33682;
          text-transform: uppercase;
          margin: 0 0 25px;
          letter-spacing: 1px;
        }

        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-item {
          margin-bottom: 15px;
        }

        .link-item a {
          font-family: "Montserrat";
          font-size: 14px;
          color: #aaa;
          text-decoration: none;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .link-item a:hover {
          color: #ffffff;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-icon {
          width: 20px;
          height: 20px;
          color: #d33682;
          flex-shrink: 0;
        }

        .live-indicator {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .pulse-dot {
          position: relative;
          width: 8px;
          height: 8px;
        }

        .pulse-dot::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #d33682;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .pulse-dot::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #d33682;
          border-radius: 50%;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(211, 54, 130, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(211, 54, 130, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(211, 54, 130, 0);
          }
        }

        .footer-bottom {
          border-top: 1px solid #333;
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright {
          font-family: "Montserrat";
          font-size: 14px;
          color: #aaa;
        }

        .copyright a {
          color: #d33682;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .copyright a:hover {
          color: #ffffff;
        }

        .footer-legal {
          display: flex;
          gap: 30px;
        }

        .footer-legal a {
          font-family: "Montserrat";
          font-size: 14px;
          color: #aaa;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-legal a:hover {
          color: #ffffff;
        }

        @media screen and (max-width: 1199px) {
          .footer-container {
            padding: 60px 20px 20px;
          }

          .footer-grid {
            gap: 60px;
          }

          .footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }

        @media screen and (max-width: 767px) {
          .footer-container {
            padding: 40px 16px 16px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .brand-name {
            font-size: 24px;
          }

          .brand-description {
            font-size: 14px;
          }

          .social-links {
            gap: 15px;
          }

          .social-link {
            width: 40px;
            height: 40px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .footer-legal {
            gap: 20px;
          }
        }
      `}</style>

      <footer className="ai-footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand-logo">
                <div className="brand-icon">DH</div>
                <span className="brand-name">{data.company.name}</span>
              </div>
              <p className="brand-description">{data.company.description}</p>
              <div className="social-links">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} className="social-link" aria-label={label}>
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <div className="link-column">
                <h3>О компании</h3>
                <ul className="link-list">
                  {aboutLinks.map(({ text, href }) => (
                    <li key={text} className="link-item">
                      <a href={href}>{text}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-column">
                <h3>Услуги</h3>
                <ul className="link-list">
                  {serviceLinks.map(({ text, href }) => (
                    <li key={text} className="link-item">
                      <a href={href}>{text}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-column">
                <h3>Ресурсы</h3>
                <ul className="link-list">
                  {helpfulLinks.map(({ text, href, hasIndicator }) => (
                    <li key={text} className="link-item">
                      <a href={href}>
                        {hasIndicator ? (
                          <span className="live-indicator">
                            {text}
                            <span className="pulse-dot"></span>
                          </span>
                        ) : (
                          text
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-column">
                <h3>Контакты</h3>
                <ul className="link-list">
                  {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                    <li key={text} className="link-item">
                      <a href="#" className="contact-item">
                        <Icon className="contact-icon" size={20} />
                        {isAddress ? <address style={{ fontStyle: "normal" }}>{text}</address> : <span>{text}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              2025 <a href="https://poehali.dev">poehali.dev</a>
            </p>
            <div className="footer-legal">
              <a href="/privacy">Политика конфиденциальности</a>
              <a href="/terms">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
