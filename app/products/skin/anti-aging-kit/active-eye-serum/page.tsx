"use client";

import { useState } from "react";

export default function ActiveEyeSerumPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Active Eye Serum",
      breadcrumb: "Home › Learn More › Skin Products › Anti Aging Kit › Active Eye Serum",
      productDetail: "This premium active eye serum harnesses the power of peptides, caffeine, squalane, and a Matrixyl blend to rejuvenate, depuff, and brighten tired eyes. Packed with potent ingredients like Argireline, Haloxyl, and Eyeliss, this formula works to reduce the appearance of fine lines, dark circles, and puffiness. Vitamin E, hyaluronic acid, and a Cytobiol-Lumin-eye complex nourish and moisturize the delicate skin around your eyes, helping it regain its youthful glow. In just a few short weeks, you'll start to see a noticeable difference - lines will appear softened, dark circles diminished, and puffiness reduced. This powerful, yet gentle, eye serum utilizes the latest active ingredients to help you achieve the bright, awake, youthful eyes you've been looking for.",
      howToUse: "undefined",
      ingredients: "Water,  Hydrolyzed Yeast Extract, Cetyl Alcohol (and) Isostearyl Isostearate (and) Potassium Cetyl Phosphate (and) Cetyl Stearate (and) Stearic Acid, Glyceryl Stearate (and) Polyglyceryl-6 Palmitate/Succinate (and) Cetearyl Alcohol, Imperata Cylindrica Root Extract (and) Aqua (and) Glycerin (and) PEG-8 (and) Carbomer, Squalane, Simmondsia Chinensis (Jojoba) seed Oil, Caprylic/Capric Triglyceride (and) Alaria Esculenta Extract, Glycerin (and) Water (Aqua) (and) Butylene Glycol (and) Carbomer (and) Polysorbate 20 (and) Palmitoyl Oligopeptide (and) Palmitoyl Tetrapeptide-7, Jojoba Oil, Xylitylglucoside, Anhydroxylitol, Xylitol, Cetearyl Alcohol (and) Dicetyl Phosphate (and) Ceteth-10 Phosphate, C10-30 Cholesterol/Lanosterol Esters, Phospholipids (and) Glycine Soja (Soybean) Oil (and) Glycolipids (and) Glycine Soja (Soybean) Sterols, caffeine, Water, Propylene Glycol, Phytosterols, Palmitoyl Glycine, Dipalmitoyl Hydroxyproline, Glycogen, palmitoyl isoleucine, Sodium Cocoyl Alaninate, Imidazolidinyl Urea, Methylparaben, Fragrance, Propylparaben, Butylphenyl Methylpropional, Hexyl Cinnamal, Linalool, Limonene, Alpha-Isomethyl Ionone, Citronellol, Coumarine, Citral."
    },
    ar: {
      title: "سيروم العين النشط",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات البشرة › طقم مضاد الشيخوخة › سيروم العين النشط",
      productDetail: "هذا السيروم النشط المتميز للعين يستغل قوة الببتيدات والكافيين والسكوالين ومزيج الماتريكسيل لتجديد وإزالة الانتفاخ وتفتيح العيون المتعبة. محشو بمكونات قوية مثل الأرجيريلين والهالوكسيل والإيلس، تعمل هذه التركيبة على تقليل ظهور الخطوط الدقيقة والدوائر السوداء والانتفاخ. فيتامين E وحمض الهيالورونيك ومجمع سيتوبيول-لومين-آي يغذي ويرطب البشرة الحساسة حول عينيك، مما يساعدها على استعادة توهجها الشبابي. في غضون أسابيع قليلة، ستبدأ في رؤية فرق ملحوظ - ستظهر الخطوط ناعمة، والدوائر السوداء مخففة، والانتفاخ مقلل. يستخدم هذا السيروم القوي واللطيف أحدث المكونات النشطة لمساعدتك في تحقيق العيون المشرقة واليقظة والشبابية التي تبحث عنها.",
      howToUse: "غير محدد",
      ingredients: "ماء، مستخلص الخميرة المهدرجة، كحول سيتيل، إيزوستيريل إيزوستيرات، فوسفات سيتيل البوتاسيوم، ستيارات سيتيل، حمض الستياريك، جليسيريل ستيارات، بوليغليسيريل-6 بالميتات/سكسينات، كحول سيتيريل، مستخلص جذر إمبيراتا سيليندريكا، ماء، جليسرين، PEG-8، كاربومر، سكوالين، زيت بذور الجوجوبا، كابريليك/كابريك تريجليسيريد، مستخلص الأعشاب البحرية، جليسرين، ماء، بوتيلين جليكول، كاربومر، بوليسوربات 20، بالميتويل أوليغوببتيد، بالميتويل تيتراببتيد-7، زيت الجوجوبا، زايلتيجلوكوزيد، أنهيدروكسيليتول، زايلتول، كحول سيتيريل، فوسفات ديسيتيل، فوسفات سيتيث-10، إسترات الكوليسترول/لانوستيرول C10-30، فوسفوليبيدات، زيت فول الصويا، جليكوليبيدات، ستيرولات فول الصويا، كافيين، ماء، بروبيلين جليكول، فيتوستيرولات، جليسين بالميتويل، ديبالميتويل هيدروكسي برولين، جليكوجين، إيزوليوسين بالميتويل، ألانينات كوكويل الصوديوم، إيميدازوليدينيل يوريا، ميثيل بارابين، عطر، بروبيل بارابين، بوتيل فينيل ميثيل بروبيونال، هيكسيل سينامال، لينالول، ليمونين، ألفا-إيزوميثيل أيونون، سيترونيلول، كومارين، سيتال."
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
                  src="/images/122.jpg" 
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
                  href="/products/skin/anti-aging-kit"
                  className="bg-gold-500 text-black px-8 py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300"
                >
                  {lang === "en" ? "← Back to Anti Aging Kit" : "← العودة لطقم مضاد الشيخوخة"}
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


