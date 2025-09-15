"use client";

import { useState } from "react";
import LanguageToggle from "../../../../components/LanguageToggle";

export default function WhiteningBodyScrubPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Whitening Body Peeling Scrub",
      breadcrumb: "Home › Learn More › Skin Products › Intimate Whitening › Whitening Body Peeling Scrub",
      productDetail: "Moria Whitening Body Scrub (body, knees and elbows): It features a unique formula with a delicate scent that combines bamboo wood grains with glycolic acid and lactic acid in addition to salicylic acid, which helps gently exfoliate and lighten skin cells. The scrub contains vitamin B3, in addition to vitamin E. Both vitamins are excellent antioxidants that help resist environmental damage. The scrub also contains Vitamin B5 and almond oil to provide long-lasting hydration and elasticity to the skin. It also contains chamomile, allantoin and ginseng extracts to soothe the skin.",
      howToUse: "Clean the skin with a cleanser according to the skin type. Apply a little of the scrub with your hands on the skin (body, knees and elbows) and massage gently. Then wash with lukewarm water. The product can be used 2-3 times a week. This preparation is not recommended for people taking Rakuten, after a strong chemical peel treatment, who have thin, sensitive, irritated skin or skin with dilated capillaries (for external use only).",
      ingredients: "Water, Cetearyl Alcohol (and) Sodium Cetearyl Sulfate, Isopropyl Myristate, Propylene Glycol, Niacinamide, Glycolic Acid, Lactic Acid, Bambusa Arundinacea Stem Extract, Caprylic/Capric Triglyceride, Cetyl Alcohol (and) Isostearyl Isostearate (and) Potassium Cetyl Phosphate (and) Cetyl Behenate (and) Behenic Acid, Polyglyceryl-6 Distearate (and) Jojoba Esters (and) Polyglyceryl-3 Beeswax (and) Cetyl Alcohol, Salicylic acid, Fragrance, Cetyl Alcohol, Squalane, Dimethicone, Glycerin, Phenoxyethanol (and) Caprylyl Glycol, Octyl Palmitate, Panthenol, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Allantoin, Chamomilla Recutita (Matricaria) Flower Extract, Carbomer, Triethanolamine, Panax Ginseng Root Extract, BHT, Punica Granatum Seed Oil."
    },
    ar: {
      title: "سكراب تبييض الجسم المقشر",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات البشرة › تبييض المناطق الحساسة › سكراب تبييض الجسم المقشر",
      productDetail: "سكراب تبييض الجسم من موريا (الجسم والركبتين والمرفقين): يتميز بتركيبة فريدة برائحة لطيفة تجمع بين حبيبات خشب الخيزران مع حمض الجليكوليك وحمض اللاكتيك بالإضافة إلى حمض الساليسيليك، مما يساعد على تقشير وتفتيح خلايا الجلد بلطف. يحتوي السكراب على فيتامين B3، بالإضافة إلى فيتامين E. كلا الفيتامينين مضادات أكسدة ممتازة تساعد على مقاومة الأضرار البيئية. يحتوي السكراب أيضاً على فيتامين B5 وزيت اللوز لتوفير ترطيب ومرونة طويلة الأمد للبشرة. كما يحتوي على مستخلصات البابونج والألانتوين والجينسنغ لتهدئة البشرة.",
      howToUse: "نظفي البشرة بمنظف حسب نوع البشرة. طبقي قليلاً من السكراب بيديك على البشرة (الجسم والركبتين والمرفقين) ودلكي بلطف. ثم اغسلي بماء فاتر. يمكن استخدام المنتج 2-3 مرات في الأسبوع. لا يُنصح بهذا التحضير للأشخاص الذين يتناولون راكوتين، بعد علاج تقشير كيميائي قوي، أو الذين لديهم بشرة رقيقة وحساسة ومتهيجة أو بشرة مع شعيرات دموية متوسعة (للاستخدام الخارجي فقط).",
      ingredients: "ماء، سيتيريل الكحول، سيتيريل سلفات الصوديوم، إيزوبروبيل ميريستات، بروبيلين جليكول، نياسيناميد، حمض الجليكوليك، حمض اللاكتيك، مستخلص ساق البامبو، كابريليك/كابريك تريجليسيريد، سيتيل الكحول، إيزوستيريل إيزوستيرات، فوسفات سيتيل البوتاسيوم، سيتيل بيهينات، حمض البيهينيك، بولي جليسيريل-6 ديستيرات، إسترات الجوجوبا، بولي جليسيريل-3 شمع النحل، سيتيل الكحول، حمض الساليسيليك، عطر، سيتيل الكحول، سكوالان، ديميثيكون، جليسرين، فينوكسي إيثانول، كابريل جليكول، أوكتيل بالميتات، بانثينول، زيت اللوز الحلو، ألانتوين، مستخلص زهرة البابونج، كاربومر، تري إيثانول أمين، مستخلص جذر الجينسنغ، BHT، زيت بذور الرمان."
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
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex flex-col items-center justify-center shadow-lg">
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
              <LanguageToggle lang={lang} setLang={setLang} />
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
                  src="/images/342.jpg" 
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
                  href="/products/skin/intimate-whitening"
                  className="bg-gold-500 text-black px-8 py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300"
                >
                  {lang === "en" ? "← Back to Intimate Whitening" : "← العودة لتبييض المناطق الحساسة"}
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

