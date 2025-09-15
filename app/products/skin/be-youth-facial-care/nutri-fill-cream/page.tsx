"use client";

import { useState } from "react";

export default function NutriFillCreamPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Nutri Fill Cream",
      breadcrumb: "Home › Learn More › Skin Products › Be Youth Facial Care › Nutri Fill Cream",
      productDetail: "This nighttime cream is formulated with a powerful blend of ingredients that work together to repair and rejuvenate skin while you sleep. An inchi oil and squalene rich base hydrates and nourishes, while jojoba oil conditions and softens. Matrixyl 3000 helps stimulate collagen production for firmer, younger-looking skin. Vitamin E and ceramide work to protect skin from free radical damage and moisture loss. Together, this potent formula aims to leave your complexion nourished, replenished and glowing by morning. Slather it on before bed to wake up to skin that looks and feels renewed, refreshed and ready to take on the day.",
      howToUse: "Apply a generous amount to clean skin before bedtime. Gently massage into face and neck using upward circular motions until fully absorbed. Use nightly for best results.",
      ingredients: "Water, Propandiol, Glycerin, Plukenetia volubilis seed oil, Triheptanion, Cetyl Alcohol, Squlane, Glyceryl Stearate, Ethoxydiglycol, Peg-75 Stearate, Cetyl Stearate, Simmondsia Chinensis (Jojoba) Seed Oil, Niacinamid, Butyrospermum Parkii (Shea) Butter, Phenoxyethanol, Steareth-20, Cetete-20, Butylene Glycol, Potassium Cetyl Phosphate, Isostearyl Isostearate, Diethylhexyl syringylidene malonate, Caprylyl Glycol, Behenyl Alcohol, Chlorphenesin, Fragrance, Polyglyceryl-10 pentastearate, Sodium Hydroxide, Tocopherol Acetate, Disodium EDTA, BHT, Sodium Isostearoyl Lactylate, Methylglucoside Phosphate, Stearic Acid, Carbomer, Ceramide 6II, Ceramide 3, Phytosteryl Isostearate, Ceramide 2, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide 7, Copper Lysinate/Prolinate, Polysorbate 20, Dextran, Caprooyl tetrapeptide-3."
    },
    ar: {
      title: "كريم نوتري فيل",
      breadcrumb: "الرئيسية › اعرف المزيد › منتجات البشرة › عناية الوجه الشبابية › كريم نوتري فيل",
      productDetail: "هذا الكريم الليلي مصنوع بمزيج قوي من المكونات التي تعمل معاً لإصلاح وتجديد البشرة أثناء النوم. قاعدة غنية بزيت الإنكا والسكوالين ترطب وتغذي، بينما زيت الجوجوبا يلطف ويطري. Matrixyl 3000 يساعد على تحفيز إنتاج الكولاجين لبشرة أكثر صلابة ومظهراً شاباً. فيتامين E والسيراميد يعملان لحماية البشرة من أضرار الجذور الحرة وفقدان الرطوبة. معاً، تهدف هذه الصيغة القوية إلى ترك بشرتك مغذية ومجددة ومتوهجة عند الصباح. ضعيها قبل النوم لتستيقظي على بشرة تبدو وتشعر بالجدة والانتعاش والاستعداد لمواجهة اليوم.",
      howToUse: "ضعي كمية وفيرة على البشرة النظيفة قبل النوم. دلكي بلطف على الوجه والرقبة بحركات دائرية صاعدة حتى الامتصاص الكامل. استخدمي كل ليلة للحصول على أفضل النتائج.",
      ingredients: "ماء، بروباندول، جليسرين، زيت بذور بلوكينيتيا فولوبيليس، تريهبتانيون، سيتيل الكحول، سكوالين، جليسرين ستيرات، إيثوكسي ديجليكول، PEG-75 ستيرات، سيتيل ستيرات، زيت بذور الجوجوبا، نياسيناميد، زبدة الشيا، فينوكسي إيثانول، ستيريث-20، سيتيت-20، بوتيلين جليكول، فوسفات سيتيل البوتاسيوم، إيزوستيريل إيزوستيرات، مالونات ثنائي إيثيل هيكسيل سيرينجيلدين، كابريل جليكول، بيهاينيل الكحول، كلورفينيسين، عطر، بولي جليسرين-10 بنتاستيرات، هيدروكسيد الصوديوم، أسيتات التوكوفيريل، EDTA ثنائي الصوديوم، BHT، لاكتيلات إيزوستيرويل الصوديوم، فوسفات ميثيل جليكوزيد، حمض الستياريك، كاربومر، سيراميد 6II، سيراميد 3، إيزوستيرات فيتوستيريل، سيراميد 2، بالميتويل تريبتيد-1، بالميتويل تترابتيد 7، ليسينات/برولينات النحاس، بولي سوربات 20، دكستران، كابرويل تترابتيد-3."
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
                  src="/images/143.jpg" 
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

