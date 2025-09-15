"use client";

import { useState } from "react";

export default function SaltFreeConditionerPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Salt Free Conditioner",
      subtitle: "For Damaged & Colored Hair",
      breadcrumb: "Home › Learn More › Hair Products › Hair Care › Salt Free Conditioner",
      description: "This conditioner by Moria strengthens hair shaft with a blend of natural ingredients. The sulfate-free formula soothes the scalp with calming extracts of calendula and chamomile while betaine and keratin proteins restore damaged strands. Silk amino acids and panthenol replenish moisture for soft, manageable hair, and vitamin E, pro-vitamin B5 and argan, linseed, avocado and sweet almond oils nourish each strand. Providing Hair that feels revived and nourished, adding softness and shine without harsh chemicals or sulfates that weigh hair down. Ideal for color-treated and chemically processed hair.",
      howToUse: "After shampooing, apply conditioner to wet hair, focusing on mid-lengths and ends. Leave on for 2-3 minutes. Rinse thoroughly with cool water for best results.",
      ingredients: "Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Glycerin, Polyquaternium-6, Betaine , Cetyl Alcohol, Glycol Stearate, Cocamide DEA, Fragrance, Quaternium-91 (and) PPG-3 Benzyl Ether Myristate, Acacia gum, Aqua (and) Hydrolyzed Keratin, Dimethicone, Panthenol, Silk Amino Acids, Tocopheryl Acetate, Guar Hydroxypropyltrimonium Chloride, Imidazolidinyl Urea, Methylparaben, Xanthan Gum, Argania Spinosa Kernel Oil, Linum usitatissimum (Linseed) Seed Oil, Persea Gratissima (Avocado) Oil, Propylene Glycol and Water and Calendula Officinalis Flower Extract, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Lactic Acid."
    },
    ar: {
      title: "بلسم خالٍ من الأملاح",
      subtitle: "للمتضرر والمصبغ",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات الشعر › العناية بالشعر › بلسم خالٍ من الأملاح",
      description: "هذا البلسم من موريا يقوي جذع الشعر بمزيج من المكونات الطبيعية. التركيبة الخالية من الكبريتات تهدئ فروة الرأس بمستخلصات مهدئة من الآذريون والبابونج بينما البيتين وبروتينات الكيراتين تعيد إصلاح الخصلات التالفة. الأحماض الأمينية من الحرير والبانثينول تعيد ترطيب الشعر الناعم والقابل للتمشيط، وفيتامين E وفيتامين B5 المؤيد وزيت الأرجان والكتان والأفوكادو وزيت اللوز الحلو تغذي كل خصلة. يوفر شعراً يشعر بالانتعاش والتغذية، مضيفاً النعومة واللمعان دون مواد كيميائية قاسية أو كبريتات تثقل الشعر. مثالي للشعر المصبوغ والمعالج كيميائياً.",
      howToUse: "بعد الشامبو، ضع البلسم على الشعر المبلل، مع التركيز على منتصف الطول والأطراف. اتركه لمدة 2-3 دقائق. اشطف جيداً بالماء البارد للحصول على أفضل النتائج.",
      ingredients: "ماء، صوديوم لوريث سلفات، كوكاميدوبروبيل بيتين، جليسرين، بولي كواترنيوم-6، بيتين، سيتيل الكحول، جليكول ستيرات، كوكاميد DEA، عطر، كواترنيوم-91 (و) PPG-3 بنزيل إيثر ميريستات، صمغ الأكاسيا، أكوا (و) هيدروليزد كيراتين، ديميثيكون، بانثينول، أحماض أمينية من الحرير، أسيتات التوكوفيريل، غوار هيدروكسي بروبيل تريمونيوم كلوريد، إيميدازوليدينيل يوريا، ميثيل بارابين، زانثان غام، زيت نواة الأرجان، زيت بذور الكتان، زيت الأفوكادو، بروبيلين جليكول وماء ومستخلص زهرة الآذريون، زيت اللوز الحلو، حمض اللاكتيك."
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
                  src="/images/213.jpg" 
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
