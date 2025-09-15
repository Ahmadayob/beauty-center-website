"use client";

import { useState } from "react";

export default function AminoAcidMicellarDryPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [showLangConfirm, setShowLangConfirm] = useState(false);
  const [pendingLang, setPendingLang] = useState<"en" | "ar" | null>(null);

  const handleLangClick = (newLang: "en" | "ar") => {
    if (newLang === lang) return;
    
    setPendingLang(newLang);
    setShowLangConfirm(true);
  };

  const confirmLangChange = () => {
    if (pendingLang) {
      setLang(pendingLang);
      setShowLangConfirm(false);
      setPendingLang(null);
    }
  };

  const cancelLangChange = () => {
    setShowLangConfirm(false);
    setPendingLang(null);
  };

  const content = {
    en: {
      title: "Amino Acid Micellar Solution (for dry skin)",
      breadcrumb: "Home › Learn More › Skin Products › Cleansers, Toner and Micellars › Amino Acid Micellar Solution (for dry skin)",
      productDetail: "A simple yet effective way to cleanse and nourish dry skin, this micellar solution from MORIA attracts and dissolves make-up and impurities with its blend of 8 amino acids, vitamin B3, pro-vitamin B5 and hamamelis virginiana to gently tone and refresh your complexion. Leave your face feeling soft and supple without the tightness that can accompany traditional face washes.",
      howToUse: "undefined",
      ingredients: "Water, Hexylen Glycol, Sodium Cocoyl Apple Amino Acids, Isopentyldiol, Glycerin, Niacinamide, Trehalose, Betaine (and) Sodium PCA (and) Sodium Lactate (and) PCA (and) Serine (and) Alanine (and) Glycine (and) Glutamic Acid (and) Lysine HCl (and) Threonine (and) Arginine (and) Proline (and) Water, Capryloyl Glycine, Caprylyl/Capryl Glucoside, Panhenol, Propylene Glycol (and) Water (and) Hamamelis Virginiana (Witch Hazel) Extract, Xylitylglucoside (and) Anhydroxylitol (and) Xylitol, Allantoin, Imidazolidinyl Urea, Fragrance, Methyl Paraben, Citric Acid"
    },
    ar: {
      title: "محلول الميسيلار بالأحماض الأمينية (للبشرة الجافة)",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات البشرة › منظفات، تونر وميسيلار › محلول الميسيلار بالأحماض الأمينية (للبشرة الجافة)",
      productDetail: "طريقة بسيطة وفعالة لتنظيف وتغذية البشرة الجافة، يجذب هذا المحلول الميسيلار من موريا ويذيب المكياج والشوائب بمزيج من 8 أحماض أمينية وفيتامين B3 وفيتامين B5 المسبق وهاماميليس فيرجينيانا لتنعيم وتنشيط بشرتك بلطف. اتركي وجهك يشعر بالنعومة والمرونة دون الضيق الذي قد يرافق غسولات الوجه التقليدية.",
      howToUse: "غير محدد",
      ingredients: "ماء، هيكسيلين جليكول، أحماض أمينية كوكويل التفاح الصوديوم، إيزوبنتيلديول، جليسرين، نياسيناميد، تريهالوز، بيتاين، PCA الصوديوم، لاكتات الصوديوم، PCA، سيرين، ألانين، جليسين، حمض الجلوتاميك، ليسين HCl، ثريونين، أرجينين، برولين، ماء، كابريلويل جليسين، كابريل/كابريل جلوكوزيد، بانثينول، بروبيلين جليكول، ماء، مستخلص هاماميليس فيرجينيانا، زايلتيغلوكوزيد، أنهيدروكسيليتول، زايلتول، ألانتوين، إيميدازوليدينيل يوريا، عطر، ميثيل بارابين، حمض الستريك"
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
              <div className="flex gap-2">
                <button
                  onClick={() => handleLangClick("en")}
                  className={`px-4 py-2 rounded-full font-sans font-semibold transition-colors duration-300 ${
                    lang === "en" 
                      ? "bg-gold-500 text-black" 
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => handleLangClick("ar")}
                  className={`px-4 py-2 rounded-full font-sans font-semibold transition-colors duration-300 ${
                    lang === "ar" 
                      ? "bg-gold-500 text-black" 
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  عربي
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Language Change Confirmation Modal */}
      {showLangConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
            <h3 className="text-xl font-sans font-bold text-gray-900 mb-4 text-center">
              {lang === "en" ? "Change Language?" : "تغيير اللغة؟"}
            </h3>
            <p className="text-gray-600 mb-6 text-center font-sans">
              {lang === "en" 
                ? `Are you sure you want to change the language to ${pendingLang === "ar" ? "Arabic" : "English"}?`
                : `هل أنت متأكد من أنك تريد تغيير اللغة إلى ${pendingLang === "en" ? "الإنجليزية" : "العربية"}؟`
              }
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={confirmLangChange}
                className="bg-gold-500 text-black px-6 py-2 rounded-lg font-sans font-semibold hover:bg-gold-600 transition-colors duration-300"
              >
                {lang === "en" ? "Yes, Change" : "نعم، غيّر"}
              </button>
              <button
                onClick={cancelLangChange}
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-sans font-semibold hover:bg-gray-300 transition-colors duration-300"
              >
                {lang === "en" ? "Cancel" : "إلغاء"}
              </button>
            </div>
          </div>
        </div>
      )}

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
                  src="/images/166.jpg" 
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
                  href="/products/skin/cleansers-toner-micellars"
                  className="bg-gold-500 text-black px-8 py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300"
                >
                  {lang === "en" ? "← Back to Cleansers, Toner and Micellars" : "← العودة للمنظفات والتونر والميسيلار"}
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
