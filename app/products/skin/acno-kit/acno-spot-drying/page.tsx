"use client";

import { useState } from "react";

export default function AcnoSpotDryingPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Acno Spot Drying Suspension",
      breadcrumb: "Home › Learn More › Skin Products › Acno Kit › Acno Spot Drying Suspension",
      productDetail: "This potent potion of a spot treatment fights acne with a balanced blend of Azelaic acid, Sulfur, tea tree oil and zinc oxide to unclog pores, curb oil and combat bacteria. Salicylic acid exfoliates to sweep away dead skin cells and speed healing, while niacinamide helps soothe redness and irritation. The result? Blemishes are banished and problem patches fade fast, leaving your complexion clear, calm and evenly toned.",
      howToUse: "undefined",
      ingredients: "Water, SD Alcohol 40, Zinc Oxide, Butylene Glycol, Zea Mays (Corn) Starch, Glycerin, Niacinamide, Sulfur, Caprylic/Capric Triglyceride, Simmondsia Chinensis (Jojoba) Seed Oil, PEG-100 Stearate (and) Glyceryl Stearate, Cetyl Alcohol (and) Glyceryl Stearate (and), PEG-75 Stearate (and) Ceteth-20 (and) Steareth-20, Salicylic Acid, Phenoxyethanol (and) Caprylyl Glycol, Allantoin, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Chlorphenesin, Thymus Vulgaris (Thyme) Flower/Leaf Oil, Mentha Piperita (Peppermint) Leaf Extract."
    },
    ar: {
      title: "معلق تجفيف البقع لحب الشباب",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات البشرة › طقم حب الشباب › معلق تجفيف البقع لحب الشباب",
      productDetail: "هذا العلاج الموضعي القوي يحارب حب الشباب بمزيج متوازن من حمض الأزيلايك والكبريت وزيت شجرة الشاي وأكسيد الزنك لإزالة انسداد المسام وكبح الدهون ومحاربة البكتيريا. حمض الساليسيليك يقشر لمسح خلايا الجلد الميتة وتسريع الشفاء، بينما يساعد النياسيناميد في تهدئة الاحمرار والتهيج. النتيجة؟ يتم طرد العيوب وتتلاشى البقع المشكلة بسرعة، تاركة بشرتك صافية وهادئة ومتساوية اللون.",
      howToUse: "غير محدد",
      ingredients: "ماء، كحول SD 40، أكسيد الزنك، بوتيلين جليكول، نشا الذرة، جليسرين، نياسيناميد، كبريت، كابريليك/كابريك تريجليسيريد، زيت بذور الجوجوبا، PEG-100 ستيارات، جليسيريل ستيارات، كحول سيتيل، جليسيريل ستيارات، PEG-75 ستيارات، سيتيث-20، ستيريث-20، حمض الساليسيليك، فينوكسي إيثانول، كابريليل جليكول، ألانتوين، زيت شجرة الشاي، كلورفينيسين، زيت الزعتر، مستخلص أوراق النعناع."
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
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-black font-bold text-lg">L</span>
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
                  src="/images/113 (1).jpg" 
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
                <p className="text-lg text-gray-700 leading-relaxed font-sans">
                  {t.productDetail}
                </p>
              </div>

              {/* How To Use */}
              <div className="mb-8">
                <h2 className="text-2xl font-sans font-bold text-gray-900 mb-4">
                  {lang === "en" ? "How To Use" : "طريقة الاستخدام"}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed font-sans">
                  {t.howToUse}
                </p>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h2 className="text-2xl font-sans font-bold text-gray-900 mb-4">
                  {lang === "en" ? "Ingredients" : "المكونات"}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed font-sans">
                  {t.ingredients}
                </p>
              </div>

              {/* Back Button */}
              <div className="flex gap-4">
                <a 
                  href="/products/skin/acno-kit"
                  className="bg-gold-500 text-black px-8 py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300"
                >
                  {lang === "en" ? "← Back to Acno Kit" : "← العودة لطقم حب الشباب"}
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
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xl">L</span>
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
