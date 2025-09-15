"use client";

import { useState } from "react";

export default function AntiHairLossShampooPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Anti Hair Loss Shampoo",
      breadcrumb: "Home › Learn More › Hair Products › Hair Repair › Anti Hair Loss Shampoo",
      productDetail: "This invigorating shampoo harnesses the power of plants and potent ingredients to energize your scalp to promote thicker, fuller hair. The formula joins forces of natural and vitamin-rich ingredients like Pro-vitamin B5, Calendula extract and Panax Ginseng to stimulate hair follicles and strengthen each strands while caffeine and a host of botanical extracts work to stimulate circulation and promote healthy growth. Argan oil works to moisturize and condition hair while other key ingredients like Acacia Senegal Gum and Panthenol help nourish, soothe and protect stressed locks leaving the hair to feel clean, soft and revitalized.",
      howToUse: "undefined",
      ingredients: "Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine , Glycerin, Polyquaternium-7, Betaine , Cetyl Alcohol, Glycol Stearate, Acacia Senegal Gum, Fragrance, Dimethicone, Panthenol, LACTIC ACID, Argania Spinosa Kernel Oil, Arginine, Caffeine, Cupressus Sempervirens Leaf Extract, Ficus Carica (Fig) Fruit/Leaf Extract, Frangula Alnus Bark Extract, Helianthus Annuus (Sunflower) Seed Oil, Persea Gratissima (Avocado) Oil, Tocopheryl Acetate, Guar Hydroxypropyltrimonium Chloride, Imidazolidinyl Urea, Myristyl Myristate, Xanthan Gum, Methylparaben, Limonene, Calendula Officinalis Flower Extract, Linalool, Panax Ginseng Root Extract, Coumarine, Citral, FD&C Blue No. 1."
    },
    ar: {
      title: "شامبو مقاوم لتساقط الشعر",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات الشعر › إصلاح الشعر › شامبو مقاوم لتساقط الشعر",
      productDetail: "هذا الشامبو المنشط يستغل قوة النباتات والمكونات القوية لتنشيط فروة رأسك لتعزيز شعر أكثر كثافة وامتلاءً. تجمع الصيغة بين المكونات الطبيعية الغنية بالفيتامينات مثل البرو-فيتامين B5 ومستخلص الآذريون والجينسنغ لتحفيز بصيلات الشعر وتقوية كل خصلة بينما يعمل الكافيين ومجموعة من المستخلصات النباتية على تحفيز الدورة الدموية وتعزيز النمو الصحي. يعمل زيت الأرغان على ترطيب وتكييف الشعر بينما تساعد مكونات رئيسية أخرى مثل صمغ السنغال والأسيتيا والبانثينول على تغذية وتهدئة وحماية الشعر المجهد مما يترك الشعر نظيفاً وناعماً ومنعشاً.",
      howToUse: "غير محدد",
      ingredients: "ماء، لوريث سلفات الصوديوم، كوكاميدوبروبيل بيتاين، جليسرين، بولي كواترنيوم-7، بيتاين، سيتيل الكحول، جليكول ستيرات، صمغ السنغال والأسيتيا، عطر، ديميثيكون، بانثينول، حمض اللاكتيك، زيت نواة الأرغان، أرجينين، كافيين، مستخلص أوراق السرو، مستخلص ثمار/أوراق التين، مستخلص لحاء النبق، زيت بذور عباد الشمس، زيت الأفوكادو، أسيتات التوكوفيريل، غوار هيدروكسي بروبيل ترايمونيوم كلوريد، إيميدازوليدينيل يوريا، ميريستيل ميريستات، زانثان غم، ميثيل بارابين، ليمونين، مستخلص زهرة الآذريون، لينالول، مستخلص جذر الجينسنغ، كومارين، سيتال، FD&C أزرق رقم 1."
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
                  src="/images/201.jpg" 
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
