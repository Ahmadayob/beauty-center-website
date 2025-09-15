"use client";

import { useState } from "react";
import LanguageToggle from "../../../../components/LanguageToggle";

export default function IntimateWhiteningCreamPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Intimate Whitening Cream",
      breadcrumb: "Home › Learn More › Skin Products › Intimate Whitening › Intimate Whitening Cream",
      productDetail: "The cream is intended to illuminate and unify the skin in areas where friction, hair removal or contact with clothing causes discoloration and the gradual appearance of darker areas, and effectively reduces the appearance of dark spots while presenting a very good tolerance, which allows a use on the most sensitive zones. Its rich texture is easily absorbed, soothes immediately and leaves the skin dry and soft. Day after day, the skin is moisturized and soothed, dark areas are illuminated and the skin becomes even. With: vitamin C, vitamin B3, O.D.A. white & Butylresorcinol.",
      howToUse: "Apply to the sensitive area on clean, dry skin and massage well until completely absorbed (for external use only)",
      ingredients: "Water, Cetyl Alcohol (and) Glyceryl Stearate (and) PEG-75 Stearate (and) Ceteth-20 (and) Steareth-20, Octadecenedioic Acid, Propylene Glycol, C12-15 Alkyl Benzoate, Niacinamide, 3-O-Ethyl Ascorbic Acid, Ascorbyl Glucoside, Ethoxydiglycol, Cetyl Stearate (And) Isostearyl Isostearate (And) Cetyl Alcohol (And) Potassium Cetyl Phosphate (And) Stearic Acid, Polyglyceryl-6 Distearate (and) Jojoba Esters (and) Polyglyceryl-3 Beeswax (and) Cetyl Alcohol, Squalane, Phenoxyethanol (and) Caprylyl Glycol, Sorbitan Tristearate, Acetyl Zingerone, Simmondsia Chinensis (Jojoba) Seed Oil, Bisabolol, Allantoin, 4-Butylresorcinol, Phenylethyl Resorcinol, Polyacrylate Crosspolymer-6, BHT, Sodium sulphite, Fragrance, Citric acid."
    },
    ar: {
      title: "كريم تبييض المناطق الحساسة",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات البشرة › تبييض المناطق الحساسة › كريم تبييض المناطق الحساسة",
      productDetail: "يُقصد بالكريم إضاءة وتوحيد لون البشرة في المناطق التي تسبب فيها الاحتكاك أو إزالة الشعر أو ملامسة الملابس تغير اللون وظهور تدريجي للمناطق الداكنة، ويقلل بشكل فعال من ظهور البقع الداكنة مع تقديم تحمل جيد جداً، مما يسمح بالاستخدام في أكثر المناطق حساسية. قوامه الغني يمتص بسهولة، يهدئ فوراً ويترك البشرة جافة وناعمة. يوماً بعد يوم، ترطب البشرة وتهدأ، تضاء المناطق الداكنة وتصبح البشرة متساوية. مع: فيتامين سي، فيتامين B3، O.D.A. أبيض وبوتيل ريسورسينول.",
      howToUse: "يُطبق على المنطقة الحساسة على بشرة نظيفة وجافة ويُدلك جيداً حتى الامتصاص الكامل (للاستخدام الخارجي فقط)",
      ingredients: "ماء، سيتيل الكحول، جليسيريل ستيرات، PEG-75 ستيرات، سيتيث-20، ستيريث-20، حمض الأوكتاديسينديويك، بروبيلين جليكول، C12-15 ألكيل بنزوات، نياسيناميد، 3-O-إيثيل أسكوربيك أسيد، أسكوربيل جلوكوزيد، إيثوكسي ديجليكول، سيتيل ستيرات، إيزوستيريل إيزوستيرات، سيتيل الكحول، فوسفات سيتيل البوتاسيوم، حمض الستياريك، بولي جليسيريل-6 ديستيرات، إسترات الجوجوبا، بولي جليسيريل-3 شمع النحل، سيتيل الكحول، سكوالان، فينوكسي إيثانول، كابريل جليكول، سوربيتان تريستيرات، أسيتيل زينجيرون، زيت بذور الجوجوبا، بيسابولول، ألانتوين، 4-بوتيل ريسورسينول، فينيل إيثيل ريسورسينول، بولي أكريلات كروس بوليمر-6، BHT، سلفيت الصوديوم، عطر، حمض الستريك."
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
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex flex-col items-center justify-center shadow-lg">
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

      {/* Product Detail Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/340.jpg" 
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
                  href="/products/skin/intimate-whitening"
                  className="bg-gold-500 text-black px-8 py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300"
                >
                  {lang === "en" ? "← Back to Intimate Whitening" : "← العودة لتبييض المناطق الحساسة"}
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

