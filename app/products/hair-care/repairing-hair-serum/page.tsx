"use client";

import { useState } from "react";

export default function RepairingHairSerumPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Repairing Hair Serum",
      subtitle: "Multi-tasking serum for damaged, dry hair",
      breadcrumb: "Home › Learn More › Hair Products › Hair Care › Repairing Hair Serum",
      description: "REPAIRING HAIR SERUM from Moria is a multi-tasking serum for damaged, dry hair. The deep recovery serum formula is powered by a blend of nourishing vitamins and plant oils to help seal and repair split ends and restore moisture and shine. Vitamin E, shea butter, sunflower seed oil, argan oil, avocado oil and linseed oil combined, these ingredients help strengthen and protect hair by sealing the cuticle and preventing moisture loss work, and protecting against future damage. Enriching the hair to feel silky, healthy and revitalized.",
      howToUse: "Apply a small amount to damp or dry hair, focusing on the ends. Do not rinse. Style as usual.",
      ingredients: "Cyclopentasiloxane (and) Dimethiconol, Cyclopentasiloxane, Phenyl Trimethicone, Dimethicone, Fragrance, Butyrospermum Parkii (Shea) Butter, Plukenetia Volubilis Seed Oil (and) Tocopherol, Ceramide NG, Argania Spinosa Kernel Oil, Helianthus Annuus (Sunflower) Seed Oil, Linum usitatissimum (Linseed) Seed Oil, Persea Gratissima (Avocado) Oil, Tocopherol Acetate."
    },
    ar: {
      title: "سيروم إصلاح الشعر",
      subtitle: "سيروم متعدد المهام للشعر التالف والجاف",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات الشعر › العناية بالشعر › سيروم إصلاح الشعر",
      description: "سيروم إصلاح الشعر من موريا هو سيروم متعدد المهام للشعر التالف والجاف. تركيبة السيروم للاسترداد العميق مدعومة بمزيج من الفيتامينات المغذية والزيوت النباتية للمساعدة في إغلاق وإصلاح الأطراف المتقصفة واستعادة الرطوبة واللمعان. فيتامين E، زبدة الشيا، زيت بذور عباد الشمس، زيت الأرجان، زيت الأفوكادو وزيت الكتان مجتمعة، هذه المكونات تساعد في تقوية وحماية الشعر من خلال إغلاق البشرة ومنع فقدان الرطوبة، وحماية من التلف المستقبلي. إثراء الشعر ليشعر بالنعومة والصحة والحيوية.",
      howToUse: "ضع كمية صغيرة على الشعر الرطب أو الجاف، مع التركيز على الأطراف. لا تشطف. قم بتصفيف الشعر كالمعتاد.",
      ingredients: "سيكلوبنتاسيلوكسان (و) ديميثيكونول، سيكلوبنتاسيلوكسان، فينيل تريميثيكون، ديميثيكون، عطر، زبدة شيا باركيا، زيت بذور بلوكينيتيا فولوبيليس (و) توكوفيرول، سيراميد NG، زيت نواة الأرجان، زيت بذور عباد الشمس، زيت بذور الكتان، زيت الأفوكادو، أسيتات التوكوفيرول."
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="flex justify-center">
              <div className="w-80 h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/211.jpg" 
                  alt={t.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-sans font-bold text-gray-900 mb-4">
                  {t.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {t.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h2 className="text-2xl font-sans font-bold text-gray-900 mb-4">
                  {lang === "en" ? "Product Description" : "وصف المنتج"}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t.description}
                </p>
              </div>

              {/* How to Use */}
              <div className="bg-teal-50 rounded-2xl p-6">
                <h2 className="text-2xl font-sans font-bold text-gray-900 mb-4">
                  {lang === "en" ? "How To Use" : "طريقة الاستخدام"}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t.howToUse}
                </p>
              </div>

              {/* Ingredients */}
              <div className="bg-amber-50 rounded-2xl p-6">
                <h2 className="text-2xl font-sans font-bold text-gray-900 mb-4">
                  {lang === "en" ? "Ingredients" : "المكونات"}
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {t.ingredients}
                </p>
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
