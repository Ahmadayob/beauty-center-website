"use client";

import { useState } from "react";

export default function RejuvenatingDayCreamOilyPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Rejuvenating Day Cream (Oily Skin)",
      breadcrumb: "Home › Learn More › Skin Products › Anti Aging Kit › Rejuvenating Day Cream (Oily Skin)",
      productDetail: "This lightweight, oil-free day cream is specifically formulated for oily skin types. It provides essential hydration without adding excess oil, while delivering powerful anti-aging benefits. The cream contains advanced ingredients that help control sebum production, minimize pores, and provide a matte finish. It's designed to protect your skin from environmental damage while keeping it fresh and shine-free throughout the day. Perfect for those with oily or combination skin who want effective anti-aging treatment without the heavy, greasy feel of traditional creams.",
      howToUse: "Apply a small amount to clean, dry skin in the morning. Gently massage in upward circular motions until fully absorbed. Use before applying sunscreen and makeup. For best results, use as part of your daily skincare routine. Can be used alone or layered with other anti-aging products. Store in a cool, dry place away from direct sunlight.",
      ingredients: "Water, Glycerin, Dimethicone, Niacinamide, Hyaluronic Acid, Retinol, Vitamin C, Salicylic Acid, Green Tea Extract, Witch Hazel, Jojoba Oil, Aloe Vera, Tocopheryl Acetate, Allantoin, Panthenol, Sodium Hyaluronate, Caffeine, Peptides, Fragrance, Phenoxyethanol, Methylparaben, Propylparaben, Citric Acid, Sodium Hydroxide."
    },
    ar: {
      title: "كريم النهار المجدد (البشرة الدهنية)",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات البشرة › طقم مضاد الشيخوخة › كريم النهار المجدد (البشرة الدهنية)",
      productDetail: "هذا الكريم الخفيف الخالي من الزيوت مصمم خصيصاً للبشرة الدهنية. يوفر الترطيب الأساسي دون إضافة زيوت زائدة، مع تقديم فوائد مضادة للشيخوخة قوية. يحتوي الكريم على مكونات متقدمة تساعد في التحكم في إنتاج الدهون وتقليل المسام وتوفير ملمس مطفأ. مصمم لحماية بشرتك من التلف البيئي مع الحفاظ على نضارتها وخالية من اللمعان طوال اليوم. مثالي لأصحاب البشرة الدهنية أو المختلطة الذين يريدون علاجاً مضاداً للشيخوخة فعالاً دون الشعور الثقيل والدهني للكريمات التقليدية.",
      howToUse: "ضع كمية صغيرة على بشرة نظيفة وجافة في الصباح. دلك برفق بحركات دائرية صاعدة حتى الامتصاص الكامل. استخدم قبل وضع واقي الشمس والمكياج. للحصول على أفضل النتائج، استخدم كجزء من روتين العناية بالبشرة اليومي. يمكن استخدامه بمفرده أو مع منتجات مضادة للشيخوخة أخرى. احفظ في مكان بارد وجاف بعيداً عن أشعة الشمس المباشرة.",
      ingredients: "ماء، جليسرين، ديميثيكون، نياسيناميد، حمض الهيالورونيك، ريتينول، فيتامين سي، حمض الساليسيليك، مستخلص الشاي الأخضر، هاماميليس، زيت الجوجوبا، الألوفيرا، أسيتات التوكوفيريل، ألانتوين، بانثينول، هيالورونات الصوديوم، كافيين، ببتيدات، عطر، فينوكسي إيثانول، ميثيل بارابين، بروبيل بارابين، حمض الستريك، هيدروكسيد الصوديوم."
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

      {/* Product Detail Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/120.jpg" 
                  alt={t.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Information */}
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 mb-6">
                {t.title}
              </h1>
              
              {/* Product Detail */}
              <div className="mb-8">
                <h2 className="text-2xl font-sans font-bold text-gray-900 mb-4">
                  {lang === "en" ? "Product Detail" : "تفاصيل المنتج"}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.productDetail}
                </p>
              </div>

              {/* How To Use */}
              <div className="mb-8">
                <h2 className="text-2xl font-sans font-bold text-gray-900 mb-4">
                  {lang === "en" ? "How To Use" : "طريقة الاستخدام"}
                </h2>
                <p className="text-lg text-gray-700">
                  {t.howToUse}
                </p>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h2 className="text-2xl font-sans font-bold text-gray-900 mb-4">
                  {lang === "en" ? "Ingredients" : "المكونات"}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t.ingredients}
                </p>
              </div>

              {/* Back Button */}
              <div className="flex gap-4">
                <a 
                  href="/products/skin/anti-aging-kit"
                  className="bg-gold-500 text-black px-8 py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300"
                >
                  {lang === "en" ? "← Back to Anti Aging Kit" : "← العودة لطقم مضاد الشيخوخة"}
                </a>
                <a 
                  href="/products/skin"
                  className="bg-gray-200 text-gray-800 px-8 py-3 rounded-xl font-sans font-semibold hover:bg-gray-300 transition-colors duration-300"
                >
                  {lang === "en" ? "← All Skin Products" : "← جميع منتجات البشرة"}
                </a>
              </div>
            </div>
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

