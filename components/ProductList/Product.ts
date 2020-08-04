export interface Product {
  id: string;
  selected: Boolean;
  ean: string;
  gpc: string;
  title: string;
  subtitle?: string;
  specsTag: string;
  summary: string;
  rating: number;
  shortDescription: string;
  longDescription: string;
  urls: URL[];
  images: Image[];
  media: Image[];
  offerData: OfferData;
  parentCategoryPaths: ParentCategoryPath[];
}

export interface Image {
  type: string;
  key: string;
  url: string;
}

export interface OfferData {
  bolCom: number;
  nonProfessionalSellers: number;
  professionalSellers: number;
  offers: Offer[];
}

export interface Offer {
  id: string;
  condition: string;
  price: number;
  availabilityCode: string;
  availabilityDescription: string;
  seller: Seller;
  bestOffer: boolean;
  releaseDate?: string;
}

export interface Seller {
  id: string;
  sellerType: string;
  displayName: string;
  url: string;
  topSeller: boolean;
  useWarrantyRepairConditions: boolean;
}

export interface ParentCategoryPath {
  parentCategories: ParentCategory[];
}

export interface ParentCategory {
  id: string;
  name: string;
}

export interface URL {
  key: string;
  value: string;
}
