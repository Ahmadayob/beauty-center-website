"use client";

import { useLanguage } from "./contexts/LanguageContext";
import LanguageToggle from "./components/LanguageToggle";

export default function Home() {
  // language toggle
  const { lang, setLang } = useLanguage();
  // text content
  const content = {
    en: {
      heroTitle: "Le Rêve",
      heroSubtitle: "Beauty Center",
      heroDescription: "Where beauty meets elegance. Experience our premium skincare and hair treatments designed to reveal your most radiant, confident self.",
      products: "Our Signature Treatments",
      reviews: "Client Testimonials",
      about: "About Le Rêve Beauty Center",
      aboutDescription: "At Le Rêve Beauty Center, we believe that every person deserves to feel confident and beautiful in their own skin. Our mission is to provide exceptional skincare and hair treatments using the latest technology and premium products, all delivered with personalized care and attention to detail.",
      contact: "Visit Our Sanctuary",
      hours: "Operating Hours",
      hoursDetail: "10:00 AM – 5:00 PM, Saturday to Thursday (Friday Closed)",
      owner: "Somaya Abo Hijle",
      phone: "00972569000463",
      location: "Jenin, Al-Zahra District, Opposite Jordanian Field Hospital",
      nav: {
        home: "Home",
        services: "Treatments",
        about: "About",
        contact: "Contact"
      },
      services: {
        ledTherapy: {
          title: "LED Light Therapy Machine",
          description: "A skin care treatment using different LED wavelengths to improve skin health. Red for collagen & wrinkles, Blue for acne, Green for pigmentation, Yellow for sensitive skin, and Purple for scars. Session lasts 15–30 minutes."
        },
        hydrafacial: {
          title: "HydraFacial Machine",
          description: "A water-based facial treatment machine that deeply cleans, exfoliates, hydrates, and brightens the skin. Features a touchscreen, multiple handpieces for cleansing, exfoliation, hydration, and blackhead removal, plus built-in LED light therapy and treatment serums."
        },
        drpen: {
          title: "Dr. Pen Ultima A6 – Microneedling Device",
          description: "A professional microneedling device that stimulates collagen and elastin for skin rejuvenation. Helps reduce wrinkles, acne scars, large pores, and improves serum absorption. Adjustable needle depth (0.25mm – 2.5mm) with sterile disposable tips."
        }
      },
      testimonials: {
        client1: {
          name: "Sarah Johnson",
          text: "First of all, the cleanliness and organization are amazing 👌 Everything in the center is so neat and beautiful 🌸 Your work is professional and your touch is gentle 💕",
          rating: 5
        },
        client2: {
          name: "Fatima Al-Ahmad",
          text: "My skin is glowing ✨ thank you dear, all the acne is gone, only a very small trace is left 🙏",
          rating: 5
        },
        client3: {
          name: "Mariam Hassan",
          text: "Hello 🌹 I tried the LED therapy for pigmentation, and thankfully it already started improving. The products I bought are also really good 👌",
          rating: 5
        }
      }
    },
    ar: {
      heroTitle: "لو ريف",
      heroSubtitle: "مركز الجمال",
      heroDescription: "حيث تلتقي الجمال بالأناقة. اختبري علاجات العناية بالبشرة والشعر المميزة المصممة لإظهار أجمل وأكثر نسخة واثقة منك.",
      products: "علاجاتنا المميزة",
      reviews: "آراء العملاء",
      about: "حول مركز لو ريف للجمال",
      aboutDescription: "في مركز لو ريف للجمال، نؤمن بأن كل شخص يستحق أن يشعر بالثقة والجمال في بشرته. مهمتنا هي تقديم علاجات استثنائية للعناية بالبشرة والشعر باستخدام أحدث التقنيات والمنتجات المميزة، كل ذلك مع الرعاية الشخصية والاهتمام بالتفاصيل.",
      contact: "زوروا ملاذنا",
      hours: "ساعات العمل",
      hoursDetail: "من 10 صباحاً حتى 5 مساءً، من السبت إلى الخميس (الجمعة عطلة)",
      owner: "سميه أبو حجلة",
      phone: "00972569000463",
      location: "جنين حي الزهراء مقابل المستشفى الاردني الميداني",
      nav: {
        home: "الرئيسية",
        services: "العلاجات",
        about: "من نحن",
        contact: "اتصل بنا"
      },
      services: {
        ledTherapy: {
          title: "جهاز العلاج الضوئي LED",
          description: "جهاز يُستخدم في مراكز التجميل لعلاج مشاكل البشرة بأطوال موجية مختلفة من الأضواء. الأحمر: لتحفيز الكولاجين وشد البشرة. الأزرق: لعلاج حب الشباب. الأخضر: لتفتيح وتوحيد اللون. الأصفر: لتهدئة البشرة الحساسة. الأرجواني: لتجديد البشرة وعلاج الندبات. مدة الجلسة 15–30 دقيقة."
        },
        hydrafacial: {
          title: "جهاز الهيدرا فيشل",
          description: "جهاز متطور لتنظيف البشرة بالماء، يجمع بين التنظيف العميق، التقشير، الترطيب، والتفتيح. يحتوي على شاشة لمس للتحكم، عدة رؤوس بوظائف مختلفة (تنظيف، تقشير، ترطيب، إزالة الرؤوس السوداء)، خراطيم متصلة بخزانات محاليل علاجية، مع إضاءة LED مدمجة لعلاج البشرة."
        },
        drpen: {
          title: "جهاز ديرما بن ألتيمـا A6 (الوخز بالإبر الدقيقة)",
          description: "جهاز متطور للعناية بالبشرة يعمل بتقنية الوخز بالإبر الدقيقة لتحفيز الكولاجين والإيلاستين وتجديد الخلايا. وظائفه: تقليل التجاعيد، علاج ندبات حب الشباب والجروح، تصغير المسامات، تحسين امتصاص السيرومات والكريمات، وتفتيح البشرة. يعمل عبر وخزات دقيقة معقمة تحفّز التئام الجلد وتجديده، ويمكن دمجه مع سيرومات مثل حمض الهيالورونيك، فيتامين C، أو بلازما PRP."
        }
      },
      testimonials: {
        client1: {
          name: "سارة جونسون",
          text: "اول شي النظافة والترتيب بجننو 👌 السنتر كلشي فيه بجنن ومرتب وحلو 🌸 شغلك مرتب وايدك خفيفة 💕",
          rating: 5
        },
        client2: {
          name: "فاطمة الأحمد",
          text: "بشرتي بتضوي ضوي ✨ يسلم إيديكي حبيبتي، الحبوب كلها راحت الحمدلله، واللي ضايل إشي خفيف كتير 🙏",
          rating: 5
        },
        client3: {
          name: "مريم حسن",
          text: "مرحبا 🌹 عملت عندك العلاج الضوئي للكلف، والحمدلله بلش يخف. والمنتجات اللي أخدتهم كتير مناح 👌",
          rating: 5
        }
      }
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
                <a href="#home" className="text-white hover:text-gold-500 transition-colors duration-300 font-medium">{t.nav.home}</a>
                <a href="#services" className="text-white hover:text-gold-500 transition-colors duration-300 font-medium">{t.nav.services}</a>
                <a href="#about" className="text-white hover:text-gold-500 transition-colors duration-300 font-medium">{t.nav.about}</a>
                <a href="#contact" className="text-white hover:text-gold-500 transition-colors duration-300 font-medium">{t.nav.contact}</a>
              </div>
              <LanguageToggle lang={lang} setLang={setLang} />
            </div>
          </div>
        </div>
      </nav>

      {/* Luxury Black Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex flex-col justify-center items-center text-center p-6 relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Luxury dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
        
        {/* Luxury decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-gold-500/20 to-gold-600/10 rounded-full opacity-40 animate-float backdrop-blur-sm"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-gold-600/15 to-gold-500/5 rounded-full opacity-30 animate-float delay-1000 backdrop-blur-sm"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-gold-500/25 to-gold-400/10 rounded-full opacity-35 animate-float delay-2000 backdrop-blur-sm"></div>
        <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-gradient-to-br from-gold-400/20 to-gold-500/8 rounded-full opacity-25 animate-float delay-3000 backdrop-blur-sm"></div>
        
        {/* Elegant gold sparkle effects */}
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gradient-to-br from-gold-500 to-gold-400 rounded-full opacity-70 animate-ping shadow-lg"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-gradient-to-br from-gold-400 to-gold-300 rounded-full opacity-80 animate-ping delay-1000 shadow-lg"></div>
        <div className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full opacity-75 animate-ping delay-2000 shadow-lg"></div>
        <div className="absolute top-1/5 left-1/2 w-1.5 h-1.5 bg-gradient-to-br from-gold-300 to-gold-500 rounded-full opacity-85 animate-ping delay-3000 shadow-lg"></div>
        
        {/* Luxury geometric patterns */}
        <div className="absolute top-10 right-20 w-8 h-8 border border-gold-500/30 rotate-45 opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-20 w-6 h-6 border border-gold-400/25 rotate-12 opacity-35 animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-4 h-4 border border-gold-600/20 rotate-45 opacity-30 animate-pulse-slow delay-2000"></div>
        
        {/* Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-[20rem] md:text-[30rem] font-elegant font-bold text-gold-500/5 select-none animate-pulse-slow">
            Le Rêve
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto animate-fade-in relative z-10 pt-20">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-sans font-bold text-white leading-none drop-shadow-2xl mb-4">
              {t.heroTitle}
            </h1>
            <h2 className="text-2xl md:text-3xl font-sans text-gold-400 mb-6 tracking-widest uppercase">
              {t.heroSubtitle}
            </h2>
            <p className="text-lg md:text-xl text-dark-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              {t.heroDescription}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Learn More button now scrolls to services section */}
            <a href="#services" className="btn-luxury text-lg px-12 py-5">
              {lang === "en" ? "Learn More" : "اعرف المزيد"}
            </a>
          </div>
        </div>
      </section>

      {/* Luxury Products Section */}
      <section id="services" className="luxury-section luxury-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-slide-up">
            <h3 className="luxury-heading luxury-text">
              {t.products}
            </h3>
            <p className="luxury-subheading max-w-3xl mx-auto">
              {lang === "en" 
                ? "Experience our signature treatments crafted with precision and luxury, designed to reveal your most radiant self"
                : "اختبري علاجاتنا المميزة المصنوعة بدقة وفخامة، مصممة لإظهار أجمل نسخة منك"
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* LED Therapy Card */}
            <div className="group luxury-card luxury-hover overflow-hidden animate-slide-up">
              <div className="relative h-80 bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
                <img src="/images/LED Light Therapy Machine.jpeg" alt="LED Light Therapy Machine" className="w-full h-full object-cover"/>
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-sans font-bold mb-4 text-white">{t.services.ledTherapy.title}</h4>
                <p className="text-dark-200 mb-6 leading-relaxed font-sans">{t.services.ledTherapy.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold-500 font-semibold">Advanced Treatment</span>
                  <div className="flex text-gold-500">★★★★★</div>
                </div>
              </div>
            </div>

            {/* HydraFacial Card */}
            <div className="group luxury-card luxury-hover overflow-hidden animate-slide-up delay-200">
              <div className="relative h-80 bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
                <img src="/images/HydraFacial Machine.jpeg" alt="HydraFacial Machine" className="w-full h-full object-cover"/>
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-sans font-bold mb-4 text-white">{t.services.hydrafacial.title}</h4>
                <p className="text-dark-200 mb-6 leading-relaxed font-sans">{t.services.hydrafacial.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold-500 font-semibold">Hydrating Treatment</span>
                  <div className="flex text-gold-500">★★★★★</div>
                </div>
              </div>
            </div>

            {/* Dr. Pen Card */}
            <div className="group luxury-card luxury-hover overflow-hidden animate-slide-up delay-400">
              <div className="relative h-80 bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
                <img src="/images/Pen Ultima A6.png" alt="Dr. Pen Ultima A6 Microneedling Device" className="w-full h-full object-cover"/>
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-sans font-bold mb-4 text-white">{t.services.drpen.title}</h4>
                <p className="text-dark-200 mb-6 leading-relaxed font-sans">{t.services.drpen.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold-500 font-semibold">Rejuvenation</span>
                  <div className="flex text-gold-500">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Black Testimonials Section */}
      <section className="luxury-section bg-gradient-to-br from-black to-dark-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-slide-up">
            <h3 className="luxury-heading luxury-text">
              {t.reviews}
            </h3>
            <p className="luxury-subheading max-w-3xl mx-auto">
              {lang === "en" 
                ? "Hear from our cherished clients who have experienced the Le Rêve difference"
                : "استمعي إلى آراء عملائنا الأعزاء الذين اختبروا فرق لو ريف"
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="testimonial-card luxury-hover animate-slide-in-left">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-black font-bold text-2xl">1</span>
                </div>
                <h4 className="text-xl font-sans font-semibold text-white mb-2">{t.testimonials.client1.name}</h4>
                <div className="flex justify-center text-gold-500 mb-4">★★★★★</div>
              </div>
              <p className="text-dark-200 italic text-lg leading-relaxed">{t.testimonials.client1.text}</p>
            </div>

            <div className="testimonial-card luxury-hover animate-slide-up">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-600 to-gold-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-black font-bold text-2xl">2</span>
                </div>
                <h4 className="text-xl font-sans font-semibold text-white mb-2">{t.testimonials.client2.name}</h4>
                <div className="flex justify-center text-gold-500 mb-4">★★★★★</div>
              </div>
              <p className="text-dark-200 italic text-lg leading-relaxed">{t.testimonials.client2.text}</p>
            </div>

            <div className="testimonial-card luxury-hover animate-slide-in-right">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-black font-bold text-2xl">3</span>
                </div>
                <h4 className="text-xl font-sans font-semibold text-white mb-2">{t.testimonials.client3.name}</h4>
                <div className="flex justify-center text-gold-500 mb-4">★★★★★</div>
              </div>
              <p className="text-dark-200 italic text-lg leading-relaxed">{t.testimonials.client3.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="luxury-section bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-sans font-bold text-gray-800 mb-8">
              {lang === "en" ? "About Le Rêve Beauty Center" : "حول مركز لو ريف للجمال"}
            </h2>
            <p className="text-xl md:text-2xl font-sans text-gray-600 leading-relaxed max-w-4xl mx-auto">
              {t.aboutDescription}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-sans font-bold text-gray-800 mb-6">
                {lang === "en" ? "Our Story" : "قصتنا"}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {lang === "en" 
                  ? "Founded with a passion for beauty and wellness, Le Rêve Beauty Center has been serving our community with dedication and expertise. We combine traditional skincare and hair wisdom with modern technology to deliver results that exceed expectations."
                  : "تأسس مركز لو ريف للجمال بشغف للجمال والعافية، وقد كان يخدم مجتمعنا بالتفاني والخبرة. نجمع بين حكمة العناية التقليدية بالبشرة والشعر والتكنولوجيا الحديثة لتقديم نتائج تتجاوز التوقعات."
                }
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {lang === "en" 
                  ? "Our team of skilled professionals is committed to helping you achieve your skincare and hair goals through personalized treatments and expert guidance."
                  : "فريقنا من المحترفين المهرة ملتزم بمساعدتك في تحقيق أهداف العناية بالبشرة والشعر من خلال العلاجات الشخصية والإرشاد المتخصص."
                }
              </p>
              
              {/* Image Gallery */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <img 
                    src="/images/WhatsApp Image 2025-09-06 at 4.34.54 PM (1).jpeg" 
                    alt="Le Rêve Beauty Center Interior" 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <img 
                    src="/images/WhatsApp Image 2025-09-06 at 4.35.09 PM (1).jpeg" 
                    alt="Le Rêve Beauty Center Treatment Room" 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <img 
                    src="/images/WhatsApp Image 2025-09-06 at 4.35.17 PM (1).jpeg" 
                    alt="Le Rêve Beauty Center Equipment" 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <img 
                    src="/images/WhatsApp Image 2025-09-06 at 4.37.03 PM (1).jpeg" 
                    alt="Le Rêve Beauty Center Services" 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-gold-500/10 to-gold-600/5 rounded-3xl p-12 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <span className="text-white text-6xl">✨</span>
                </div>
                <h4 className="text-2xl font-sans font-bold text-gray-800 mb-4">
                  {lang === "en" ? "Why Choose Us?" : "لماذا تختاريننا؟"}
                </h4>
                <ul className="text-lg text-gray-600 space-y-3 text-left">
                  <li className="flex items-center">
                    <span className="text-gold-500 mr-3">✓</span>
                    {lang === "en" ? "Professional expertise and experience" : "الخبرة والمهارة المهنية"}
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-500 mr-3">✓</span>
                    {lang === "en" ? "Latest technology and equipment" : "أحدث التقنيات والمعدات"}
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-500 mr-3">✓</span>
                    {lang === "en" ? "Personalized treatment plans" : "خطط علاج شخصية"}
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-500 mr-3">✓</span>
                    {lang === "en" ? "Clean and comfortable environment" : "بيئة نظيفة ومريحة"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Contact Section */}
      <section id="contact" className="luxury-section luxury-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-slide-up">
            <h3 className="luxury-heading luxury-text">
              {t.contact}
            </h3>
            <p className="luxury-subheading max-w-3xl mx-auto">
              {lang === "en" 
                ? "Step into our sanctuary of beauty and wellness. We're here to guide you on your journey to radiant skin"
                : "ادخلي إلى ملاذنا للجمال والعافية. نحن هنا لنساعدك في رحلتك نحو بشرة مشرقة"
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="luxury-card luxury-hover p-10 text-center animate-slide-in-left">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 shadow-lg">
                <img 
                  src="/images/WhatsApp Image 2025-09-07 at 9.50.16 PM (2).jpeg" 
                  alt="Owner Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-sans font-bold mb-4 text-white">{t.owner}</h4>
              <p className="text-dark-200 mb-4 font-sans">{lang === "en" ? "Owner & Specialist" : "المالكة والمتخصصة"}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="luxury-card luxury-hover p-10 text-center animate-slide-up">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-600 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-black text-3xl">📞</span>
              </div>
              <h4 className="text-xl font-sans font-bold mb-4 text-white">{t.phone}</h4>
              <p className="text-dark-200 mb-4 font-sans">{lang === "en" ? "Call us now" : "اتصلي بنا الآن"}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="luxury-card luxury-hover p-10 text-center animate-slide-up delay-200">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-black text-3xl">🕒</span>
              </div>
              <h4 className="text-xl font-sans font-bold mb-4 text-white">{t.hours}</h4>
              <p className="text-dark-200 mb-4 font-sans text-sm">{t.hoursDetail}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto rounded-full"></div>
            </div>

          </div>
          
          <div className="text-center animate-slide-up delay-400">
            <div className="inline-flex items-center p-10 luxury-card luxury-hover">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mr-8 shadow-lg">
                <span className="text-black text-3xl">📍</span>
              </div>
              <div className="text-left">
                <h4 className="text-2xl font-elegant font-bold mb-3 text-white">{lang === "en" ? "Visit Our Sanctuary" : "زوروا ملاذنا"}</h4>
                <p className="text-dark-200 text-lg font-sans">{t.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Black Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex flex-col items-center justify-center shadow-lg">
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
                <a href="#home" className="block text-dark-200 hover:text-gold-500 transition-colors duration-300">{t.nav.home}</a>
                <a href="#services" className="block text-dark-200 hover:text-gold-500 transition-colors duration-300">{t.nav.services}</a>
                <a href="#about" className="block text-dark-200 hover:text-gold-500 transition-colors duration-300">{t.nav.about}</a>
                <a href="#contact" className="block text-dark-200 hover:text-gold-500 transition-colors duration-300">{t.nav.contact}</a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-2xl font-sans font-bold mb-6 text-gold-500">
                {lang === "en" ? "Contact Info" : "معلومات التواصل"}
              </h3>
              <div className="space-y-3 text-dark-200">
                <p className="flex items-center justify-center md:justify-end font-sans">
                  <span className="mr-2 text-gold-500">📞</span> {t.phone}
                </p>
                <p className="flex items-center justify-center md:justify-end">
                  <span className="mr-2 text-gold-500">🕒</span> {t.hours}
                </p>
                <p className="flex items-center justify-center md:justify-end text-sm">
                  <span className="mr-2 text-gold-500">📍</span> {t.location}
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
