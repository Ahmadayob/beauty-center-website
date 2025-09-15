"use client";

import { useState } from "react";

export default function RepairingHairMaskPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Repairing Hair Mask",
      subtitle: "For Damaged and Colored Hair",
      breadcrumb: "Home › Learn More › Hair Products › Hair Care › Repairing Hair Mask",
      description: "This intensive REPAIRING HAIR MASK from MORIA is formulated to deeply nourish, condition and repair damaged and color-treated hair. The formula is infused with a blend of amino acids, vitamins, proteins and nourishing plant oils including argan, avocado and jojoba, this treatment mask works to restore lost moisture, strengthen strands, improve elasticity and boost shine. The urea and betaine help replenish hair fibers while keratin aids in repairing split ends and broken bonds. After use, hair is left noticeably softer, silkier and healthier-looking, helping restore hair's natural beauty and strength for a revitalized look.",
      howToUse: "Apply to clean, towel-dried hair. Massage gently from roots to ends. Leave on for 5-10 minutes. Rinse thoroughly with warm water. Use 1-2 times per week for best results.",
      ingredients: "Water, Quaternium-91 (and) Behentrimonium Chloride (and) Myristyl Myristate (and) Cetearyl Alcohol, Glycerin, Behentrimonium Methosulfate (and) Cetyl Alcohol (and) Butylene Glycol, Cetyl Esters, Behentrimonium methosulfate (and) C10-40 isoalkylamidopropylethyldimonium ethosulfate (and) cetyl alcohol, Behentrimonium Methosulfate (and) Quaternium-87 (and) Cetearyl Alcohol, Betaine , Butyrospermum Parkii (Shea) Butter, Dimethicone, Quaternium-91 (and) Cetrimonium Methosulfate (and) Cetearyl Alcohol, Aqua (and) Hydrolyzed Keratin, Aqua (and) Sodium Laneth-40 Maleate/Styrene Sulfonate Copolymer, Argania Spinosa Kernel Oil, Bis-Ethyl(isostearylimidazoline) Isostearamide, Lanolin Alcohol, Plukenetia Volubilis Seed Oil (and) Tocopherol,  Linum usitatissimum (Linseed) Seed Oil, Persea Gratissima (Avocado) Oil,  Ceramide NG, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Aqua (and) Hydrolyzed Vegetable Protein PG-Propyl Silanetriol, Arginine, Imidazolidinyl Urea, Methylparaben, Propylparaben, Lactic Acid."
    },
    ar: {
      title: "ماسك إصلاح الشعر",
      subtitle: "للمتضرر والمصبغ",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات الشعر › العناية بالشعر › ماسك إصلاح الشعر",
      description: "هذا الماسك المكثف لإصلاح الشعر من موريا مصمم لتغذية وإصلاح الشعر التالف والمصبغ بعمق. التركيبة محسنة بمزيج من الأحماض الأمينية والفيتامينات والبروتينات والزيوت النباتية المغذية بما في ذلك الأرجان والأفوكادو والجوجوبا، يعمل هذا الماسك العلاجي على استعادة الرطوبة المفقودة وتقوية الخصلات وتحسين المرونة وتعزيز اللمعان. اليوريا والبيتين يساعدان في تجديد ألياف الشعر بينما يساعد الكيراتين في إصلاح الأطراف المتقصفة والروابط المكسورة. بعد الاستخدام، يترك الشعر ناعماً وحريرياً وصحياً بشكل ملحوظ، مما يساعد في استعادة جمال وقوة الشعر الطبيعية لمظهر منعش.",
      howToUse: "ضع على الشعر النظيف والمجفف بالمنشفة. دلك برفق من الجذور إلى الأطراف. اتركه لمدة 5-10 دقائق. اشطف جيداً بالماء الدافئ. استخدم 1-2 مرات في الأسبوع للحصول على أفضل النتائج.",
      ingredients: "ماء، كواترنيوم-91 (و) بيهينتريمونيوم كلوريد (و) ميريستيل ميريستات (و) سيتياريل الكحول، جليسرين، بيهينتريمونيوم ميثوسلفات (و) سيتيل الكحول (و) بوتيلين جليكول، سيتيل إسترات، بيهينتريمونيوم ميثوسلفات (و) C10-40 إيزوألكيلاميدوبروبيل إيثيلديمونيوم إيثوسلفات (و) سيتيل الكحول، بيهينتريمونيوم ميثوسلفات (و) كواترنيوم-87 (و) سيتياريل الكحول، بيتين، زبدة شيا باركيا، ديميثيكون، كواترنيوم-91 (و) سيتريمونيوم ميثوسلفات (و) سيتياريل الكحول، أكوا (و) هيدروليزد كيراتين، أكوا (و) صوديوم لانيث-40 مالييت/ستايرين سلفونات كوبوليمر، زيت نواة الأرجان، بيس-إيثيل(إيزوستيريليميدازولين) إيزوستيراميد، لانولين الكحول، زيت بذور بلوكينيتيا فولوبيليس (و) توكوفيرول، زيت بذور الكتان، زيت الأفوكادو، سيراميد NG، زيت اللوز الحلو، أكوا (و) هيدروليزد بروتين نباتي PG-بروبيل سيلانيتريول، أرجينين، إيميدازوليدينيل يوريا، ميثيل بارابين، بروبيل بارابين، حمض اللاكتيك."
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
                  src="/images/210.jpg" 
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
