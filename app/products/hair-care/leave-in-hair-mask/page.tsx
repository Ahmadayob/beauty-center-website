"use client";

import { useState } from "react";

export default function LeaveInHairMaskPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Leave-In Hair Mask",
      subtitle: "Multi-purpose conditioning hair mask",
      breadcrumb: "Home › Learn More › Hair Products › Hair Care › Leave-In Hair Mask",
      description: "This leave-in hair mask by Moria is a multi-purpose conditioning hair mask that promises to smooth, moisturize and tame frizz, while repairing damage for silky, manageable hair. Formulated with a blend of amino acids, vitamins and plant oils including argan oil, avocado oil and shea butter, this mask detangles knots and controls friz, repairs split ends and boosts shine. The protein-rich formula conditions and strengthens strands from root to tip for softness, flexibility, reduced breakage and healthy hair.",
      howToUse: "Apply to clean, towel-dried hair. Distribute evenly from mid-lengths to ends. Do not rinse. Style as usual. Can be used daily for best results.",
      ingredients: "Water, Glycerin, Cetyl Esters, Betaine , Butyrospermum Parkii (Shea) Butter, Quaternium-91 (and) Behentrimonium Chloride (and) Myristyl Myristate (and) Cetearyl Alcohol, , Aqua (and) Hydrolyzed Keratin, Aqua (and) Sodium Laneth-40 Maleate/Styrene Sulfonate Copolymer, Behentrimonium methosulfate (and) C10-40 isoalkylamidopropylethyldimonium ethosulfate (and) Cetyl alcohol, Behentrimonium Methosulfate (and) Cetyl Alcohol (and) Butylene Glycol, Behentrimonium Methosulfate (and) Quaternium-87 (and) Cetearyl Alcohol, Bis-Ethyl(isostearylimidazoline) Isostearamide, Cetyl Alcohol, Dimethicone, Panthenol, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Quaternium-91 (and) Cetrimonium Methosulfate (and) Cetearyl Alcohol, Arginine, Lactic Acid, Argania Spinosa Kernel Oil, Lanolin Alcohol, Persea Gratissima (Avocado) Oil, Imidazolidinyl Urea, Methylparaben, Propylparaben, Limonene, Linalool, Coumarine."
    },
    ar: {
      title: "ماسك شعر يُترك دون شطف",
      subtitle: "ماسك شعر علاجي متعدد الأغراض",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات الشعر › العناية بالشعر › ماسك شعر يُترك دون شطف",
      description: "هذا الماسك للشعر يُترك دون شطف من موريا هو ماسك شعر علاجي متعدد الأغراض يعد بتنعيم وترطيب وتهدئة الهيشان، بينما يصلح التلف للحصول على شعر حريري وقابل للتمشيط. مصنوع بمزيج من الأحماض الأمينية والفيتامينات والزيوت النباتية بما في ذلك زيت الأرجان وزيت الأفوكادو وزبدة الشيا، هذا الماسك يفك التشابك ويسيطر على الهيشان، يصلح الأطراف المتقصفة ويعزز اللمعان. التركيبة الغنية بالبروتين تغذي وتقوي الخصلات من الجذور إلى الأطراف للنعومة والمرونة وتقليل التقصف والشعر الصحي.",
      howToUse: "ضع على الشعر النظيف والمجفف بالمنشفة. وزع بالتساوي من منتصف الطول إلى الأطراف. لا تشطف. قم بتصفيف الشعر كالمعتاد. يمكن استخدامه يومياً للحصول على أفضل النتائج.",
      ingredients: "ماء، جليسرين، سيتيل إسترات، بيتين، زبدة شيا باركيا، كواترنيوم-91 (و) بيهينتريمونيوم كلوريد (و) ميريستيل ميريستات (و) سيتياريل الكحول، أكوا (و) هيدروليزد كيراتين، أكوا (و) صوديوم لانيث-40 مالييت/ستايرين سلفونات كوبوليمر، بيهينتريمونيوم ميثوسلفات (و) C10-40 إيزوألكيلاميدوبروبيل إيثيلديمونيوم إيثوسلفات (و) سيتيل الكحول، بيهينتريمونيوم ميثوسلفات (و) سيتيل الكحول (و) بوتيلين جليكول، بيهينتريمونيوم ميثوسلفات (و) كواترنيوم-87 (و) سيتياريل الكحول، بيس-إيثيل(إيزوستيريليميدازولين) إيزوستيراميد، سيتيل الكحول، ديميثيكون، بانثينول، زيت اللوز الحلو، كواترنيوم-91 (و) سيتريمونيوم ميثوسلفات (و) سيتياريل الكحول، أرجينين، حمض اللاكتيك، زيت نواة الأرجان، لانولين الكحول، زيت الأفوكادو، إيميدازوليدينيل يوريا، ميثيل بارابين، بروبيل بارابين، ليمونين، لينالول، كومارين."
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
                  src="/images/212.jpg" 
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
