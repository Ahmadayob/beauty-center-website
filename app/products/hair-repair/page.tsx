"use client";

import { useState } from "react";

export default function HairRepairPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Hair Repair Products",
      subtitle: "Professional hair repair treatments to restore strength and vitality to damaged hair",
      breadcrumb: "Home › Learn More › Hair Products › Hair Repair",
      products: [
        {
          name: "MORIA INTENSE PRO REPAIR ANTI-DANDRUFF SHAMPOO",
          description: "Professional anti-dandruff shampoo for scalp health and hair strength",
          image: "/images/placeholder.jpg"
        },
        {
          name: "MORIA INTENSE PRO REPAIR SHAMPOO",
          description: "Intensive repair shampoo for damaged and weakened hair",
          image: "/images/placeholder.jpg"
        },
        {
          name: "MORIA INTENSE PRO REPAIR ANTI-FRIZZ COMPLEX",
          description: "Advanced anti-frizz complex for smooth, manageable hair",
          image: "/images/placeholder.jpg"
        },
        {
          name: "Hair Loss Treatment",
          description: "Professional treatment to combat hair loss and promote healthy hair growth",
          image: "/images/10b5d489-aa01-4e4f-b3ea-387e8d957e91.jpg"
        }
      ]
    },
    ar: {
      title: "منتجات إصلاح الشعر",
      subtitle: "علاجات إصلاح الشعر المهنية لاستعادة القوة والحيوية للشعر التالف",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات الشعر › إصلاح الشعر",
      products: [
        {
          name: "موريا شامبو إصلاح مكثف مضاد للقشرة",
          description: "شامبو مضاد للقشرة مهني لصحة فروة الرأس وقوة الشعر",
          image: "/images/placeholder.jpg"
        },
        {
          name: "موريا شامبو إصلاح مكثف",
          description: "شامبو إصلاح مكثف للشعر التالف والضعيف",
          image: "/images/placeholder.jpg"
        },
        {
          name: "موريا مركب إصلاح مكثف مضاد للهيشان",
          description: "مركب مضاد للهيشان متقدم للشعر الناعم والقابل للتمشيط",
          image: "/images/placeholder.jpg"
        },
        {
          name: "علاج تساقط الشعر",
          description: "علاج مهني لمحاربة تساقط الشعر وتعزيز نمو الشعر الصحي",
          image: "/images/10b5d489-aa01-4e4f-b3ea-387e8d957e91.jpg"
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
              <button
                onClick={() => setLang(lang === "en" ? "ar" : "en")}
                className="bg-gold-500 text-black px-4 py-2 rounded-full font-sans font-semibold hover:bg-gold-600 transition-colors duration-300"
              >
                {lang === "en" ? "عربي" : "EN"}
              </button>
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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Anti Dandruff Shampoo */}
            <a href="/products/hair-repair/anti-dandruff-shampoo" className="group">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/504.jpg" 
                    alt="Anti Dandruff Shampoo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-sans font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                    Anti Dandruff Shampoo
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Potent shampoo that attacks dandruff at its roots with vitamins, acids and amino acids for a refreshed, itch-free scalp.
                  </p>
                  <div className="w-full bg-gold-500 text-black py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300 text-center">
                    {lang === "en" ? "View Details" : "عرض التفاصيل"}
                  </div>
                </div>
              </div>
            </a>

            {/* Anti Hair Loss Shampoo */}
            <a href="/products/hair-repair/anti-hair-loss-shampoo" className="group">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/201.jpg" 
                    alt="Anti Hair Loss Shampoo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-sans font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                    Anti Hair Loss Shampoo
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Invigorating shampoo that harnesses plant power and potent ingredients to energize your scalp and promote thicker, fuller hair.
                  </p>
                  <div className="w-full bg-gold-500 text-black py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300 text-center">
                    {lang === "en" ? "View Details" : "عرض التفاصيل"}
                  </div>
                </div>
              </div>
            </a>

            {/* Intensive Hair Complex */}
            <a href="/products/hair-repair/intensive-hair-complex" className="group">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/202.jpg" 
                    alt="Intensive Hair Complex"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-sans font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                    Intensive Hair Complex
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Intensely reparative treatment fortified with sugar derivatives, amino acids, peptides, jojoba oil and inca inchi oil to rebuild and repair damaged hair.
                  </p>
                  <div className="w-full bg-gold-500 text-black py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300 text-center">
                    {lang === "en" ? "View Details" : "عرض التفاصيل"}
                  </div>
                </div>
              </div>
            </a>

            {/* Hair Loss Treatment */}
            <a href="/products/hair-repair/hair-loss-treatment" className="group">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/10b5d489-aa01-4e4f-b3ea-387e8d957e91.jpg" 
                    alt="Hair Loss Treatment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-sans font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                    {lang === "en" ? "Hair Loss Treatment" : "علاج تساقط الشعر"}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {lang === "en" 
                      ? "Professional treatment to combat hair loss and promote healthy hair growth"
                      : "علاج مهني لمحاربة تساقط الشعر وتعزيز نمو الشعر الصحي"
                    }
                  </p>
                  <div className="w-full bg-gold-500 text-black py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300 text-center">
                    {lang === "en" ? "View Details" : "عرض التفاصيل"}
                  </div>
                </div>
              </div>
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
