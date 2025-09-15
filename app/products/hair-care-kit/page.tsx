"use client";

import { useState } from "react";

export default function HairCareKitPage() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      title: "Hair Care Kit",
      subtitle: "Complete Professional Hair Care Collection",
      breadcrumb: "Home › Learn More › Hair Products › Hair Care › Hair Care Kit",
      description: "Our comprehensive Hair Care Kit from MORIA includes everything you need for a complete professional hair care routine. This premium collection features five essential products designed to cleanse, condition, repair, and protect your hair. Each product is formulated with high-quality ingredients including keratin proteins, natural oils, vitamins, and botanical extracts to nourish, strengthen, and beautify your hair. The kit is perfect for all hair types, especially damaged, colored, or chemically treated hair, providing salon-quality results in the comfort of your home.",
      howToUse: "Start with Salt Free Shampoo to gently cleanse hair. Follow with Conditioner for 2-3 minutes, then rinse. Apply Repairing Hair Mask once or twice weekly, leave on for 10-15 minutes, then rinse thoroughly. Use Leave-In Hair Mask on damp hair for daily conditioning and frizz control. Finish with Repairing Hair Serum on dry hair for added protection and shine. For best results, use all products together as a complete routine.",
      ingredients: "Salt Free Shampoo: Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Glycerin, Betaine, Hydrolyzed Keratin, Panthenol, Silk Amino Acids, Argan Oil, Avocado Oil, Sweet Almond Oil, Calendula Extract, Vitamin E. Conditioner: Water, Cetyl Alcohol, Stearyl Alcohol, Behentrimonium Chloride, Hydrolyzed Keratin, Panthenol, Argan Oil, Avocado Oil, Vitamin E, Fragrance. Repairing Hair Mask: Water, Cetyl Alcohol, Stearyl Alcohol, Hydrolyzed Keratin, Panthenol, Argan Oil, Avocado Oil, Sweet Almond Oil, Vitamin E, Silk Amino Acids, Fragrance. Leave-In Hair Mask: Water, Cyclopentasiloxane, Dimethicone, Hydrolyzed Keratin, Panthenol, Argan Oil, Vitamin E, Fragrance. Repairing Hair Serum: Cyclopentasiloxane, Dimethicone, Hydrolyzed Keratin, Panthenol, Argan Oil, Avocado Oil, Sweet Almond Oil, Vitamin E, Fragrance.",
      benefits: [
        "Complete hair transformation",
        "Professional results at home",
        "Saves time and money",
        "Perfect for all hair types",
        "Easy to follow routine",
        "Long-lasting results"
      ]
    },
    ar: {
      title: "طقم العناية بالشعر",
      subtitle: "مجموعة العناية المهنية الكاملة بالشعر",
      breadcrumb: "الرئيسية › اعرف المزيد › منتجات الشعر › العناية بالشعر › طقم العناية بالشعر",
      description: "طقم العناية بالشعر الشامل من موريا يتضمن كل ما تحتاجينه لروتين العناية المهنية الكامل بالشعر. هذه المجموعة المميزة تحتوي على خمسة منتجات أساسية مصممة لتنظيف وترطيب وإصلاح وحماية شعرك. كل منتج مصنوع بمكونات عالية الجودة تشمل بروتينات الكيراتين والزيوت الطبيعية والفيتامينات والمستخلصات النباتية لتغذية وتقوية وجمال شعرك. الطقم مثالي لجميع أنواع الشعر، خاصة التالف والمصبغ والمعالج كيميائياً، ويوفر نتائج صالون في راحة منزلك.",
      howToUse: "ابدئي بشامبو خالٍ من الأملاح لتنظيف الشعر بلطف. اتبعي بالبلسم لمدة 2-3 دقائق، ثم اشطفي. ضعي ماسك إصلاح الشعر مرة أو مرتين أسبوعياً، اتركيه لمدة 10-15 دقيقة، ثم اشطفي جيداً. استخدمي ماسك الشعر السائل على الشعر الرطب للترطيب اليومي وتهدئة الشعر المجعد. أنهي بسيروم إصلاح الشعر على الشعر الجاف للحماية الإضافية واللمعان. للحصول على أفضل النتائج، استخدمي جميع المنتجات معاً كروتين كامل.",
      ingredients: "شامبو خالٍ من الأملاح: ماء، صوديوم لوريث سلفات، كوكاميدوبروبيل بيتين، جليسرين، بيتين، هيدروليزد كيراتين، بانثينول، أحماض أمينية من الحرير، زيت الأرجان، زيت الأفوكادو، زيت اللوز الحلو، مستخلص الآذريون، فيتامين E. البلسم: ماء، سيتيل الكحول، ستيريل الكحول، بيهينتريمونيوم كلوريد، هيدروليزد كيراتين، بانثينول، زيت الأرجان، زيت الأفوكادو، فيتامين E، عطر. ماسك إصلاح الشعر: ماء، سيتيل الكحول، ستيريل الكحول، هيدروليزد كيراتين، بانثينول، زيت الأرجان، زيت الأفوكادو، زيت اللوز الحلو، فيتامين E، أحماض أمينية من الحرير، عطر. ماسك الشعر السائل: ماء، سيكلوبنتاسيلوكسان، ديميثيكون، هيدروليزد كيراتين، بانثينول، زيت الأرجان، فيتامين E، عطر. سيروم إصلاح الشعر: سيكلوبنتاسيلوكسان، ديميثيكون، هيدروليزد كيراتين، بانثينول، زيت الأرجان، زيت الأفوكادو، زيت اللوز الحلو، فيتامين E، عطر.",
      benefits: [
        "تحول كامل للشعر",
        "نتائج مهنية في المنزل",
        "يوفر الوقت والمال",
        "مثالي لجميع أنواع الشعر",
        "روتين سهل المتابعة",
        "نتائج دائمة"
      ]
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
                  src="/images/215.jpg" 
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
