"use client";

import { useState } from "react";
import LanguageToggle from "../../../components/LanguageToggle";

export default function CleansersTonerMicellarsPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Cleansers, Toner and Micellars",
      breadcrumb: "Home › Learn More › Skin Products › Cleansers, Toner and Micellars",
      products: [
        {
          id: "amino-acid-micellar-dry",
          title: "Amino Acid Micellar Solution (for dry skin)",
          image: "/images/166.jpg"
        },
        {
          id: "amino-acid-micellar-oily",
          title: "Amino Acid Micellar Solution (for oily skin)",
          image: "/images/167.jpg"
        },
        {
          id: "foaming-cleanser-dry",
          title: "Foaming Facial Cleanser (Normal to Dry Skin)",
          image: "/images/160.jpg"
        },
        {
          id: "foaming-cleanser-oily",
          title: "Foaming Facial Cleanser (Oily Skin)",
          image: "/images/161.jpg"
        },
        {
          id: "aha-bha-gel-dry",
          title: "Facial AHA & BHA Hydrating Cleansing Gel (Normal to Dry Skin)",
          image: "/images/162.jpg"
        },
        {
          id: "aha-bha-gel-oily",
          title: "Facial AHA & BHA Hydrating Cleansing Gel (Oily Skin)",
          image: "/images/163.jpg"
        },
        {
          id: "refreshing-toner-dry",
          title: "Refreshing Skin Toner (Normal to Dry Skin)",
          image: "/images/164.jpg"
        },
        {
          id: "rebalancing-toner-oily",
          title: "Rebalancing Skin Toner (Oily Skin)",
          image: "/images/165.jpg"
        }
      ]
    },
    ar: {
      title: "منظفات، تونر وميسيلار",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات البشرة › منظفات، تونر وميسيلار",
      products: [
        {
          id: "amino-acid-micellar-dry",
          title: "محلول الميسيلار بالأحماض الأمينية (للبشرة الجافة)",
          image: "/images/166.jpg"
        },
        {
          id: "amino-acid-micellar-oily",
          title: "محلول الميسيلار بالأحماض الأمينية (للبشرة الدهنية)",
          image: "/images/167.jpg"
        },
        {
          id: "foaming-cleanser-dry",
          title: "منظف الوجه الرغوي (البشرة العادية إلى الجافة)",
          image: "/images/160.jpg"
        },
        {
          id: "foaming-cleanser-oily",
          title: "منظف الوجه الرغوي (البشرة الدهنية)",
          image: "/images/161.jpg"
        },
        {
          id: "aha-bha-gel-dry",
          title: "جل التنظيف المرطب AHA & BHA (البشرة العادية إلى الجافة)",
          image: "/images/162.jpg"
        },
        {
          id: "aha-bha-gel-oily",
          title: "جل التنظيف المرطب AHA & BHA (البشرة الدهنية)",
          image: "/images/163.jpg"
        },
        {
          id: "refreshing-toner-dry",
          title: "تونر البشرة المنعش (البشرة العادية إلى الجافة)",
          image: "/images/164.jpg"
        },
        {
          id: "rebalancing-toner-oily",
          title: "تونر إعادة توازن البشرة (البشرة الدهنية)",
          image: "/images/165.jpg"
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <a href="/" className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex flex-col items-center justify-center shadow-lg">
                  <span className="text-black font-bold text-xs leading-none">Le</span>
                  <span className="text-black font-bold text-xs leading-none">Rêve</span>
                </div>
                <span className="text-xl font-sans font-bold text-gray-900">Le Rêve Beauty Center</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/#home" className="text-gray-700 hover:text-gold-600 transition-colors duration-300 font-sans">Home</a>
              <a href="/#about" className="text-gray-700 hover:text-gold-600 transition-colors duration-300 font-sans">About</a>
              <a href="/#products" className="text-gray-700 hover:text-gold-600 transition-colors duration-300 font-sans">Products</a>
              <a href="/#contact" className="text-gray-700 hover:text-gold-600 transition-colors duration-300 font-sans">Contact</a>
              <LanguageToggle lang={lang} setLang={setLang} />
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600 font-sans">{t.breadcrumb}</p>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {lang === "en" 
                ? "Complete cleansing and toning solutions for all skin types with advanced formulations"
                : "حلول تنظيف وتنعيم شاملة لجميع أنواع البشرة مع تركيبات متقدمة"
              }
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {t.products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Product Image */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Information */}
                <div className="p-6">
                  <h3 className="text-lg font-sans font-bold text-gray-900 mb-4 group-hover:text-gold-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                  
                  {/* View Details Button */}
                  <a 
                    href={`/products/skin/cleansers-toner-micellars/${product.id}`}
                    className="w-full bg-gold-500 text-black py-2 rounded-lg font-sans font-semibold hover:bg-gold-600 transition-colors duration-300 text-center block"
                  >
                    {lang === "en" ? "View Details" : "عرض التفاصيل"}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Back Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <a 
              href="/products/skin"
              className="bg-gold-500 text-black px-8 py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300"
            >
              {lang === "en" ? "← Back to Skin Products" : "← العودة لمنتجات البشرة"}
            </a>
            <a 
              href="/learn-more"
              className="bg-gray-200 text-gray-800 px-8 py-3 rounded-xl font-sans font-semibold hover:bg-gray-300 transition-colors duration-300"
            >
              {lang === "en" ? "← All Products" : "← جميع المنتجات"}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex flex-col items-center justify-center">
                  <span className="text-black font-bold text-sm leading-none">Le</span>
                  <span className="text-black font-bold text-sm leading-none">Rêve</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-sans font-bold">Le Rêve</span>
                  <span className="text-sm text-gray-400">Beauty Center</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {lang === "en" 
                  ? "Your premier destination for luxury beauty treatments and professional skincare solutions."
                  : "وجهتك المميزة لعلاجات الجمال الفاخرة والحلول المهنية للعناية بالبشرة."
                }
              </p>
            </div>
            <div>
              <h3 className="text-lg font-sans font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/#home" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">Home</a></li>
                <li><a href="/#about" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">About</a></li>
                <li><a href="/#products" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">Products</a></li>
                <li><a href="/#contact" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-sans font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 00972569000463</p>
                <p>🕒 {lang === "en" ? "10 AM – 5 PM, Sat–Thu" : "10 صباحاً – 5 مساءً، السبت–الخميس"}</p>
                <p>📍 {lang === "en" ? "Jenin, Al-Zahra District" : "جنين حي الزهراء"}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-sans">© 2024 Le Rêve Beauty Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
