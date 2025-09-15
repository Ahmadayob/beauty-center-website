"use client";

import { useState } from "react";

export default function AntiDandruffShampooPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Anti Dandruff Shampoo",
      breadcrumb: "Home › Learn More › Hair Products › Hair Repair › Anti Dandruff Shampoo",
      productDetail: "This potent shampoo attacks dandruff at its roots with a blend of vitamins, acids and amino acids that nourish your scalp while eliminating flakes. Glycolic acid works to exfoliate dead skin cells and unclog pores, while salicylic acid helps soothe irritation and redness. The amino acids biotin and arginine strengthen hair follicles for healthier growth, and vitamin B3 and pro-vitamin B5 moisturize to restore your scalp's natural balance. Together, these active ingredients form an innovative formula that tackles dandruff symptoms, leaving you with noticeably fuller, softer hair and a refreshed, itch-free scalp. One wash and you'll see fewer flakes and feel the difference - your scalp finally freed from dandruff's uncomfortable grip and your confidence restored, thanks to this clarifying, conditioning shampoo.",
      howToUse: "undefined",
      ingredients: "Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Cocamide DEA, Niacinamide, Glycerin, Betaine, Isopentyldiol, Polyquaternium 7, Glycol Stearate, Cetyl Alcohol, Fragrance, Salicylic Acid, Glycolic Acid, Methylparaben (and) Ethylparaben (and) Propylparaben (and) Phenoxyethanol, Piroctone Olamine, Panthenol, Bis-Ethyl(isostearylimidazoline) Isostearamide, Arginine, Aqua (and) Hydrolyzed Keratin, Polyquaternium 10, Guar Hydroxypropyltrimonium Chloride, Menthol."
    },
    ar: {
      title: "شامبو مضاد للقشرة",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات الشعر › إصلاح الشعر › شامبو مضاد للقشرة",
      productDetail: "هذا الشامبو القوي يهاجم القشرة من جذورها بمزيج من الفيتامينات والأحماض والأحماض الأمينية التي تغذي فروة رأسك بينما تقضي على القشور. يعمل حمض الجليكوليك على تقشير خلايا الجلد الميتة وإزالة انسداد المسام، بينما يساعد حمض الساليسيليك على تهدئة التهيج والاحمرار. تقوي الأحماض الأمينية البيوتين والأرجينين بصيلات الشعر لنمو أكثر صحة، وترطب فيتامين B3 والبرو-فيتامين B5 لاستعادة التوازن الطبيعي لفروة رأسك. معاً، تشكل هذه المكونات النشطة صيغة مبتكرة تتعامل مع أعراض القشرة، تاركة لك شعراً أكثر كثافة ونعومة بشكل ملحوظ وفروة رأس منعشة وخالية من الحكة. بغسلة واحدة سترى قشوراً أقل وتشعر بالفرق - فروة رأسك محررة أخيراً من قبضة القشرة غير المريحة وثقتك مستعادة، بفضل هذا الشامبو المنظف والمكيف.",
      howToUse: "غير محدد",
      ingredients: "ماء، لوريث سلفات الصوديوم، كوكاميدوبروبيل بيتاين، كوكاميد DEA، نياسيناميد، جليسرين، بيتاين، إيزوبنتيلديول، بولي كواترنيوم 7، جليكول ستيرات، سيتيل الكحول، عطر، حمض الساليسيليك، حمض الجليكوليك، ميثيل بارابين (و) إيثيل بارابين (و) بروبيل بارابين (و) فينوكسي إيثانول، بيروكتون أولامين، بانثينول، بيس-إيثيل (إيزوستيريليميدازولين) إيزوستيراميد، أرجينين، أكوا (و) كيراتين مهدرج، بولي كواترنيوم 10، غوار هيدروكسي بروبيل ترايمونيوم كلوريد، منثول."
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
                  src="/images/504.jpg" 
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
                  href="/products/hair-repair"
                  className="bg-gold-500 text-black px-8 py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300"
                >
                  {lang === "en" ? "← Back to Hair Repair" : "← العودة لإصلاح الشعر"}
                </a>
                <a 
                  href="/products/hair"
                  className="bg-gray-200 text-gray-800 px-8 py-3 rounded-xl font-sans font-semibold hover:bg-gray-300 transition-colors duration-300"
                >
                  {lang === "en" ? "← All Hair Products" : "← جميع منتجات الشعر"}
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
