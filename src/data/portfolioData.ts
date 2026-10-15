export interface PortfolioCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  highlights: string[];
  driveUrl: string;
  tools: string[];
  tag: string;
}

export interface BrandClient {
  name: string;
  intro: string;
  category: string;
  url?: string;
}

export interface DesignService {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ToolItem {
  name: string;
  category: 'Adobe Creative Suite' | 'Vector & Publishing' | 'UI & Digital';
}

export const PORTFOLIO_DRIVE_URL = 'https://drive.google.com/file/d/1sOKAzlr0j6_08XX_ZzIsNOgcT8_i5RAM/view?usp=drivesdk';
export const DESIGNER_NAME = 'Ebaluegbefo Destiny';
export const BRAND_NAME = 'Kelvsdesign';
export const CONTACT_EMAIL = 'ebaluegbefodestiny@gmail.com';
export const CONTACT_PHONE = '+2348054857982';
export const CONTACT_PHONE_DISPLAY = '08054857982';
export const WHATSAPP_NUMBER = '2349160078179';
export const WHATSAPP_DISPLAY = '09160078179';
export const WHATSAPP_URL = 'https://wa.me/2349160078179';

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://instagram.com/kelvsdesign', handle: '@kelvsdesign' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kelvs-design—͟͟͞͞𖣘-275a22367', handle: 'Kelvs Design' },
  { name: 'X', url: 'https://x.com/kelvsdesign', handle: '@kelvsdesign' },
  { name: 'Pinterest', url: 'https://pin.it/667AAmM8i', handle: 'Kelvsdesign' },
  { name: 'WhatsApp', url: 'https://wa.me/2349160078179', handle: '+234 916 007 8179' },
];

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: '01',
    slug: 'branding',
    name: 'Branding & Logo Design',
    description: 'Distinctive logos, typography guidelines, and complete visual identities crafted to give businesses an authentic, enduring presence.',
    highlights: ['Brand identity guidelines & books', 'Scalable vector logomarks & wordmarks', 'Curated color palettes & typography', 'Monogram & modern geometric emblems'],
    driveUrl: PORTFOLIO_DRIVE_URL,
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma'],
    tag: 'Identity & Logos'
  },
  {
    id: '02',
    slug: 'flyers-posters',
    name: 'Flyers & Posters',
    description: 'High-contrast promotional and event flyers engineered for both digital dissemination and large-format print clarity.',
    highlights: ['Concert & nightlife event posters', 'Corporate summit & seminar flyers', 'Retail & promotional sales broadsheets', 'Print-ready CMYK & vibrant RGB formats'],
    driveUrl: PORTFOLIO_DRIVE_URL,
    tools: ['Adobe Photoshop', 'Illustrator', 'InDesign'],
    tag: 'Print & Digital'
  },
  {
    id: '03',
    slug: 'social-media',
    name: 'Social Media Designs',
    description: 'Engaging, swipe-stopping social media graphics, multi-slide carousels, and campaign stories that drive organic engagement.',
    highlights: ['Multi-slide educational carousels', 'Promotional product announcement tiles', 'Instagram, LinkedIn & X banner suites', 'Consistent grid layout templates'],
    driveUrl: PORTFOLIO_DRIVE_URL,
    tools: ['Figma', 'Adobe Photoshop', 'Canva'],
    tag: 'Social Media'
  },
  {
    id: '04',
    slug: 'advertising',
    name: 'Advertising & Promotions',
    description: 'Conversion-focused digital advertising creatives and promotional visuals designed to capture focus within seconds.',
    highlights: ['Targeted Meta & Google banner suites', 'Special campaign & seasonal launch assets', 'High-CTR e-commerce ad banners', 'Striking visual storytelling hooks'],
    driveUrl: PORTFOLIO_DRIVE_URL,
    tools: ['Adobe Photoshop', 'Illustrator', 'After Effects'],
    tag: 'Ad Creatives'
  },
  {
    id: '05',
    slug: 'marketing',
    name: 'Marketing Materials',
    description: 'Professional marketing collateral including brochures, business cards, roll-up banners, and corporate presentation packages.',
    highlights: ['Executive business cards & stationery', 'Tri-fold brochures & corporate profiles', 'Trade show & exhibition roll-up banners', 'Product catalogs & sales one-sheets'],
    driveUrl: PORTFOLIO_DRIVE_URL,
    tools: ['Adobe InDesign', 'Photoshop', 'Illustrator'],
    tag: 'Collateral'
  }
];

