"use client";

import { useState } from "react";

interface LanguageToggleProps {
  lang: "en" | "ar";
  setLang: (lang: "en" | "ar") => void;
}

export default function LanguageToggle({ lang, setLang }: LanguageToggleProps) {
  const [showLangConfirm, setShowLangConfirm] = useState(false);
  const [pendingLang, setPendingLang] = useState<"en" | "ar" | null>(null);

  const handleLangClick = (newLang: "en" | "ar") => {
    if (newLang === lang) return;
    
    setPendingLang(newLang);
    setShowLangConfirm(true);
  };

  const confirmLangChange = () => {
    if (pendingLang) {
      setLang(pendingLang);
      setShowLangConfirm(false);
      setPendingLang(null);
    }
  };

  const cancelLangChange = () => {
    setShowLangConfirm(false);
    setPendingLang(null);
  };

  return (
    <>
      <div className="flex gap-2">
        <button
          onClick={() => handleLangClick("en")}
          className={`px-4 py-2 rounded-full font-sans font-semibold transition-colors duration-300 ${
            lang === "en" 
              ? "bg-gold-500 text-black" 
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => handleLangClick("ar")}
          className={`px-4 py-2 rounded-full font-sans font-semibold transition-colors duration-300 ${
            lang === "ar" 
              ? "bg-gold-500 text-black" 
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          عربي
        </button>
      </div>

      {/* Language Change Confirmation Modal */}
      {showLangConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
            <h3 className="text-xl font-sans font-bold text-gray-900 mb-4 text-center">
              {lang === "en" ? "Change Language?" : "تغيير اللغة؟"}
            </h3>
            <p className="text-gray-600 mb-6 text-center font-sans">
              {lang === "en" 
                ? `Are you sure you want to change the language to ${pendingLang === "ar" ? "Arabic" : "English"}?`
                : `هل أنت متأكد من أنك تريد تغيير اللغة إلى ${pendingLang === "en" ? "الإنجليزية" : "العربية"}؟`
              }
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={confirmLangChange}
                className="bg-gold-500 text-black px-6 py-2 rounded-lg font-sans font-semibold hover:bg-gold-600 transition-colors duration-300"
              >
                {lang === "en" ? "Yes, Change" : "نعم، غيّر"}
              </button>
              <button
                onClick={cancelLangChange}
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-sans font-semibold hover:bg-gray-300 transition-colors duration-300"
              >
                {lang === "en" ? "Cancel" : "إلغاء"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


