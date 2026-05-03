import Link from "next/link";
import { Globe, Envelope, MapPin, ArrowUpRightFromSquare } from "@gravity-ui/icons";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-gray-200 bg-mist-800 text-white">
      
      <div className="max-w-7xl mx-auto pt-10 pb-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              TilesGallery
            </h2>

            <p className="text-sm text-gray-400 max-w-xs">
              Get use-ready tiles in seconds. Built for speed, scale, and creativity.
            </p>

            {/* Social (Gravity-only workaround) */}
            <div className="flex flex-col gap-2 pt-2 text-sm text-gray-400">
              
              <Link href="#" className="flex items-center gap-2 group">
                <ArrowUpRightFromSquare className="w-4 h-4 group-hover:-translate-y-1 transition" />
                Facebook
              </Link>

              <Link href="#" className="flex items-center gap-2 group">
                <ArrowUpRightFromSquare className="w-4 h-4 group-hover:-translate-y-1 transition" />
                Twitter
              </Link>

              <Link href="#" className="flex items-center gap-2 group">
                <ArrowUpRightFromSquare className="w-4 h-4 group-hover:-translate-y-1 transition" />
                LinkedIn
              </Link>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold mb-4">
              Product
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#">Browse</Link></li>
              <li><Link href="#">Gallery</Link></li>
              <li><Link href="#">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="">
            <h3 className="text-sm font-semibold  mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-gray-400 ">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">Terms</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 contact">
            <h3 className="text-sm font-semibold ">
              Contact Us
            </h3>

            <div className="space-y-3 text-sm text-gray-400 ">
              
              <div className="flex items-center gap-2">
                <Envelope className="w-4 h-4" />
                <span>support@tilesgallery.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>+880 1234 567 890</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Dhaka, Bangladesh</span>
              </div>

            </div>

            <Link
              href="/contact"
              className="inline-block mt-2 px-4 py-2 text-sm border border-rose-800 bg-rose-800 font-semibold"
            >
              Send Message
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} TilesGallery. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;