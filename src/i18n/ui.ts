// src/i18n/ui.ts

export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export const defaultLang = 'en';

export const ui = {
  en: {
    // ── Nav ─────────────────────────────────────────────────────────────────
    'nav.proj': 'PROJ',
    'nav.wiki': 'WIKI',
    'nav.cv': 'CV',

    // ── Hero ─────────────────────────────────────────────────────────────────
    'hero.role': 'Software Engineer // Chef Technique @ SecOps',
    'hero.cv_btn': 'VIEW FULL CV',

    // ── Home (Hybrid Headings) ───────────────────────────────────────────────
    'home.signal': 'SIGNAL', // Kept for backward compatibility if needed
    'home.projects': 'Projects',
    'home.experience': 'Experience',
    'home.skills_stats': 'Skills & Stats',

    // ── Home (Content) ───────────────────────────────────────────────────────
    'home.signal.text':
      'I engineer resilient systems and AI pipelines. Currently optimizing high-traffic infrastructure at SecOps and building autonomous agents.',
    'home.focus': '[FOCUS]',
    'home.focus.text': 'DevOps / Reinforcement Learning',
    'home.focus.tags': ['Reinforcement Learning', 'DevOps', 'AWS Cloud', 'System Design'],

    'home.indexing.prefix': 'Indexing ',
    'home.indexing.suffix': ' active operations. Recent highlights:',

    'home.view_all_projects': 'VIEW_ALL_PROJECTS',
    'home.view_full_cv': 'VIEW_FULL_CV',

    'home.read': '[CURRENT_READ]',
    'home.logs': 'LOGS [Recent Activity]',
    'home.present': '>> PRESENT',
    'home.details': '>> VIEW_DETAILS',
    'home.now': 'NOW',

    'home.reading': '[CURRENTLY_READING]',
    'home.commit': '[LATEST_COMMIT]',

    'home.activity.label': 'SYSTEM_ACTIVITY (Last 30 Days)',

    'home.contact.text': 'Want to discuss systems, AI, or a potential internship?',
    'home.email_btn': 'INITIATE_CONTACT',

    // ── CV ───────────────────────────────────────────────────────────────────
    'cv.download': 'DOWNLOAD_PDF',
    'cv.summary': 'SUMMARY',
    'cv.skills': 'TECHNICAL SKILLS',
    'cv.experience': 'PROFESSIONAL EXPERIENCE',
    'cv.leadership': 'LEADERSHIP & EXTRACURRICULAR',
    'cv.education': 'EDUCATION',
    'cv.honors': 'HONORS & AWARDS',
    'cv.present': 'Present',
    'cv.projects': 'ACADEMIC & PERSONAL PROJECTS',
    'cv.summary.text':
      'Fourth-year Software & AI Engineering Student (ENSA Fès) seeking a 2-month PFA internship (July-August 2026). Full-Stack Developer (Spring Boot/Angular) with a specialty in AWS Cloud Security and VPS management. As SecOps Technical Lead, architected high-availability infrastructure for 300+ users. Proven track record in stabilizing production environments, notably resolving critical Docker/Maven conflicts at IR4LAB.',
  },

  fr: {
    // ── Nav ─────────────────────────────────────────────────────────────────
    'nav.proj': 'PROJETS',
    'nav.wiki': 'WIKI',
    'nav.cv': 'CV',

    // ── Hero ─────────────────────────────────────────────────────────────────
    'hero.role': 'Ingénieur Logiciel // Chef Technique @ SecOps',
    'hero.cv_btn': 'VOIR LE CV COMPLET',

    // ── Home (Hybrid Headings) ───────────────────────────────────────────────
    'home.signal': 'SIGNAL',
    'home.projects': 'Projets',
    'home.experience': 'Expérience',
    'home.skills_stats': 'Compétences & Stats',

    // ── Home (Content) ───────────────────────────────────────────────────────
    'home.signal.text':
      "Je conçois des systèmes résilients et des pipelines IA. Actuellement, j'optimise l'infrastructure à fort trafic chez SecOps et je développe des agents autonomes.",
    'home.focus': '[FOCUS]',
    'home.focus.text': 'DevOps / Apprentissage par Renforcement',
    'home.focus.tags': [
      'Apprentissage par Renforcement',
      'DevOps',
      'AWS Cloud',
      'Conception Systèmes',
    ],

    'home.indexing.prefix': 'Indexation de ',
    'home.indexing.suffix': ' opérations actives. Points forts récents :',

    'home.view_all_projects': 'VOIR_TOUS_LES_PROJETS',
    'home.view_full_cv': 'VOIR_LE_CV_COMPLET',

    'home.read': '[LECTURE_EN_COURS]',
    'home.logs': 'JOURNAL [Activité Récente]',
    'home.present': '>> PRÉSENT',
    'home.details': '>> VOIR_DÉTAILS',
    'home.now': 'MAINTENANT',

    'home.reading': '[LECTURE_EN_COURS]',
    'home.commit': '[DERNIER_COMMIT]',

    'home.activity.label': 'ACTIVITÉ_SYSTÈME (30 derniers jours)',

    'home.contact.text': "Envie de discuter systèmes, IA, ou d'une opportunité de stage ?",
    'home.email_btn': 'INITIER_LE_CONTACT',

    // ── CV ───────────────────────────────────────────────────────────────────
    'cv.download': 'TÉLÉCHARGER_PDF',
    'cv.summary': 'RÉSUMÉ',
    'cv.skills': 'COMPÉTENCES TECHNIQUES',
    'cv.experience': 'EXPÉRIENCE PROFESSIONNELLE',
    'cv.leadership': 'LEADERSHIP & PARASCOLAIRE',
    'cv.education': 'FORMATION',
    'cv.honors': 'PRIX & CERTIFICATIONS',
    'cv.present': 'Présent',
    'cv.projects': 'PROJETS ACADÉMIQUES & PERSONNELS',
    // Update French summary to match PDF:
    'cv.summary.text':
      "Élève ingénieur en 4ème année (Génie Logiciel & IA) à l'ENSA Fès, recherchant un stage PFA de 2 mois (Juillet-Août 2026). Développeur Full-Stack (Spring Boot/Angular) spécialisé en Sécurité Cloud AWS et gestion VPS. En tant que Chef Technique SecOps, j'ai architecturé une infrastructure haute disponibilité pour 300+ utilisateurs. Expérience prouvée en stabilisation d'environnements de production (résolution de conflits Docker/Maven critiques chez IR4LAB).",
  },
} as const;

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: TranslationKey) {
    // Fall back to default language if a key is missing in the target lang
    return (ui[lang] as (typeof ui)[typeof defaultLang])[key] ?? ui[defaultLang][key];
  };
}