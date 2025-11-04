'use client';

import { translations, type LanguageCode } from "../translations";

interface WelcomeScreenProps {
  selectedLanguage: string;
}

export const WelcomeScreen = ({ selectedLanguage }: WelcomeScreenProps) => {
  const t = translations[selectedLanguage as LanguageCode] || translations.nl;

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 animate-fade-in">
      <div className="relative mb-3">
        {/* Gradient Circle */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#e32219] to-[#c01d15]
                        flex items-center justify-center shadow-xl">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
      </div>

      <h2 className="mt-2 text-lg sm:text-xl font-bold text-gray-800 text-center">
        {t.welcomeTitle}
      </h2>
      <p className="mt-2 text-sm text-gray-600 text-center max-w-md px-4">
        {t.welcomeSubtitle}
      </p>

      {/* Language Hint - Klein en compact */}
      <div className="mt-3 px-3 py-1 bg-blue-50 border border-blue-200 rounded-lg max-w-sm">
        <p className="text-xs text-blue-700 text-center">
          💡 {t.languageHint}
        </p>
      </div>

      {/* Compacte voorbeelden - alleen 2 in plaats van 4 */}
      <div className="mt-4 flex flex-col gap-2 w-full max-w-md px-2">
        {t.examples.slice(0, 2).map((example, idx) => (
          <div key={idx} className="bg-white/80 rounded-lg px-3 py-2 text-xs text-gray-600 border border-gray-200">
            <span className="text-gray-400">{t.exampleLabel}:</span> <span className="font-medium">"{example}"</span>
          </div>
        ))}
      </div>

      {/* Powered by Levtor */}
      <div className="mt-4">
        <p className="text-xs text-gray-400">
          Powered by <span className="font-semibold">Levtor</span>
        </p>
      </div>
    </div>
  );
};
