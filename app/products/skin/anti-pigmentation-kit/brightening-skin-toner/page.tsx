"use client";

import { useState } from "react";

export default function BrighteningSkinTonerPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Brightening Skin Toner (All Skin Types)",
      breadcrumb: "Home › Learn More › Skin Products › Anti Pigmentation Kit › Brightening Skin Toner",
      productDetail: "This cutting-edge renewal cream harnesses the power of natural ingredients and advanced technology to gently refine skin texture, fade dark spots and renew clarity. A bakuchiol and lactic acid blend work to resurface and smooth, while vitamin B3 and aquaxyl help boost collagen production for firmer, plumper skin. Salicylic acid exfoliates to unclog pores and reduce breakouts, and a squalane and sodium hyaluronate moisture matrix hydrates and plumps. The result? A visibly renewed and restored complexion that looks years younger. All with a cream that's free of potentially irritating parabens, sulfates and phthalates.",
      howToUse: "Apply to clean skin after cleansing. Gently pat onto face and neck using fingertips. Use morning and evening for best results.",
      ingredients: "Water, Alcohol Denat, Propylene Glycol (and) Water (and) Hamamelis Virginiana (Witch Hazel) Extract, Isopentyldiol, Glycolic Acid, Niacinamide, Ethoxydiglycol, Xylitylglucoside (and) Anhydroxylitol (and) Xylitol, PEG-40 hydrogenated castor oil, Panthenol, Sodium Hydroxide, Imidazolidinyl Urea, 4-Butylresorcinol, Mentha Piperita (Peppermint) Oil, Allantoin, Methylparaben."
    },
    ar: {
      title: "تونر البشرة المضيء (جميع أنواع البشرة)",
      breadcrumb: "الرئيسية › اعرف المزيد › منتجات البشرة › طقم مضاد التصبغ › تونر البشرة المضيء",
      productDetail: "هذا الكريم المتجدد المتطور يستغل قوة المكونات الطبيعية والتكنولوجيا المتقدمة لتنعيم ملمس البشرة بلطف، وتلاشي البقع الداكنة وتجديد الوضوح. مزيج الباكوشيول وحمض اللاكتيك يعمل على إعادة السطح والتنعيم، بينما فيتامين B3 والأكواكسيل يساعدان على زيادة إنتاج الكولاجين للحصول على بشرة أكثر صلابة وامتلاءً. حمض الساليسيليك يقشر لإزالة انسداد المسام وتقليل البثور، ومصفوفة الرطوبة من السكوالين وهيالورونات الصوديوم ترطب وتنفخ. النتيجة؟ بشرة متجددة ومستعادة بشكل مرئي تبدو أصغر سناً. كل ذلك مع كريم خالٍ من البارابين والسلفات والفثالات المثيرة للتهيج.",
      howToUse: "ضعي على البشرة النظيفة بعد التنظيف. دلكي بلطف على الوجه والرقبة باستخدام أطراف الأصابع. استخدمي صباحاً ومساءً للحصول على أفضل النتائج.",
      ingredients: "ماء، كحول منزوع الطبيعة، بروبيلين جليكول (و) ماء (و) مستخلص Hamamelis Virginiana (المشتركة)، إيزوبنتيلديول، حمض الجليكوليك، نياسيناميد، إيثوكسي ديجليكول، زيليتيل جليكوزيد (و) أنهيدروكسيليتول (و) زايلتول، PEG-40 زيت الخروع المهدرج، بانثينول، هيدروكسيد الصوديوم، إيميدازوليدينيل يوريا، 4-بوتيلريسورسينول، زيت النعناع الفلفلي، ألانتوين، ميثيل بارابين."
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
                  src="/images/133.jpg" 
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