export const CLIENT_BRANDS: BrandClient[] = [
  { name: 'Rush Snails', intro: 'Brand assets and promotional designs for agribusiness and gourmet snail distribution.', category: 'Agribusiness & Delivery', url: '' },
  { name: 'Rush Express', intro: 'Visual identity, promotional campaigns, and collateral for express parcel delivery.', category: 'Logistics & Dispatch', url: '' },
  { name: 'Bikass Restaurant', intro: 'Menu layouts, social media visual branding, and promotional dining collateral.', category: 'Culinary & Dining', url: '' },
  { name: 'My Charcoal', intro: 'Product packaging assets and digital marketing graphics for sustainable charcoal.', category: 'Consumer Goods', url: '' },
  { name: 'My Paddi', intro: 'Youth health awareness campaign creatives and social community graphics.', category: 'Health & Community', url: '' },
  { name: 'Mobicule', intro: 'Tech accessory branding, product feature banners, and promotional ad creative.', category: 'Tech & Gadgets', url: '' },
  { name: 'Unboxed Games', intro: 'Social media visuals, tournament posters, and brand marketing creatives.', category: 'Gaming & Entertainment', url: '' }
];

export const SERVICES: DesignService[] = [
  {
    id: '01',
    title: 'Logo Design & Branding',
    description: 'Logos and visual identities that give a brand a clear, memorable look. Every mark is engineered for versatility across digital screens and physical touchpoints.',
    deliverables: ['Primary logo mark & wordmark', 'Monochrome & reversed lockups', 'Color palette & type system', 'Vector files (AI, SVG, PDF, PNG)']
  },
  {
    id: '02',
    title: 'Flyer and Poster Design',
    description: 'Print and digital flyers and posters for events, offers, and announcements. Formatted with high-contrast typography that cuts through visual noise.',
    deliverables: ['Print-ready CMYK with bleed margins', 'Digital RGB formats for web & mobile', 'A4, A3, and custom dimension variations', 'Social media flyer adaptations']
  },
  {
    id: '03',
    title: 'Social Media Graphics',
    description: 'Consistent, eye-catching graphics for your social media channels. Maintain a cohesive brand grid that builds community trust and audience loyalty.',
    deliverables: ['Multi-slide educational carousels', 'Feed announcement templates', 'High-res story & reel covers', 'Editable source files & layout guidelines']
  },
  {
    id: '04',
    title: 'Advertising Creatives',
    description: 'Ad designs made to catch attention and communicate one message clearly. Tailored to drive clicks, registrations, and sales conversions.',
    deliverables: ['Meta (Instagram/Facebook) ad sets', 'Google display banner sizes', 'A/B visual creative variants', 'High-resolution conversion graphics']
  },
  {
    id: '05',
    title: 'Promotional Designs',
    description: 'Visuals that support launches, seasonal sales, discount campaigns, and special brand events with maximum energy and clarity.',
    deliverables: ['Special offer announcement graphics', 'Countdown & teaser campaign assets', 'Discount banners & hero graphics', 'Event invitation graphics']
  },
  {
    id: '06',
    title: 'Marketing Materials',
    description: 'Brochures, cards, and other printed or digital materials for your business. Equip your team with polished physical and digital collateral.',
    deliverables: ['Business cards & stationery kits', 'Bi-fold & tri-fold corporate brochures', 'Exhibition roll-up banners', 'Product catalog & service sheets']
  }
];

export const TOOLS: ToolItem[] = [
  { name: 'Adobe Photoshop', category: 'Adobe Creative Suite' },
  { name: 'Adobe Illustrator', category: 'Adobe Creative Suite' },
  { name: 'Adobe InDesign', category: 'Adobe Creative Suite' },
  { name: 'Adobe After Effects', category: 'Adobe Creative Suite' },
  { name: 'Adobe Lightroom', category: 'Adobe Creative Suite' },
  { name: 'Adobe Premiere Pro', category: 'Adobe Creative Suite' },
  { name: 'Adobe Acrobat', category: 'Adobe Creative Suite' },
  { name: 'Adobe Express', category: 'Adobe Creative Suite' },
  { name: 'Adobe XD', category: 'Adobe Creative Suite' },
  { name: 'Adobe Fresco', category: 'Adobe Creative Suite' },
  { name: 'CorelDRAW', category: 'Vector & Publishing' },
  { name: 'Affinity Designer', category: 'Vector & Publishing' },
  { name: 'Affinity Photo', category: 'Vector & Publishing' },
  { name: 'Affinity Publisher', category: 'Vector & Publishing' },
  { name: 'Figma', category: 'UI & Digital' },
  { name: 'Canva', category: 'UI & Digital' },
  { name: 'Procreate', category: 'UI & Digital' }
];

export const STATS = [
  { value: '4+', label: 'Years Experience', sub: 'In visual branding & graphics' },
  { value: '100+', label: 'Design Assets', sub: 'Logos, flyers, brand kits & collateral' },
  { value: '7+', label: 'Partner Brands', sub: 'Trusted across multiple industries' },
  { value: '100%', label: 'Direct Dedication', sub: 'Tailored to your brand goals' }
];
