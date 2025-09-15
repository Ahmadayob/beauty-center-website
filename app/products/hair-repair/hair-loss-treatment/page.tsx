"use client";

import { useState } from "react";

export default function HairLossTreatmentPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Hair Loss Treatment",
      breadcrumb: "Home › Learn More › Hair Products › Hair Repair › Hair Loss Treatment",
      productDetail: "This professional hair loss treatment is formulated with advanced ingredients to combat hair thinning and promote healthy hair regrowth. The intensive treatment targets the root causes of hair loss while strengthening existing hair follicles. Our Hair Loss Treatment is a professional-grade solution designed to address various types of hair thinning and loss. Formulated with clinically proven ingredients, this treatment works at the cellular level to stimulate dormant hair follicles, improve scalp circulation, and create an optimal environment for hair growth. Whether you're experiencing age-related hair loss, stress-induced thinning, or hormonal changes, this treatment provides comprehensive support for healthier, thicker hair.",
      howToUse: "Start with clean, dry hair and scalp. Part your hair to expose areas of thinning. Apply 1-2 pumps directly to the scalp in affected areas. Gently massage with fingertips for 2-3 minutes. Allow to dry completely before styling. Use twice daily for optimal results. Wash hands thoroughly after application. Continue treatment for 3-6 months for best results.",
      ingredients: "Water, Minoxidil 5%, Caffeine, Biotin (Vitamin B7), Saw Palmetto Extract, Pumpkin Seed Oil, Niacinamide, Peptides, Amino Acids, Jojoba Oil, Tea Tree Oil, Panthenol, Glycerin, Dimethicone, Fragrance, Tocopheryl Acetate, Arginine, Aspartic Acid, Glycine, Alanine, PCA, Isostearamide, Methylparaben, Propylparaben, Imidazolidinyl Urea, Citric Acid, Sodium Hydroxide."
    },
    ar: {
      title: "علاج تساقط الشعر",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات الشعر › إصلاح الشعر › علاج تساقط الشعر",
      productDetail: "هذا العلاج المهني لتساقط الشعر مصنوع بمكونات متقدمة لمحاربة ترقق الشعر وتعزيز إعادة نمو الشعر الصحي. العلاج المكثف يستهدف الأسباب الجذرية لتساقط الشعر مع تقوية بصيلات الشعر الموجودة. علاج تساقط الشعر لدينا هو حل من الدرجة المهنية مصمم لمعالجة أنواع مختلفة من ترقق الشعر وتساقطه. مصنوع بمكونات مثبتة سريرياً، يعمل هذا العلاج على المستوى الخلوي لتحفيز بصيلات الشعر الخاملة، وتحسين الدورة الدموية في فروة الرأس، وخلق بيئة مثلى لنمو الشعر. سواء كنت تعاني من تساقط الشعر المرتبط بالعمر، أو ترقق الشعر الناجم عن الإجهاد، أو التغيرات الهرمونية، يوفر هذا العلاج دعماً شاملاً لشعر أكثر صحة وكثافة.",
      howToUse: "ابدأ بشعر وفروة رأس نظيفة وجافة. قسم شعرك لكشف المناطق المتأثرة بالترقق. ضع 1-2 ضغطة مباشرة على فروة الرأس في المناطق المتأثرة. دلك برفق بأطراف الأصابع لمدة 2-3 دقائق. اتركه يجف تماماً قبل التصفيف. استخدم مرتين يومياً للحصول على أفضل النتائج. اغسل يديك جيداً بعد الاستخدام. استمر في العلاج لمدة 3-6 أشهر للحصول على أفضل النتائج.",
      ingredients: "ماء، مينوكسيديل 5%، كافيين، بيوتين (فيتامين ب7)، مستخلص ساو بالميتو، زيت بذور اليقطين، نياسيناميد، ببتيدات، أحماض أمينية، زيت الجوجوبا، زيت شجرة الشاي، بانثينول، جليسرين، ديميثيكون، عطر، أسيتات التوكوفيريل، أرجينين، حمض الأسبارتيك، جلايسين، ألانين، PCA، إيزوستيراميد، ميثيل بارابين، بروبيل بارابين، إيميدازوليدينيل يوريا، حمض الستريك، هيدروكسيد الصوديوم."
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
                  src="/images/10b5d489-aa01-4e4f-b3ea-387e8d957e91.jpg" 
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
