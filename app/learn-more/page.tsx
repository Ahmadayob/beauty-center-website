"use client";

import { useLanguage } from "../contexts/LanguageContext";
import LanguageToggle from "../components/LanguageToggle";

export default function LearnMore() {
  // language toggle
  const { lang, setLang } = useLanguage();

  // text content
  const content = {
    en: {
      title: "Learn More",
      endUserProducts: "End User Products",
      hairProducts: "Hair Products",
      bodyProducts: "Body Products", 
      skinProducts: "Skin Products",
      nav: {
        home: "Home",
        services: "Treatments",
        about: "About",
        contact: "Contact"
      },
      products: {
        hair: {
          title: "Hair Products",
          description: "Premium hair care products for all hair types. Nourish, strengthen, and beautify your hair with our professional-grade formulations."
        },
        body: {
          title: "Body Products",
          description: "Luxurious body care essentials. Pamper your skin with our carefully crafted body products for ultimate hydration and radiance."
        },
        skin: {
          title: "Skin Products",
          description: "Advanced skincare solutions for every skin concern. Achieve healthy, glowing skin with our professional skincare range."
        }
      },
    },
    ar: {
      title: "اعرف المزيد",
      endUserProducts: "منتجات المستخدم النهائي",
      hairProducts: "منتجات الشعر",
      bodyProducts: "منتجات الجسم",
      skinProducts: "منتجات البشرة",
      nav: {
        home: "الرئيسية",
        services: "العلاجات",
        about: "من نحن",
        contact: "اتصل بنا"
      },
      products: {
        hair: {
          title: "منتجات الشعر",
          description: "منتجات العناية بالشعر المميزة لجميع أنواع الشعر. غذي وقوي وجملي شعرك بتركيباتنا المهنية عالية الجودة."
        },
        body: {
          title: "منتجات الجسم",
          description: "منتجات العناية بالجسم الفاخرة. اعتن ببشرتك بمنتجات الجسم المصنوعة بعناية للحصول على الترطيب والإشراق الأمثل."
        },
        skin: {
          title: "منتجات البشرة",
          description: "حلول العناية بالبشرة المتقدمة لكل مشاكل البشرة. احصلي على بشرة صحية ومشرقة مع مجموعة العناية بالبشرة المهنية."
        }
      },
    },
  };

  const t = content[lang];

  return (
    <main
      className={`min-h-screen font-sans ${
        lang === "ar" ? "text-right" : "text-left"
      }`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Luxury Black Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex flex-col items-center justify-center shadow-lg">
                <span className="text-black font-bold text-xs leading-none">Le</span>
                <span className="text-black font-bold text-xs leading-none">Rêve</span>
              </div>
              <h1 className="text-2xl font-sans font-bold luxury-text">Le Rêve Beauty Center</h1>
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <a href="/#home" className="text-white hover:text-gold-500 transition-colors duration-300 font-medium">{t.nav.home}</a>
                <a href="/#services" className="text-white hover:text-gold-500 transition-colors duration-300 font-medium">{t.nav.services}</a>
                <a href="/#about" className="text-white hover:text-gold-500 transition-colors duration-300 font-medium">{t.nav.about}</a>
                <a href="/#contact" className="text-white hover:text-gold-500 transition-colors duration-300 font-medium">{t.nav.contact}</a>
              </div>
              <LanguageToggle lang={lang} setLang={setLang} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 relative overflow-hidden pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="max-w-5xl mx-auto animate-fade-in relative z-10">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-sans font-bold text-white leading-none drop-shadow-2xl mb-4">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-dark-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              {lang === "en" 
                ? "Discover our complete range of professional skincare products and tools"
                : "اكتشفي مجموعتنا الكاملة من منتجات وأدوات العناية بالبشرة المهنية"
              }
            </p>
          </div>
        </div>
      </section>

      {/* End User Products Section */}
      <section className="luxury-section bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-sans font-bold text-gray-800 mb-8">
              {t.endUserProducts}
            </h2>
            <p className="text-xl md:text-2xl font-sans text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {lang === "en" 
                ? "Premium products designed for home use, bringing professional skincare results to your daily routine"
                : "منتجات مميزة مصممة للاستخدام المنزلي، تجلب نتائج العناية بالبشرة المهنية إلى روتينك اليومي"
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Hair Products Card */}
            <a href="/products/hair" className="group bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden animate-slide-up hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500">
              <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img 
                  src="/images/hairProds.jpg" 
                  alt="Hair Products" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-sans font-bold mb-4 text-gray-800 group-hover:text-gold-600 transition-colors duration-300">{t.products.hair.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-sans">{t.products.hair.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold-600 font-semibold group-hover:text-gold-700 transition-colors duration-300">Hair Care</span>
                  <div className="flex text-gold-500 group-hover:text-gold-600 transition-colors duration-300">★★★★★</div>
                </div>
              </div>
            </a>

            {/* Body Products Card */}
            <a href="/products/body" className="group bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden animate-slide-up delay-200 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500">
              <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img 
                  src="/images/bodyProds.jpg" 
                  alt="Body Products" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-sans font-bold mb-4 text-gray-800 group-hover:text-gold-600 transition-colors duration-300">{t.products.body.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-sans">{t.products.body.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold-600 font-semibold group-hover:text-gold-700 transition-colors duration-300">Body Care</span>
                  <div className="flex text-gold-500 group-hover:text-gold-600 transition-colors duration-300">★★★★★</div>
                </div>
              </div>
            </a>

            {/* Skin Products Card */}
            <a href="/products/skin" className="group bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden animate-slide-up delay-400 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500">
              <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img 
                  src="/images/skinprods.jpg" 
                  alt="Skin Products" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-sans font-bold mb-4 text-gray-800 group-hover:text-gold-600 transition-colors duration-300">{t.products.skin.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-sans">{t.products.skin.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold-600 font-semibold group-hover:text-gold-700 transition-colors duration-300">Skincare</span>
                  <div className="flex text-gold-500 group-hover:text-gold-600 transition-colors duration-300">★★★★★</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>


      {/* Luxury Black Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex flex-col items-center justify-center shadow-lg">
                  <span className="text-black font-bold text-sm leading-none">Le</span>
                  <span className="text-black font-bold text-sm leading-none">Rêve</span>
                </div>
                <h2 className="text-3xl font-sans font-bold luxury-text">Le Rêve Beauty Center</h2>
              </div>
              <p className="text-dark-200 mb-6 leading-relaxed">
                {lang === "en" 
                  ? "Your sanctuary of beauty and wellness. Experience luxury skincare treatments that reveal your most radiant self."
                  : "ملاذك للجمال والعافية. اختبري علاجات العناية بالبشرة الفاخرة التي تكشف أجمل نسخة منك."
                }
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-sans font-bold mb-6 text-gold-500">
                {lang === "en" ? "Quick Links" : "روابط سريعة"}
              </h3>
              <div className="space-y-3">
                <a href="/#home" className="block text-dark-200 hover:text-gold-500 transition-colors duration-300">{t.nav.home}</a>
                <a href="/#services" className="block text-dark-200 hover:text-gold-500 transition-colors duration-300">{t.nav.services}</a>
                <a href="/#about" className="block text-dark-200 hover:text-gold-500 transition-colors duration-300">{t.nav.about}</a>
                <a href="/#contact" className="block text-dark-200 hover:text-gold-500 transition-colors duration-300">{t.nav.contact}</a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-2xl font-sans font-bold mb-6 text-gold-500">
                {lang === "en" ? "Contact Info" : "معلومات التواصل"}
              </h3>
              <div className="space-y-3 text-dark-200">
                <p className="flex items-center justify-center md:justify-end">
                  <span className="mr-2 text-gold-500">📞</span> 00972569000463
                </p>
                <p className="flex items-center justify-center md:justify-end">
                  <span className="mr-2 text-gold-500">🕒</span> {lang === "en" ? "10 AM - 5 PM, Sat-Thu" : "10 صباحاً - 5 مساءً، سبت-خميس"}
                </p>
                <p className="flex items-center justify-center md:justify-end text-sm">
                  <span className="mr-2 text-gold-500">📍</span> {lang === "en" ? "Jenin, Al-Zahra District" : "جنين حي الزهراء"}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gold-500/20 pt-8 text-center">
            <p className="text-gold-500 text-lg">
              © 2024 Le Rêve Beauty Center. {lang === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}
            </p>
            <p className="text-dark-300 text-sm mt-2">
              {lang === "en" ? "Crafted with elegance and precision" : "مصنوع بأناقة ودقة"}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
