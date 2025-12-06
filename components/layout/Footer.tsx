import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "../ui/Logo";
import { NAVIGATION_LINKS, WHATSAPP_URL, CONTACT_INFO } from "../../constants";
import { Button } from "../ui/Button";
import { FormattedMessage } from "react-intl";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-totora-dark text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="bg-white/10 p-4 rounded-lg inline-block backdrop-blur-sm">
              <Logo className="h-14" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              <FormattedMessage id="footer.desc" />
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/TotoraSurfSchool"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-totora-yellow hover:text-totora-dark transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/totorasurfschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-totora-yellow hover:text-totora-dark transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-totora-yellow">
              <FormattedMessage id="footer.explore" />
            </h4>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    <FormattedMessage id={link.id} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-totora-yellow">
              <FormattedMessage id="footer.contact" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin
                  className="flex-shrink-0 mt-1 text-totora-light"
                  size={18}
                />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="text-totora-light" size={18} />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="text-totora-light" size={18} />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-totora-yellow">
              <FormattedMessage id="footer.ready" />
            </h4>
            <p className="text-gray-300 mb-6 text-sm">
              <FormattedMessage id="footer.readyDesc" />
            </p>
            <Button
              href={WHATSAPP_URL}
              variant="primary"
              fullWidth
              className="font-bold"
            >
              <FormattedMessage id="nav.book" />
            </Button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <FormattedMessage id="footer.rights" />
          </p>
        </div>
      </div>
    </footer>
  );
};
