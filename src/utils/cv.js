// src/utils/cv.js
// Single place to manage CV files per language.
const CV_FILES = {
  fr: { file: 'cv-fr.pdf', downloadName: 'Mohamed-Aziz-Rezgui-CV-FR.pdf' },
  en: { file: 'cv-eng.pdf', downloadName: 'Mohamed-Aziz-Rezgui-CV-EN.pdf' },
};

// Arabic mode falls back to the English CV (change to 'fr' if you prefer).
const FALLBACK = 'en';

export function getCv(language = FALLBACK) {
  const code = String(language || FALLBACK).toLowerCase().slice(0, 2); // "fr-FR" -> "fr"
  const cv = CV_FILES[code] || CV_FILES[FALLBACK];
  return {
    href: `${import.meta.env.BASE_URL}${cv.file}`,
    downloadName: cv.downloadName,
  };
}