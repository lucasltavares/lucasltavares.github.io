/**
 * Page Metadata Configuration
 * 
 * Centralized SEO metadata for all static pages. Single source of truth
 * for titles and descriptions to ensure consistency across the site.
 * 
 * Usage:
 * ```astro
 * ---
 * import BaseLayout from '../layouts/BaseLayout.astro';
 * import SEO from '../components/SEO.astro';
 * import { pagesConfig } from '../pages.config';
 * ---
 * 
 * <BaseLayout>
 *   <SEO 
 *     slot="head"
 *     title={pagesConfig.projects.title}
 *     description={pagesConfig.projects.description}
 *   />
 *   <!-- Page content -->
 * </BaseLayout>
 * ```
 * 
 * @module pages.config
 */

/**
 * Page metadata interface
 */
interface PageMeta {
  /** Page title (used in browser tab and SEO) */
  title: string;

  /** Page description (used in meta tags and SEO) */
  description: string;

  /** Page heading (displayed as h1, optional - defaults to title) */
  heading?: string;

  /** Page intro text (displayed below heading, optional) */
  intro?: string;
}

/**
 * Pages configuration object
 * 
 * Contains metadata for all static pages. Dynamic pages (like individual
 * project or article pages) generate their own metadata from content.
 */
export const pagesConfig = {
  /**
   * Home page (/)
   * Note: Home page uses siteConfig for title/description as it represents the site itself
   */
  home: {
    title: 'Home',
    description: 'Engineering leader specializing in system architecture, technical decision-making, and delivering measurable business impact.',
  },

  /**
   * Projects listing page (/projects)
   */
  projects: {
    title: 'Projects - Case Studies',
    description: 'Detailed case studies showcasing problem-solving approach, technical decisions, and measurable impact across various engineering projects.',
    heading: 'Projects',
    intro: 'Case studies that demonstrate how I approach complex problems, make technical decisions, and deliver measurable impact. Each project tells the story of the challenge, the constraints, the decisions made, and the outcomes achieved.',
  },

  /**
   * Decisions listing page (/decisions)
   */
  decisions: {
    title: 'Decisions - Architectural & Technical Choices',
    description: 'A log of architectural and technical decisions, documenting the context, alternatives considered, and reasoning behind key engineering choices.',
    heading: 'Decisions',
    intro: 'A transparent log of architectural and technical decisions I\'ve made throughout my career. Each entry documents the context, alternatives considered, and the reasoning behind the choice.',
  },

  /**
   * Journey timeline page (/journey)
   */
  journey: {
    title: 'Journey - Career Growth & Learning Timeline',
    description: 'A chronological timeline of my professional journey, from IT support to full stack developer, highlighting key milestones and career transitions.',
    heading: 'Journey',
    intro: 'From IT intern to Full Stack Developer — my career journey at a glance. Each step taught me something new, from infrastructure and monitoring to backend development and system architecture.',
  },

  /**
   * Writing/blog listing page (/writing)
   */
  writing: {
    title: 'Writing - Technical Articles & Insights',
    description: 'Technical articles, tutorials, and lessons learned from building software systems with Laravel, PHP, and cloud technologies.',
    heading: 'Writing',
    intro: 'Technical articles and tutorials about Laravel, PHP, cloud deployment, and development best practices. Sharing what I learn along the way.',
  },

  /**
   * Speaking engagements page (/speaking)
   */
  speaking: {
    title: 'Speaking - Talks & Presentations',
    description: 'Conference talks, meetup presentations, podcast appearances, and workshops on software engineering, architecture, and technical leadership.',
    heading: 'Speaking',
    intro: 'I regularly speak at conferences, meetups, and on podcasts about software architecture, engineering practices, and technical leadership. Here\'s a collection of my talks and presentations.',
  },

  /**
   * Uses/tools page (/uses)
   */
  uses: {
    title: 'Uses - Tools, Stack & Environment',
    description: 'The tools, technologies, and environment I use daily for backend and full stack development.',
    heading: 'Uses',
    intro: 'A look at the tools, technologies, and environment I use daily. From my development setup to the tech stack I work with in production.',
  },

  /**
   * Contact page (/contact)
   */
  contact: {
    title: 'Contact - Get in Touch',
    description: 'Get in touch to discuss opportunities, collaborations, or technical challenges.',
    heading: 'Let\'s Talk',
  },
} as const;

/**
 * Type export for the pages configuration
 */
export type PagesConfig = typeof pagesConfig;

/**
 * Type export for a single page metadata
 */
export type PageConfig = PageMeta;
