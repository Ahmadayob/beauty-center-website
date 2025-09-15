"use client";

import { useState } from "react";

export default function HairCarePage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Hair Care Products",
      subtitle: "Daily hair care essentials for maintaining healthy, beautiful hair",
      breadcrumb: "Home › Learn More › Hair Products › Hair Care",
      products: [
        {
          name: "MORIA DEEP HYDRATING HAIR SERUM",
          description: "Intensive hydration serum for deep moisture and shine",
          image: "/images/placeholder.jpg"
        },
        {
          name: "MORIA LIQUID HAIR MASK",
          description: "Lightweight liquid mask for instant hair transformation",
          image: "/images/placeholder.jpg"
        },
        {
          name: "MORIA REPAIRING HAIR MASK",
          description: "Deep repair mask for damaged and colored hair",
          image: "/images/placeholder.jpg"
        },
        {
          name: "MORIA CONDITIONER",
          description: "Gentle conditioner for soft, manageable hair",
          image: "/images/placeholder.jpg"
        },
        {
          name: "MORIA SALT FREE SHAMPOO",
          description: "Salt-free shampoo for damaged and colored hair",
          image: "/images/placeholder.jpg"
        },
        {
          name: "MORIA HAIR CARE KIT",
          description: "Complete hair care routine in one convenient kit",
          image: "/images/placeholder.jpg"
        }
      ]
    },
    ar: {
      title: "منتجات العناية بالشعر",
      subtitle: "أساسيات العناية اليومية بالشعر للحفاظ على شعر صحي وجميل",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات الشعر › العناية بالشعر",
      products: [
        {
          name: "موريا سيروم ترطيب الشعر العميق",
          description: "سيروم ترطيب مكثف للرطوبة العميقة واللمعان",
          image: "/images/placeholder.jpg"
        },
        {
          name: "موريا ماسك الشعر السائل",
          description: "ماسك سائل خفيف لتحويل فوري للشعر",
          image: "/images/placeholder.jpg"
        },
        {
          name: "موريا ماسك إصلاح الشعر",
          description: "ماسك إصلاح عميق للشعر التالف والمصبغ",
          image: "/images/placeholder.jpg"
        },
        {
          name: "موريا بلسم الشعر",
          description: "بلسم لطيف للشعر الناعم والقابل للتمشيط",
          image: "/images/placeholder.jpg"
        },
        {
          name: "موريا شامبو خالٍ من الأملاح",
          description: "شامبو خالٍ من الأملاح للشعر التالف والمصبغ",
          image: "/images/placeholder.jpg"
        },
        {
          name: "موريا طقم العناية بالشعر",
          description: "روتين العناية الكامل بالشعر في مجموعة واحدة مريحة",
          image: "/images/placeholder.jpg"
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
            {/* Repairing Hair Serum */}
            <a href="/products/hair-care/repairing-hair-serum" className="group">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/211.jpg" 
                    alt="Repairing Hair Serum"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-sans font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                    Repairing Hair Serum
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Multi-tasking serum for damaged, dry hair with nourishing vitamins and plant oils.
                  </p>
                  <div className="w-full bg-gold-500 text-black py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300 text-center">
                    {lang === "en" ? "View Details" : "عرض التفاصيل"}
                  </div>
                </div>
              </div>
            </a>

            {/* Leave-In Hair Mask */}
            <a href="/products/hair-care/leave-in-hair-mask" className="group">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/212.jpg" 
                    alt="Leave-In Hair Mask"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-sans font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                    Leave-In Hair Mask
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Multi-purpose conditioning hair mask that smooths, moisturizes and tames frizz.
                  </p>
                  <div className="w-full bg-gold-500 text-black py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300 text-center">
                    {lang === "en" ? "View Details" : "عرض التفاصيل"}
                  </div>
                </div>
              </div>
            </a>

            {/* Repairing Hair Mask */}
            <a href="/products/hair-care/repairing-hair-mask" className="group">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/210.jpg" 
                    alt="Repairing Hair Mask"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-sans font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                    Repairing Hair Mask
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Intensive repair mask for damaged and color-treated hair with natural ingredients.
                  </p>
                  <div className="w-full bg-gold-500 text-black py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300 text-center">
                    {lang === "en" ? "View Details" : "عرض التفاصيل"}
                  </div>
                </div>
              </div>
            </a>

            {/* Salt Free Conditioner */}
            <a href="/products/hair-care/salt-free-conditioner" className="group">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/213.jpg" 
                    alt="Salt Free Conditioner"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-sans font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                    Salt Free Conditioner
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Sulfate-free conditioner that strengthens hair with natural ingredients and plant oils.
                  </p>
                  <div className="w-full bg-gold-500 text-black py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300 text-center">
                    {lang === "en" ? "View Details" : "عرض التفاصيل"}
                  </div>
                </div>
              </div>
            </a>

            {/* Salt Free Shampoo */}
            <a href="/products/hair-care/salt-free-shampoo" className="group">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/214.jpg" 
                    alt="Salt Free Shampoo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-sans font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                    Salt Free Shampoo
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Gentle sulfate-free shampoo for damaged and colored hair with nourishing plant oils.
                  </p>
                  <div className="w-full bg-gold-500 text-black py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300 text-center">
                    {lang === "en" ? "View Details" : "عرض التفاصيل"}
                  </div>
                </div>
              </div>
            </a>

            {/* Hair Care Kit */}
            <a href="/products/hair-care-kit" className="group">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/215.jpg" 
                    alt="Hair Care Kit"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-sans font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                    Hair Care Kit
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Complete hair care routine set for daily repair and protection.
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
