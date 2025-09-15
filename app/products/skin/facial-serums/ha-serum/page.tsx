"use client";

import { useState } from "react";

export default function HASerumPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "H.A. Serum",
      breadcrumb: "Home › Learn More › Skin Products › Facial Serums › H.A. Serum",
      productDetail: "This potent serum harnesses the youth-giving powers of hyaluronic acid. Infused with a blend of vitamins, plant extracts and other nourishing ingredients, it hydrates, plumps and firms your skin for a dewy, radiant complexion. Optim-Hyal, the main active ingredient, helps stimulate your skin's natural hyaluronic acid production to maximize moisture levels. Betaine and Vitamin E team up to strengthen your skin's barrier while Vitamin B3 helps reduce the appearance of fine lines and dark spots. Allantoin and Transcutol help the active ingredients absorb quickly and efficiently so you see results fast.",
      howToUse: "undefined",
      ingredients: "Water, Hydrolyzed Yeast Extract (and) Cetyl Hydroxyethylcellulose (and) Polyglucuronic Acid (and) Lecithin, Squalane, Ethylhexyl Olivate (and) Sodium Acrylates Copolymer (and) Polyglyceryl-4 Olivate, Cyclopentasiloxane (and) Dimethiconol (and) Dimethicone Crosspolymer, Niacinamide, Ethoxydiglycol, Tocopheryl Acetate, Betaine, Xylitylglucoside (and) Anhydroxylitol (and) Xylitol, Cetyl Alcohol (and) Isostearyl Isostearate (and) Potassium Cetyl Phosphate (and) Cetyl Behenate (and) Behenic Acid, Panthenol, Sodium Hyaluronate, Allantoin, Imidazolidinyl Urea, Methylparaben, Fragrance, Ethylparaben, BHT."
    },
    ar: {
      title: "سيروم حمض الهيالورونيك",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات البشرة › سيرومات الوجه › سيروم حمض الهيالورونيك",
      productDetail: "يستغل هذا السيروم القوي قوى حمض الهيالورونيك المانحة للشباب. محقون بمزيج من الفيتامينات ومستخلصات النباتات ومكونات مغذية أخرى، يرطب ويملأ ويقوي بشرتك للحصول على بشرة ندية ومتوهجة. Optim-Hyal، المكون النشط الرئيسي، يساعد على تحفيز إنتاج بشرتك الطبيعي لحمض الهيالورونيك لتعظيم مستويات الرطوبة. يتحد البيتاين وفيتامين E لتقوية حاجز بشرتك بينما يساعد فيتامين B3 على تقليل مظهر الخطوط الدقيقة والبقع الداكنة. يساعد الألانتوين والترانزكوتول المكونات النشطة على الامتصاص بسرعة وكفاءة حتى ترى النتائج سريعاً.",
      howToUse: "غير محدد",
      ingredients: "ماء، مستخلص الخميرة المهدرجة، سيتيل هيدروكسي إيثيل سيلولوز، حمض بوليغلوكورونيك، ليسيثين، سكوالين، إيثيل هيكسيل أوليفات، بوليمر أكريلات الصوديوم، بوليغليسيريل-4 أوليفات، سيكلوبنتاسيلوكسان، ديميثيكونول، بوليمر ديميثيكون المتقاطع، نياسيناميد، إيثوكسي ديجليكول، أسيتات توكوفيريل، بيتاين، زايلتيغلوكوزيد، أنهيدروكسيليتول، زايلتول، كحول سيتيل، إيزوستيريل إيزوستيرات، فوسفات سيتيل البوتاسيوم، بيهينات سيتيل، حمض البيهينيك، بانثينول، هيالورونات الصوديوم، ألانتوين، إيميدازوليدينيل يوريا، ميثيل بارابين، عطر، إيثيل بارابين، BHT."
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
                  src="/images/192.jpg" 
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
                  href="/products/skin/facial-serums"
                  className="bg-gold-500 text-black px-8 py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300"
                >
                  {lang === "en" ? "← Back to Facial Serums" : "← العودة لسيرومات الوجه"}
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


