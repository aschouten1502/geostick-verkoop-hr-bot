'use client';

import { useState, useEffect } from 'react';
import { Settings, Leaf, Users } from 'lucide-react';
import { getRandomFact, type Language, type FactCategory } from '@/lib/geostick-facts';
import { translations } from '@/app/translations';

interface LoadingIndicatorProps {
  language?: Language;
}

export const LoadingIndicator = ({ language = 'nl' }: LoadingIndicatorProps) => {
  const [currentFact, setCurrentFact] = useState(getRandomFact());
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    // Rotate facts every 3.5 seconds
    const interval = setInterval(() => {
      // Fade out
      setFadeIn(false);

      // Wait for fade out, then change fact and fade in
      setTimeout(() => {
        setCurrentFact(getRandomFact());
        setFadeIn(true);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // Get category label in the current language
  const getCategoryLabel = (category: FactCategory): string => {
    const t = translations[language];
    switch (category) {
      case 'technology':
        return t.factCategoryTechnology;
      case 'sustainability':
        return t.factCategorySustainability;
      case 'social':
        return t.factCategorySocial;
    }
  };

  // Get category icon
  const getCategoryIcon = (category: FactCategory) => {
    const iconProps = { size: 14, className: 'flex-shrink-0' };
    switch (category) {
      case 'technology':
        return <Settings {...iconProps} />;
      case 'sustainability':
        return <Leaf {...iconProps} />;
      case 'social':
        return <Users {...iconProps} />;
    }
  };

  // Get category colors
  const getCategoryColors = (category: FactCategory) => {
    switch (category) {
      case 'technology':
        return 'bg-blue-50 text-blue-700';
      case 'sustainability':
        return 'bg-green-50 text-green-700';
      case 'social':
        return 'bg-purple-50 text-purple-700';
    }
  };

  return (
    <div className="flex justify-start animate-fade-in">
      <div className="flex gap-3 max-w-[85%] sm:max-w-[75%]">
        {/* Bot Avatar */}
        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-lg bg-white">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>

        {/* Fact Card */}
        <div className="bg-white px-6 py-4 rounded-2xl shadow-lg max-w-[500px] transition-opacity duration-300"
             style={{ opacity: fadeIn ? 1 : 0.5 }}>
          {/* Category Badge */}
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-2.5 ${getCategoryColors(currentFact.category)}`}>
            {getCategoryIcon(currentFact.category)}
            <span>{getCategoryLabel(currentFact.category)}</span>
          </div>

          {/* Fact Text */}
          <p className="text-sm text-gray-700 leading-relaxed break-words">
            {currentFact.text[language]}
          </p>
        </div>
      </div>
    </div>
  );
};
