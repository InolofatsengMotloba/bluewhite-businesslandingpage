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
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Divider */}
        <div className="mb-12 h-px bg-white/20" />

        {/* Grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* About */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="mt-6 w-12 h-0.5 bg-[#212471]"></div>

            <p className="text-sm text-white/80 max-w-xs">
              Partner with The Tembo Group Investment for dependable civil
              construction and earthworks solutions.
            </p>

            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank">
                <FaFacebookF
                  size={14}
                  className="text-white/70 hover:text-blue-600"
                />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <FaTwitter
                  size={14}
                  className="text-white/70 hover:text-blue-400"
                />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <FaInstagram
                  size={14}
                  className="text-white/70 hover:text-pink-600"
                />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <FaLinkedinIn
                  size={14}
                  className="text-white/70 hover:text-[#0A66C2]"
                />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Purpose</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Projects</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Civil Construction</li>
              <li>Earthworks</li>
              <li>Built & Civil Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <FaEnvelope size={14} />
                thetgi@outlook.com
              </li>
              <li className="flex items-center gap-2">
                <FaPhone size={14} />
                (061) 517-7507
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt size={14} className="mt-1" />
                Rustenburg, North West
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/20 pt-6 text-sm text-white/70 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} The Tembo Group Investment. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
