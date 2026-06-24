import React, { useState, useEffect, useRef } from 'react';
import { FaPalette } from 'react-icons/fa';
interface ThemeOption {
  id: string;
  name: string;
  color: string;
  class: string;
}
export const ThemeSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('theme-cyan');
  const widgetRef = useRef<HTMLDivElement>(null);
  const themes: ThemeOption[] = [
    { id: 'cyan', name: 'Neon Cyan', color: '#00ffff', class: 'theme-cyan' },
    { id: 'purple', name: 'Radiant Purple', color: '#ba55d3', class: 'theme-purple' },
    { id: 'emerald', name: 'Emerald Green', color: '#10b981', class: 'theme-emerald' },
    { id: 'gold', name: 'Sunset Gold', color: '#f59e0b', class: 'theme-gold' },
  ];
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const defaultTheme = savedTheme || 'theme-cyan';
    setActiveTheme(defaultTheme);
    document.documentElement.classList.forEach((className) => {
      if (className.startsWith('theme-')) {
        document.documentElement.classList.remove(className);
      }
    });
    document.documentElement.classList.add(defaultTheme);
  }, []);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);
  const selectTheme = (themeClass: string) => {
    setActiveTheme(themeClass);
    localStorage.setItem('portfolio-theme', themeClass);
    document.documentElement.classList.forEach((className) => {
      if (className.startsWith('theme-')) {
        document.documentElement.classList.remove(className);
      }
    });
    document.documentElement.classList.add(themeClass);
  };
  return (
    <div className="theme-picker-widget" ref={widgetRef}>
      <div className={`theme-panel-expanded ${isOpen ? 'panel-active' : ''}`}>
        <h6 className="text-white fs-7 fw-bold mb-3 border-bottom border-light border-opacity-10 pb-2 text-center text-uppercase">
          Theme Accent
        </h6>
        <div className="d-flex justify-content-center gap-3 align-items-center">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => selectTheme(t.class)}
              className={`theme-color-option ${activeTheme === t.class ? 'active-option' : ''}`}
              style={{ backgroundColor: t.color }}
              title={t.name}
              aria-label={`Switch to ${t.name}`}
            />
          ))}
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="theme-toggle-trigger"
        aria-label="Open Theme Customizer"
      >
        <FaPalette size={18} />
      </button>
    </div>
  );
};
export default ThemeSwitcher;