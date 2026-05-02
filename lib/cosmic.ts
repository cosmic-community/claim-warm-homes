import { createBucketClient } from '@cosmicjs/sdk';
import type { GrantProgram, Service, Testimonial, FAQ } from '@/types';
import { hasStatus } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}

export async function getGrantPrograms(): Promise<GrantProgram[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'grant-programs' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as GrantProgram[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch grant programs');
  }
}

export async function getFeaturedGrants(): Promise<GrantProgram[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'grant-programs', 'metadata.featured': true })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as GrantProgram[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch featured grants');
  }
}

export async function getGrantBySlug(slug: string): Promise<GrantProgram | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'grant-programs', slug })
      .depth(1);
    return response.object as GrantProgram;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch grant');
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Service[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch services');
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'services', slug })
      .depth(1);
    return response.object as Service;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch service');
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Testimonial[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch testimonials');
  }
}

export async function getFAQs(): Promise<FAQ[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'faqs' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    const faqs = response.objects as FAQ[];
    return faqs.sort((a, b) => {
      const orderA = a.metadata?.display_order ?? 999;
      const orderB = b.metadata?.display_order ?? 999;
      return orderA - orderB;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch FAQs');
  }
}