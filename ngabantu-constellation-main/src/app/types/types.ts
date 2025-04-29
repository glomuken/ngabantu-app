export type Location = {
  area: string;
  // coordinates: string;
}

export type ServiceCategory = 'education' | 'landscaping' | 'home improvement' 

export type ServiceOffer = {
  id: number;
  category: ServiceCategory | string;
  name: string;
  area: string;
  description: string;
  hourly_rate: string;
  user: number;
}

export interface UserProfileProps {
  id: number;
  name: string;
  surname: string;
  location: Location;
  rating?: number;
  serviceCategories?: ServiceCategory[];
  type: 'ServiceProvider' | 'Consumer'; 
  about?: string;
  setShowChat?: any;
}

export interface FABInterface {
  icon?: string;
  onClick?: () => void;
}

// export interface ServiceProviderProps {
//   id: number;
//   name: string;
//   surname: string;
//   location: Location;
//   rating?: number;
//   serviceCategories?: ServiceCategory[];
//   type: 'ServiceProvider' | 'Consumer'; 
//   about?: string;
// }

export interface Review {
  name: string;
  user: number;
}

export interface CardInterface {
  type: 'service' | 'request';
  header: string;
  description: string;
  category: ServiceCategory;
}