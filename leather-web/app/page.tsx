"use client";

import React, { useState } from "react";
import { siteConfig } from "../config/site";
import {
  Shield,
  Scissors,
  ArrowUpRight,
  MessageCircle,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  Mail
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Two Zipper White Stripe Jacket",
    edition: "Signature Series",
    leatherType: "Premium Sheep Leather",
    image: "/Two zipper sheep leather jacket white.jpeg",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Two Zipper Blue Stripe Jacket",
    edition: "Limited Edition",
    leatherType: "Premium Sheep Leather",
    image: "/Two zipper sheep leather jacket blue .jpeg",
    badge: "New Arrival",
  },
  {
    id: 3,
    name: "Two Zipper Orange Stripe Jacket",
    edition: "Classic Heritage",
    leatherType: "Premium Sheep Leather",
    image: "/Two zipper sheep leather jacket orange .jpeg",
    badge: "Trending",
  },
  {
    id: 4,
    name: "One Piece Blue Sheep Leather Jacket",
    edition: "Atelier Masterpiece",
    leatherType: "Full-Grain Sheep Leather",
    image: "/One piece sheep leather jacket.jpeg",
    badge: "Handcrafted",
  },
  {
    id: 5,
    name: "One Piece Brown Sheep Leather Jacket",
    edition: "Vintage Classic",
    leatherType: "Distressed Sheep Leather",
    image: "/One piece sheep leather jacket (2).jpeg",
    badge: "Custom Fit",
  },
  {
    id: 6,
    name: "One Piece Charcoal Leather Jacket",
    edition: "Raw Finish",
    leatherType: "Matte Sheep Leather",
    image: "/One piece sheep leather jacket (3).jpeg",
    badge: "Exclusive",
  },
  {
    id: 7,
    name: "4 Zipper Black Biker Jacket",
    edition: "Commanding Series",
    leatherType: "Heavy-Duty Sheep Leather",
    image: "/4 zipper sheep leather jacket Black .jpeg",
    badge: "Bestseller",
  },
  {
    id: 8,
    name: "Two Zipper Red Stripe Jacket",
    edition: "Sport Heritage",
    leatherType: "Premium Sheep Leather",
    image: "/Two zipper sheep leather jacket in blue Black.jpeg",
    badge: "Popular",
  },
  {
    id: 9,
    name: "Ladies Classic Sheep Leather Jacket",
    edition: "Women's Atelier",
    leatherType: "Soft Supple Sheep Leather",
    image: "/Ladies jacket sheep leather .jpeg",
    badge: "Ladies Choice",
  },
  {
    id: 10,
    name: "Ladies Biker Sheep Leather Jacket",
    edition: "Elite Women's Collection",
    leatherType: "Premium Sheep Leather",
    image: "/Laddies biker sheep leather .jpeg",
    badge: "New",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07080C] text-[#F4F5F7] font-sans antialiased selection:bg-white/10 selection:text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[20%] left-[15%] w-[55vw] h-[55vw] bg-rose-200/5 rounded-full blur-[200px] animate-pulse duration-[10000ms]" />
        <div className="absolute top-[40%] -right-[10%] w-[45vw] h-[45vw] bg-white/5 rounded-full blur-[220px] animate-pulse duration-[8000ms]" />
        <div className="absolute -bottom-[10%] left-[30%] w-[50vw] h-[50vw] bg-slate-800/20 rounded-full blur-[240px]" />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-5 inset-x-0 max-w-7xl mx-auto px-4 z-50">
        <div className="bg-[#0E0F15]/85 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between shadow-2xl shadow-black/95">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3 pr-6">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 flex items-center justify-center bg-black border border-white/10">
              <img 
                src="/5470ca29968a499da0ec1386a5164c4b.jpg" 
                alt="TAAY International Logo" 
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 uppercase">
              {siteConfig.name}
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-10 text-xs uppercase tracking-widest font-medium text-neutral-300 px-6 border-l border-white/10">
            <a href="#collection" className="hover:text-white transition-all duration-300">Collection</a>
            <a href="#custom-craft" className="hover:text-white transition-all duration-300">Bespoke Tailoring</a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3 pl-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-4 py-2.5 rounded-xl text-[11px] uppercase tracking-wider transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-neutral-300" /> Email
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white hover:bg-neutral-200 text-black font-extrabold px-5 py-2.5 rounded-xl text-[11px] uppercase tracking-wider transition-all shadow-lg shadow-white/5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black" /> Direct Order
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-neutral-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-[#0E0F15]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-3 text-xs uppercase tracking-widest font-semibold text-neutral-300 border-b border-white/10 pb-4">
              <a 
                href="#collection" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white transition-colors py-2"
              >
                Collection
              </a>
              <a 
                href="#custom-craft" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white transition-colors py-2"
              >
                Bespoke Tailoring
              </a>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-4 py-3 rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                <Mail className="w-4 h-4 text-neutral-300" /> Email Support
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 text-black font-extrabold px-4 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-white/5"
              >
                <MessageCircle className="w-4 h-4 fill-black" /> Direct WhatsApp Order
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-48 pb-28 px-6 max-w-6xl mx-auto text-center flex flex-col items-center">
        
        {/* Handcrafted Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-[11px] font-semibold tracking-widest uppercase mb-6 backdrop-blur-xl shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-rose-200" />
          Handcrafted Bespoke Leather Works
        </div>

        {/* Company Name with Blinking Serif Style */}
        <div className="animate-pulse duration-[6000ms] mb-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-[1.15] max-w-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-neutral-300">
              {siteConfig.name}
            </span>
          </h2>
        </div>

        {/* Main Heading in Modern Clean Font */}
        <h1 className="text-lg md:text-2xl lg:text-3xl font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-rose-100 via-amber-100 to-slate-200 uppercase max-w-4xl leading-tight">
          TIMELESS LUXURY. UNCOMPROMISING FIT.
        </h1>

        <p className="mt-6 text-neutral-400 max-w-2xl text-sm md:text-base font-light leading-relaxed tracking-wide">
          {siteConfig.description} Tailored meticulously to your exact physique for an unmatched, commanding silhouette.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#collection"
            className="bg-white hover:bg-neutral-200 text-black font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl shadow-white/10"
          >
            Explore Catalog <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="#custom-craft"
            className="bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-neutral-200 font-semibold px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
          >
            <Scissors className="w-4 h-4 text-neutral-300" /> Book Custom Measurement
          </a>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="relative z-10 py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-6">
          <div>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.25em]">
              The Atelier Masterpieces
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2 tracking-tight text-white">
              CURATED COLLECTION
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#0D0E14]/80 border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/30 hover:shadow-2xl hover:shadow-white/5 flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                <div className="relative h-96 w-full overflow-hidden bg-black">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E14] via-transparent to-transparent opacity-90" />
                  
                  <span className="absolute top-4 left-4 bg-black/80 border border-white/15 text-neutral-200 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md">
                    {product.badge}
                  </span>
                </div>

                <div className="p-6">
                  <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest block mb-1">
                    {product.edition}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-rose-100 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 flex items-center gap-1.5 font-light">
                    <Shield className="w-3.5 h-3.5 text-neutral-400" /> {product.leatherType}
                  </p>
                </div>
              </div>

              {/* Direct Order Button */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/[0.06] mt-4">
                <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">
                  Custom & Ready Order
                </span>

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi!%20I%20want%20to%20order/inquire%20about%20the%20*${encodeURIComponent(product.name)}*`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-neutral-200 text-black font-extrabold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 shadow-lg shadow-white/5"
                >
                  Direct Order <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Fitting Section */}
      <section id="custom-craft" className="relative z-10 py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-[#101118] via-[#131520] to-[#0D0E14] border border-white/10 rounded-3xl p-8 md:p-14 relative overflow-hidden backdrop-blur-md shadow-2xl">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-neutral-300 text-xs font-bold uppercase tracking-widest mb-3">
              <Scissors className="w-4 h-4" /> Bespoke Fitting Service
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-white leading-tight tracking-tight">
              CUSTOM CUT FOR YOUR EXACT BODY MEASUREMENTS.
            </h2>
            <p className="mt-4 text-neutral-400 text-xs md:text-sm leading-relaxed font-light">
              Send us your measurements or share a reference design image on WhatsApp or Email. Our master craftsmen will handcut and assemble your dream jacket.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi!%20I%20want%20to%20get%20a%20*Custom%20Tailored%20Leather%20Jacket*%20made.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-neutral-200 text-black font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-white/10"
              >
                WhatsApp Us <MessageCircle className="w-4 h-4 fill-black" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-widest transition-all duration-300"
              >
                Email Support <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#040508] py-12 px-6 text-center text-xs text-neutral-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span className="text-xs font-extrabold text-white tracking-widest uppercase">{siteConfig.name}</span>
            <span className="hidden md:inline">—</span>
            <a href={`mailto:${siteConfig.email}`} className="text-neutral-400 hover:text-white transition">
              {siteConfig.email}
            </a>
          </div>
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}