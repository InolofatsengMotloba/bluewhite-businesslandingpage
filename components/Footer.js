import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/BG7.jpg"
          alt="Footer background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#212471]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Mobile: 2 columns (Navigation/Services side-by-side)
            Desktop: 4 columns with even spacing 
        */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Brand - Spans 2 columns on mobile to stay full width */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Image
              src="/LightLogo.png"
              alt="The Tembo Group logo"
              width={160}
              height={60}
              className="object-contain"
            />
            <p className="text-sm text-[#F1F1F1]/80 max-w-xs">
              Delivering quality infrastructure solutions on time, on budget,
              and to industry standards.
            </p>

            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-[#F1F1F1]/80  hover:text-blue-600 transition-colors duration-200"
                target="_blank"
              >
                <FaFacebookF size={14} />
              </Link>
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-[#F1F1F1]/80   hover:text-blue-400 transition-colors duration-200"
                target="_blank"
              >
                <FaTwitter size={14} />
              </Link>

              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-[#F1F1F1]/80  hover:text-pink-600 transition-colors duration-200"
                target="_blank"
              >
                <FaInstagram size={14} />
              </Link>

              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-[#F1F1F1]/80 hover:text-[#0A66C2] transition-colors duration-200"
                target="_blank"
              >
                <FaLinkedinIn size={14} />
              </Link>
            </div>
          </div>

          {/* Navigation - Pushed right on desktop */}
          <div className="md:justify-self-center">
            <h4 className="mb-4 font-semibold text-[#F1F1F1]">Navigation</h4>
            <ul className="space-y-2 text-sm text-[#F1F1F1]/80">
              <li>
                <button className="hover:text-white">Home</button>
              </li>
              <li>
                <button className="hover:text-white">About Us</button>
              </li>
              <li>
                <button className="hover:text-white">Our Purpose</button>
              </li>
              <li>
                <button className="hover:text-white">Services</button>
              </li>
              <li>
                <button className="hover:text-white">Project Experience</button>
              </li>
            </ul>
          </div>

          {/* Services - Next to Navigation on mobile */}
          <div className="md:justify-self-center">
            <h4 className="mb-4 font-semibold text-[#F1F1F1]">Services</h4>
            <ul className="space-y-2 text-sm text-[#F1F1F1]/80">
              <li>Civil Construction</li>
              <li>Earthworks</li>
              <li>Professional Built & Civil Consulting </li>
            </ul>
          </div>

          {/* Work Hours - Pushed to the far right on desktop */}
          <div className="col-span-2 md:col-span-1 md:justify-self-end">
            <h4 className="mb-4 font-semibold text-[#F1F1F1]">Contact Us</h4>
            <ul className="space-y-2">
              {/* Email */}
              <li className="flex flex-nowrap items-center gap-2 overflow-visible">
                <FaEnvelope className="text-[#F1F1F1]/80 shrink-0" size={14} />
                <a
                  href="mailto:thetgi@outlook.com"
                  className="text-[#F1F1F1]/80 text-sm hover:text-white transition-colors duration-200 whitespace-nowrap overflow-visible"
                >
                  thetgi@outlook.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex flex-nowrap items-center gap-2">
                <FaPhone className="text-[#F1F1F1]/80 shrink-0" size={14} />
                <a
                  href="tel:+27615177507"
                  className="text-[#F1F1F1]/80 text-sm hover:text-white transition-colors duration-200 whitespace-nowrap"
                >
                  (061) 517-7507
                </a>
              </li>

              {/* Address */}
              <li>
                <a
                  href="https://share.google/xOzm5kief4vKT9vXc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 overflow-visible"
                >
                  <FaMapMarkerAlt
                    className="text-[#F1F1F1]/80 mt-1 shrink-0"
                    size={14}
                  />
                  <address className="not-italic text-[#F1F1F1]/80 text-sm hover:text-white transition-colors duration-200 leading-relaxed whitespace-nowrap sm:whitespace-pre-line">
                    Rustenburg, North West
                  </address>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/20" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#F1F1F1]/70 md:flex-row">
          <p>
            © {new Date().getFullYear()} The Tembo Group Investment. All rights
            reserved.
          </p>

          <div className="flex gap-4">
            <button className="hover:text-white">Privacy Policy</button>
            <button className="hover:text-white">Terms & Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
