/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle, Users, ArrowUpRight } from 'lucide-react';

const CUSTOMER_CARE_LINK =
  'https://wa.me/255624542565?text=hellow%20customer%20CARE%20Naomba%20nielekeze%20khs%20GIX%20CHAT';
const WHATSAPP_GROUP_LINK =
  'https://chat.whatsapp.com/BhtxJeAGXRGCG9VdnxmL4y';

export default function App() {
  return (
    <main
      id="main-container"
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 relative bg-[#eef2ff] overflow-x-hidden font-['Poppins',sans-serif]"
    >
      {/* Center White Card */}
      <section
        id="gix-chat-card"
        className="bg-white rounded-[22px] px-5 py-7 sm:px-6 sm:py-8 max-w-[400px] w-full text-center border-t-[7px] border-[#a855f7] shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-300 relative z-10"
      >
        {/* Official Platform Badge */}
        <div className="flex justify-center mb-3">
          <span
            id="official-badge"
            className="inline-flex items-center gap-1 bg-[#e0f2fe] text-[#0284c7] px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-wide uppercase shadow-xs"
          >
            <span>✨</span> OFFICIAL PLATFORM
          </span>
        </div>

        {/* Title GIX CHAT */}
        <h2
          id="app-title"
          className="font-black tracking-[4px] text-[22px] sm:text-[24px] uppercase select-none"
        >
          <span className="text-[#7c3aed]">GIX</span>{' '}
          <span className="text-[#06b6d4]">CHAT</span>
        </h2>

        {/* Gradient Line Below Title */}
        <div
          id="title-line-divider"
          className="w-[90px] h-[5px] mx-auto mt-1.5 mb-4 rounded-[10px] bg-gradient-to-r from-[#a855f7] to-[#06b6d4]"
        />

        {/* Main Swahili Heading */}
        <h1
          id="main-heading"
          className="text-[#9a109d] text-[24px] sm:text-[27px] font-black leading-[1.25] my-2.5 tracking-tight"
        >
          kufanya kazi za AI na kulipwa hadi{' '}
          <span className="text-[#0ea5e9]">50,000</span> kwa siku
        </h1>

        {/* Subtext */}
        <p
          id="sub-instruction-text"
          className="font-extrabold text-[15px] sm:text-[16px] text-gray-800 my-3 sm:my-4 select-none"
        >
          kwa muongozo Zaidi 👇👇
        </p>

        {/* Two Action Buttons Only */}
        <div className="space-y-3.5 mt-4 mb-2">
          {/* Button 1: Purple Gradient -> Customer Care */}
          <a
            id="customer-care-cta-button"
            href={CUSTOMER_CARE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 p-4 sm:p-[18px_16px] rounded-[16px] text-white font-extrabold text-[13px] sm:text-[14px] leading-snug bg-gradient-to-r from-[#a855f7] to-[#e93df1] shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 no-underline"
          >
            <div className="flex items-center gap-3 text-left">
              <div className="w-[38px] h-[38px] shrink-0 bg-white/25 backdrop-blur-xs rounded-[10px] flex items-center justify-center text-[20px] transition-transform group-hover:scale-105">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="pr-1">
                Gusa hapa kuwasiliana na customer care kwa muongozo sahihi
              </span>
            </div>
            <ArrowUpRight className="w-5 h-5 shrink-0 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Button 2: Blue Gradient -> WhatsApp Group */}
          <a
            id="whatsapp-group-cta-button"
            href={WHATSAPP_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 p-4 sm:p-[18px_16px] rounded-[16px] text-white font-extrabold text-[13px] sm:text-[14px] leading-snug bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 no-underline"
          >
            <div className="flex items-center gap-3 text-left">
              <div className="w-[38px] h-[38px] shrink-0 bg-white/25 backdrop-blur-xs rounded-[10px] flex items-center justify-center text-[20px] transition-transform group-hover:scale-105">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="pr-1">Gusa hapa kujiunga na group</span>
            </div>
            <ArrowUpRight className="w-5 h-5 shrink-0 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Powered By text */}
        <p
          id="powered-by-footer"
          className="text-[12px] text-gray-500 mt-5 font-semibold tracking-wide"
        >
          Powered by Cp3
        </p>
      </section>

      {/* Floating WhatsApp Customer Care Button (Bottom-Right) */}
      <aside
        id="floating-whatsapp-container"
        aria-label="Contact Customer Care via WhatsApp"
        className="fixed bottom-5 right-4 sm:right-7 z-50 flex flex-col items-center select-none"
      >
        {/* Floating Tag Label */}
        <div
          id="floating-whatsapp-label"
          className="bg-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[12px] sm:text-[13px] font-black text-[#14532d] shadow-[0_6px_16px_rgba(0,0,0,0.15)] border-2 border-[#22c55e] mb-2.5 tracking-wider uppercase animate-bounce"
        >
          CUSTOMER CARE
        </div>

        {/* Pulsing Green Button */}
        <a
          id="floating-whatsapp-btn"
          href={CUSTOMER_CARE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          title="Customer Care on WhatsApp"
          className="whatsapp-pulse-btn w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-200 no-underline"
        >
          <svg
            className="w-9 h-9 sm:w-11 sm:h-11 fill-white"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19.05 4.94A9.9 9.9 0 0 0 12.05 2C6.6 2 2.15 6.45 2.15 11.9c0 1.75.46 3.45 1.32 4.95L2.05 22l5.3-1.39a9.85 9.85 0 0 0 4.7 1.2h.01c5.45 0 9.9-4.45 9.9-9.9 0-2.65-1.03-5.13-2.91-6.97zM12.06 20.05h-.01a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.15.83.84-3.07-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.27-8.24 8.27zm4.52-6.17c-.25-.12-1.47-.73-1.7-.81-.23-.08-.4-.12-.57.12s-.65.81-.8.97c-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.88-.2-.48-.41-.42-.57-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.02 2.57.12.17 1.75 2.67 4.24 3.75.59.25 1.05.4 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.28z" />
          </svg>
        </a>
      </aside>
    </main>
  );
}
