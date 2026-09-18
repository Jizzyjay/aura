export type Sanctuary = {
  slug: string;
  name: string;
  location: string;
  region: string;
  country: string;
  badge: string;
  description: string;
  guests: number;
  suites: number;
  baths: number | string;
  sqft: string;
  pricePerNight: number;
  nights: number;
  rating: number;
  reviews: number;
  galleryCount: number;
  image: string;
  imageAlt: string;
};

export type Landscape = {
  slug: string;
  name: string;
  location: string;
  climate: string;
  badge: string;
  icon: string;
  description: string;
  footnote: string;
  image: string;
  imageAlt: string;
};

export type FeaturedEstate = {
  slug: string;
  name: string;
  location: string;
  suitesLabel: string;
  rating: number;
  reviewsLabel: string;
  estateId: string;
  description: string;
  amenities: string[];
  pricePerNight: number;
  image: string;
  imageAlt: string;
};
