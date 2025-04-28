import { APP_NAME } from "@/strings";
import { Wand2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full border-t py-8 bg-white flex justify-center">
      <div className="container flex flex-col items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <Wand2 className="h-6 w-6 text-violet-600" />
          <span className="text-lg font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            {APP_NAME}
          </span>
        </div>
        <nav className="flex flex-wrap gap-6 justify-center">
          <Link
            href="https://www.termsfeed.com/live/5ca325b5-b62e-473a-bfbf-695d0b831d16"
            className="text-sm font-medium text-slate-500 hover:text-violet-600"
          >
            Terms of Service
          </Link>
          <Link
            href="https://www.termsfeed.com/live/4c06bc20-1038-48d1-af9b-8a41ebc44415"
            className="text-sm font-medium text-slate-500 hover:text-violet-600"
          >
            Privacy Policy
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-slate-500 hover:text-violet-600"
          >
            FAQ
          </Link>
          <Link
            href="mailto:vchan444@gmail.com"
            className="text-sm font-medium text-slate-500 hover:text-violet-600"
          >
            Contact
          </Link>
        </nav>
        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
