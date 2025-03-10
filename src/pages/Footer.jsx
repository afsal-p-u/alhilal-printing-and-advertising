import React from "react";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer class="bg-white dark:bg-gray-900">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="/" class="flex items-center">
              <img
                src={logo}
                class="h-8 me-3 rounded-full"
                alt="FlowBite Logo"
              />
              <div className="flex flex-col items-center">
                <p className="dark:text-white font-semibold text-lg">
                  Al Hilal Printing Services
                </p>
                <p className="text-xs font-medium dark:text-white">
                  Advertising & Gifts
                </p>
              </div>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://g.page/r/CcE5KIIFprDbEBE/review"
                    class="hover:underline"
                    target="_blank"
                  >
                    Feedback
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="http://wa.me/971509454953"
                    class="hover:underline"
                    target="_blank"
                  >
                    Whatsapp
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href="mailto:alhilalsales@gmail.com"
                    class="hover:underline"
                    target="_blank"
                  >
                    Gmail
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://www.instagram.com/alhilalprinting_?igsh=MXFsdTVnNWhic2psOQ=="
                    class="hover:underline "
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/share/15j85zobxE/?mibextid=wwXIfr"
                    class="hover:underline"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@ALHILALPrintingadvertising"
                    class="hover:underline"
                    target="_blank"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-center">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="/" class="hover:underline">
              AlhilalPrinting&Adevertising™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
