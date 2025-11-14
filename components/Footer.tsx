import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        {/* 3 Column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1: Name */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif text-neutral-100">Sohan Maharjan</h3>
          </div>

          {/* Column 2: Contact Numbers */}
          <div className="text-center">
            <div className="space-y-2 text-neutral-400">
              <p className="text-sm">+919667034485</p>
              <p className="text-sm">+9779840748174</p>
            </div>
          </div>

          {/* Column 3: Social Links */}
          <div className="text-center md:text-right">
            <div className="flex gap-6 items-center justify-center md:justify-end">
              {/* WhatsApp */}
              <a
                href="https://wa.me/9779840748174"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                title="WhatsApp"
              >
                <svg
                  className="w-6 h-6 text-neutral-400 group-hover:text-green-500 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.52 3.48C18.25 1.26 15.16 0 11.9 0 5.43 0 .16 5.27.16 11.74c0 2.07.53 4.1 1.55 5.88L0 24l6.35-1.95C8.1 23.44 10.45 24 11.9 24c6.47 0 11.74-5.27 11.74-11.74 0-3.14-1.21-6.09-3.42-8.33zM11.9 21.97c-1.81 0-3.58-.48-5.12-1.4l-.37-.22-3.82 1.18 1.2-3.78-.24-.39c-1.02-1.62-1.56-3.49-1.56-5.41 0-5.37 4.37-9.74 9.74-9.74 2.6 0 5.04 1.01 6.88 2.85 1.84 1.84 2.85 4.28 2.85 6.88 0 5.37-4.37 9.74-9.74 9.74zm5.35-7.28c-.29-.15-1.73-.85-1.99-.95-.26-.1-.46-.15-.65.14-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.24-.57-.48-.49-.65-.5-.17-.01-.36-.01-.56-.01-.2 0-.51.07-.77.36-.26.29-1.01.99-1.01 2.41 0 1.42 1.04 2.8 1.18 3.02.15.22 2.04 3.12 4.94 4.37.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/theacousticalbum?igsh=MXEwNGY3cDN2bjlqdQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                title="Instagram"
              >
                <svg
                  className="w-6 h-6 text-neutral-400 group-hover:text-pink-500 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17" cy="7" r="1" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
