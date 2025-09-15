"use client";

import { useLanguage } from "../../contexts/LanguageContext";

export default function HairProducts() {
  const { lang, setLang } = useLanguage();

  const content = {
    en: {
      title: "Hair Products",
      breadcrumb: "Home › Learn More › Hair Products",
      cta: "Learn More",
      nav: {
        home: "Home",
        learnMore: "Learn More",
        hairProducts: "Hair Products"
      }
    },
    ar: {
      title: "منتجات الشعر",
      breadcrumb: "الرئيسية › اعرف المزيد › منتجات الشعر",
      cta: "اعرف المزيد",
      nav: {
        home: "الرئيسية",
        learnMore: "اعرف المزيد",
        hairProducts: "منتجات الشعر"
      }
    }
  };

  const t = content[lang];

  return (
    <main
      className={`min-h-screen font-sans ${
        lang === "ar" ? "text-right" : "text-left"
      }`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex flex-col items-center justify-center shadow-lg">
                <span className="text-black font-bold text-xs leading-none">Le</span>
                <span className="text-black font-bold text-xs leading-none">Rêve</span>
              </div>
              <h1 className="text-2xl font-sans font-bold luxury-text">Le Rêve Beauty Center</h1>
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-white hover:text-gold-500 transition-colors duration-300 font-medium">{t.nav.home}</a>
                <a href="/learn-more" className="text-white hover:text-gold-500 transition-colors duration-300 font-medium">{t.nav.learnMore}</a>
              </div>
              <button
                onClick={() => setLang(lang === "en" ? "ar" : "en")}
                className="btn-luxury-outline text-sm"
              >
                {lang === "en" ? "العربية" : "English"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <section className="pt-24 pb-8 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-dark-200">
            <a href="/" className="hover:text-gold-500 transition-colors duration-300">{t.nav.home}</a>
            <span className="mx-2 text-gold-500">›</span>
            <a href="/learn-more" className="hover:text-gold-500 transition-colors duration-300">{t.nav.learnMore}</a>
            <span className="mx-2 text-gold-500">›</span>
            <span className="text-gold-500">{t.nav.hairProducts}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-sans font-bold text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-dark-200 max-w-3xl mx-auto">
              {lang === "en" 
                ? "Discover our premium hair care products designed for every hair type and concern"
                : "اكتشفي منتجات العناية بالشعر المميزة المصممة لكل أنواع الشعر والمشاكل"
              }
            </p>
          </div>

          {/* Product Categories Display */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            {/* Hair Care Section */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-sans font-bold text-black mb-8">Hair Care</h3>
              
              {/* Hair Kit Image */}
              <div className="mb-8">
                <img 
                  src="/images/hair kit.jpg" 
                  alt="Hair Care Products" 
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-lg"
                />
              </div>
              
              <a 
                href="/products/hair-care" 
                className="inline-block bg-amber-500 text-white px-8 py-3 rounded-lg font-sans font-semibold hover:bg-amber-600 transition-colors duration-300"
              >
                {lang === "en" ? "View Hair Care Products" : "عرض منتجات العناية بالشعر"}
              </a>
            </div>

            {/* Hair Repair Section */}
            <div className="text-center">
              <h3 className="text-2xl font-sans font-bold text-black mb-8">Hair Repair</h3>
              
              {/* Hair Repair Image */}
              <div className="mb-8">
                <img 
                  src="/images/hair repair.jpg" 
                  alt="Hair Repair Products" 
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-lg"
                />
              </div>
              
              <a 
                href="/products/hair-repair" 
                className="inline-block bg-amber-500 text-white px-8 py-3 rounded-lg font-sans font-semibold hover:bg-amber-600 transition-colors duration-300"
              >
                {lang === "en" ? "View Hair Repair Products" : "عرض منتجات إصلاح الشعر"}
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex flex-col items-center justify-center shadow-lg">
                <span className="text-black font-bold text-sm leading-none">Le</span>
                <span className="text-black font-bold text-sm leading-none">Rêve</span>
              </div>
              <h2 className="text-3xl font-sans font-bold luxury-text">Le Rêve Beauty Center</h2>
            </div>
            <p className="text-gold-500 text-lg">
              © 2024 Le Rêve Beauty Center. {lang === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
