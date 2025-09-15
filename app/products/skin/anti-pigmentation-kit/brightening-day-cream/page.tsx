"use client";

import { useState } from "react";

export default function BrighteningDayCreamPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Brightening Day Cream (All Skin Types)",
      breadcrumb: "Home › Learn More › Skin Products › Anti Pigmentation Kit › Brightening Day Cream",
      productDetail: "This day cream by Moria infuses youthful radiance into your skin with a blend of hydrating and brightening ingredients. Jojoba oil and squalane nourish and moisturize, while bakuchiol and inca inchi oil offer a retinol alternative to smooth fine lines. Matrixyl 3000 with sodium hyaluronate and ascorbyl tetraisopalmitate stimulate collagen production and cell turnover for firmer, plumper skin, and 3-O- Ethxy Ascorbic Acid help brighten dark spots and even out your tone. Niacinamide rounds out the formula to improve clarity and reduce the appearance of pores. The lightweight texture absorbs quickly, leaving skin feeling soft, replenished and glowing from within.",
      howToUse: "Apply to clean skin in the morning. Gently massage into face and neck using upward circular motions until fully absorbed. Can be used under makeup. Use daily for best results.",
      ingredients: "Water, Propandiol, Triheptanoin, Cetyl Alcohol, Plukenetia volubilis seed oil, Glyceryl Setearate, Simmondsia Chinensis (Jojoba) Seed Oil, Squalane, Glycerin, Peg-75 Stearate, Cetyl Stearate, Niazinamid, 3-O- Ethxy Ascorbic Acid, Ethoxydiglycol, Sodium Hyaluronate, Palmitoyl Tetrapeptide 7, Palmitoyl Tripeptide-1, Tocopherol, Steareth-20, Cetete-20, Butylene Glycol, Isostearyl Isostearate, Potassium Cetyl Phosphate, Bakuchiol, Panthenol, Caprylyl Glycol, Phenoxyethanol, Chlorphenesin, Fragrance, Ascorbyl Tetraisopalmitate, Disodium EDTA, BHT, Stearic Acid, Polysorbate 20, Carbomer."
    },
    ar: {
      title: "كريم النهار المضيء (جميع أنواع البشرة)",
      breadcrumb: "الرئيسية › اعرف المزيد › منتجات البشرة › طقم مضاد التصبغ › كريم النهار المضيء",
      productDetail: "هذا الكريم النهاري من Moria يضخ الإشراق الشبابي في بشرتك بمزيج من المكونات المرطبة والمضيئة. زيت الجوجوبا والسكوالين يغذيان ويرطبان، بينما الباكوشيول وزيت الإنكا إنشي يقدمان بديلاً للريتينول لتنعيم الخطوط الدقيقة. Matrixyl 3000 مع هيالورونات الصوديوم وتترايسوبالميتات الأسكوربيل يحفزان إنتاج الكولاجين ودوران الخلايا للحصول على بشرة أكثر صلابة وامتلاءً، وحمض الأسكوربيك 3-O-إيثوكسي يساعد على تفتيح البقع الداكنة وتوحيد اللون. النياسيناميد يكمل الصيغة لتحسين الوضوح وتقليل مظهر المسام. الملمس الخفيف يمتص بسرعة، تاركاً البشرة ناعمة ومجددة ومتوهجة من الداخل.",
      howToUse: "ضعي على البشرة النظيفة في الصباح. دلكي بلطف على الوجه والرقبة بحركات دائرية صاعدة حتى الامتصاص الكامل. يمكن استخدامه تحت المكياج. استخدمي يومياً للحصول على أفضل النتائج.",
      ingredients: "ماء، بروباندول، تريهبتانوين، سيتيل الكحول، زيت بذور بلوكينيتيا فولوبيليس، جليسرين ستيرات، زيت بذور الجوجوبا، سكوالين، جليسرين، PEG-75 ستيرات، سيتيل ستيرات، نياسيناميد، حمض الأسكوربيك 3-O-إيثوكسي، إيثوكسي ديجليكول، هيالورونات الصوديوم، بالميتويل تترابتيد 7، بالميتويل تريبتيد-1، توكوفيرول، ستيريث-20، سيتيت-20، بوتيلين جليكول، إيزوستيريل إيزوستيرات، فوسفات سيتيل البوتاسيوم، باكوشيول، بانثينول، كابريل جليكول، فينوكسي إيثانول، كلورفينيسين، عطر، تترايسوبالميتات الأسكوربيل، EDTA ثنائي الصوديوم، BHT، حمض الستياريك، بولي سوربات 20، كاربومر."
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
                  src="/images/132.jpg" 
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
                <p className="text-lg text-gray-700 leading-relaxed">
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
                  href="/products/skin/anti-pigmentation-kit"
                  className="bg-gold-500 text-black px-8 py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300"
                >
                  {lang === "en" ? "← Back to Anti Pigmentation Kit" : "← العودة لطقم مضاد التصبغ"}
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

