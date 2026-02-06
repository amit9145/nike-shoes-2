export interface NavItem {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface BrandIcon {
  src: string;
  alt: string;
}

export interface HeroSectionProps {
  title?: string;
  description?: string;
  shopButtonText?: string;
  categoryButtonText?: string;
  availableOnText?: string;
  brandIcons?: BrandIcon[];
  heroImageSrc?: string;
  heroImageAlt?: string;
}
