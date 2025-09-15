"use client";

import { useState } from "react";

export default function EyeContourCreamPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Eye Contour Cream",
      breadcrumb: "Home › Learn More › Skin Products › Be Youth Facial Care › Eye Contour Cream",
      productDetail: "This eye contour cream harnesses the power of caffeine, squalene, and a potent blend of vitamins and anti-aging peptides to banish puffiness, dark circles, and fine lines with playful panache. The formula infuses skin with caffeine to reduce swelling and jojoba oil and squalene to deeply moisturize and soothe, while vitamin C brightens, vitamin E protects, and Matrixyl 3000 and Cytobiol-lumin-eye help boost collagen production and firmness. Together, these ingredients work to visibly restore radiance and youth to the delicate eye area, leaving you with wide awake, rejuvenated eyes that make a stylish statement.",
      howToUse: "Apply a small amount to the eye contour area using your ring finger. Gently pat and massage in circular motions until fully absorbed. Use morning and evening for best results. Avoid direct contact with eyes.",
      ingredients: "Water, Cetyl Alcohol, Squalane, Propandiol, Simmondsia Chinensis (Jojoba) Seed Oil, Isononyl Isononanoate, Glyceryl Stearate Citrate, Cetearyl Alcohol, Butylene Glycol, Glycerin, Caffeine, Ethoxydiglycol, Phenoxyethanol, Niacinamide, Butyrospermum Parkii (Shea Butter), Castor Oil, Diethylhexyl syringylidene malonate, 3-O-Ethoxy Ascorbic Acid, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Sorbitan Tristearate, HA (powder), Fraxinus Excelsior Bark Extract, Caprylyl Glycol, Panthenol, Glyceryl Caprylate, Dipalmitoyl Hydroxyproline, Fragrance,Voluform, Xanthan Gum, Sodium Hydroxid, Tocopherol, Tocopheryl Acetate, Carbomer, Silanetriol, Polysorbate 20, Potassium Citrate, Chlorphenesin, BHT, Disodium EDTA."
    },
    ar: {
      title: "كريم محيط العين",
      breadcrumb: "الرئيسية › اعرف المزيد › منتجات البشرة › عناية الوجه الشبابية › كريم محيط العين",
      productDetail: "هذا الكريم لمحيط العين يستغل قوة الكافيين والسكوالين ومزيج قوي من الفيتامينات والببتيدات المضادة للشيخوخة لطرد الانتفاخ والهالات السوداء والخطوط الدقيقة ببراعة. الصيغة تغمر البشرة بالكافيين لتقليل التورم وزيت الجوجوبا والسكوالين لترطيب وتهدئة عميق، بينما فيتامين C يضيء وفيتامين E يحمي، وMatrixyl 3000 وCytobiol-lumin-eye يساعدان على زيادة إنتاج الكولاجين والصلابة. معاً، تعمل هذه المكونات على استعادة الإشراق والشباب بشكل مرئي للمنطقة الحساسة حول العين، مما يتركك بعيون مستيقظة ومجددة تترك انطباعاً أنيقاً.",
      howToUse: "ضعي كمية صغيرة على منطقة محيط العين باستخدام إصبع البنصر. دلكي بلطف بحركات دائرية حتى الامتصاص الكامل. استخدمي صباحاً ومساءً للحصول على أفضل النتائج. تجنبي التلامس المباشر مع العينين.",
      ingredients: "ماء، سيتيل الكحول، سكوالين، بروباندول، زيت بذور الجوجوبا، إيزونونيل إيزونونوات، سترات جليسرين ستيرات، سيتيريل الكحول، بوتيلين جليكول، جليسرين، كافيين، إيثوكسي ديجليكول، فينوكسي إيثانول، نياسيناميد، زبدة الشيا، زيت الخروع، مالونات ثنائي إيثيل هيكسيل سيرينجيلدين، حمض الأسكوربيك 3-O-إيثوكسي، بالميتويل تريبتيد-1، بالميتويل تترابتيد-7، سوربيتان تريستيرات، HA (مسحوق)، مستخلص لحاء فراكسينوس إكسلسيور، كابريل جليكول، بانثينول، كابريلات جليسرين، ديبالميتويل هيدروكسي برولين، عطر، فولوفورم، زانثان غم، هيدروكسيد الصوديوم، توكوفيرول، أسيتات التوكوفيريل، كاربومر، سيلانيتريول، بولي سوربات 20، سترات البوتاسيوم، كلورفينيسين، BHT، EDTA ثنائي الصوديوم."
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
                  src="/images/140.jpg" 
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
                  href="/products/skin/be-youth-facial-care"
                  className="bg-gold-500 text-black px-8 py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300"
                >
                  {lang === "en" ? "← Back to Be Youth Facial Care" : "← العودة لعناية الوجه الشبابية"}
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

