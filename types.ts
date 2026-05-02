export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export type GrantStatus = 'Active' | 'Coming Soon' | 'Closed';
export type FAQCategory = 'Eligibility' | 'Application Process' | 'Heating' | 'Insulation' | 'Savings' | 'General';

export interface GrantProgram extends CosmicObject {
  type: 'grant-programs';
  metadata: {
    program_name?: string;
    short_description?: string;
    full_details?: string;
    hero_image?: CosmicImage;
    eligibility_criteria?: string;
    max_grant_value?: string;
    status?: GrantStatus;
    featured?: boolean;
  };
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    short_description?: string;
    full_description?: string;
    service_image?: CosmicImage;
    icon_emoji?: string;
    estimated_savings?: string;
    key_benefits?: string;
    available_programs?: GrantProgram[];
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    customer_name?: string;
    location?: string;
    quote?: string;
    customer_photo?: CosmicImage;
    annual_savings?: string;
    service_received?: Service;
    star_rating?: number;
  };
}

export interface FAQ extends CosmicObject {
  type: 'faqs';
  metadata: {
    question?: string;
    answer?: string;
    category?: FAQCategory;
    display_order?: number;
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}