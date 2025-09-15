"use client";

import { useLanguage } from "../../contexts/LanguageContext";

export default function BodyProductsPage() {
  const { lang, setLang } = useLanguage();

  const content = {
    en: {
      title: "Body Products",
      subtitle: "Luxurious body care essentials for ultimate hydration and radiance",
      breadcrumb: "Home › Learn More › Body Products",
      nav: {
        home: "Home",
        about: "About", 
        products: "Products",
        contact: "Contact"
      },
      footer: {
        quickLinks: "Quick Links",
        contactInfo: "Contact Info",
        allRightsReserved: "All rights reserved."
      },
      products: [
        {
          name: "Hand Cream",
          description: "Intensely nourishes dry, cracked hands with tea tree extract and AHA acids",
          image: "/images/152.jpg",
          link: "/products/body/hand-cream"
        },
        {
          name: "Foot Cream",
          description: "Available in three aromatic fragrances: Vanilla, Lady Million and Good Girl",
          image: "/images/151.jpg",
          link: "/products/body/foot-cream"
        },
        {
          name: "Body Lotion",
          description: "Lightweight lotion that deeply moisturizes and calms the skin",
          image: "/images/150.jpg",
          link: "/products/body/body-lotion"
        },
        {
          name: "Post Laser Soothing Cream",
          description: "Intensive hydration and soothing cream for post-treatment care",
          image: "/images/510.jpg",
          link: "/products/body/post-laser-soothing-cream"
        }
      ]
    },
    ar: {
      title: "منتجات الجسم",
      subtitle: "منتجات العناية بالجسم الفاخرة للحصول على الترطيب والإشراق الأمثل",
      breadcrumb: "الرئيسية › تعلم المزيد › منتجات الجسم",
      nav: {
        home: "الرئيسية",
        about: "من نحن",
        products: "المنتجات", 
        contact: "اتصل بنا"
      },
      footer: {
        quickLinks: "روابط سريعة",
        contactInfo: "معلومات الاتصال",
        allRightsReserved: "جميع الحقوق محفوظة."
      },
      products: [
        {
          name: "كريم اليدين",
          description: "يغذي بشدة اليدين الجافة والمتشققة بمستخلص شجرة الشاي وأحماض AHA",
          image: "/images/152.jpg",
          link: "/products/body/hand-cream"
        },
        {
          name: "كريم القدمين",
          description: "متوفر بثلاث عطور عطرية: الفانيليا، ليدي مليون وجود جيرل",
          image: "/images/151.jpg",
          link: "/products/body/foot-cream"
        },
        {
          name: "لوشن الجسم",
          description: "لوشن خفيف يرطب بعمق ويهدئ البشرة",
          image: "/images/150.jpg",
          link: "/products/body/body-lotion"
        },
        {
          name: "كريم تهدئة ما بعد الليزر",
          description: "كريم ترطيب مكثف وتهدئة للعناية بعد العلاج",
          image: "/images/510.jpg",
          link: "/products/body/post-laser-soothing-cream"
        }
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
              <a href="/#home" className="text-gray-700 hover:text-gold-600 transition-colors duration-300 font-sans">{t.nav.home}</a>
              <a href="/#about" className="text-gray-700 hover:text-gold-600 transition-colors duration-300 font-sans">{t.nav.about}</a>
              <a href="/#products" className="text-gray-700 hover:text-gold-600 transition-colors duration-300 font-sans">{t.nav.products}</a>
              <a href="/#contact" className="text-gray-700 hover:text-gold-600 transition-colors duration-300 font-sans">{t.nav.contact}</a>
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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.products.map((product, index) => (
              <a key={index} href={product.link} className="group">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-sans font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <div className="w-full bg-gold-500 text-black py-3 rounded-xl font-sans font-semibold hover:bg-gold-600 transition-colors duration-300 text-center">
                      {lang === "en" ? "View Details" : "عرض التفاصيل"}
                    </div>
                  </div>
                </div>
              </a>
            ))}
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
              <h3 className="text-lg font-sans font-bold mb-4">{t.footer.quickLinks}</h3>
              <ul className="space-y-2">
                <li><a href="/#home" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">{t.nav.home}</a></li>
                <li><a href="/#about" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">{t.nav.about}</a></li>
                <li><a href="/#products" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">{t.nav.products}</a></li>
                <li><a href="/#contact" className="text-gray-400 hover:text-gold-500 transition-colors duration-300">{t.nav.contact}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-sans font-bold mb-4">{t.footer.contactInfo}</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 00972569000463</p>
                <p>🕒 {lang === "en" ? "10 AM – 5 PM, Sat–Thu" : "10 صباحاً – 5 مساءً، السبت–الخميس"}</p>
                <p>📍 {lang === "en" ? "Jenin, Al-Zahra District" : "جنين حي الزهراء"}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-sans">© 2024 Le Rêve Beauty Center. {t.footer.allRightsReserved}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
