import type { LucideIcon } from 'lucide-react';

export interface DeliverableItem {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  icon: LucideIcon;
  features: string[];
  price?: number;
  marketPrice?: string;
  imageUrl?: string;
  demoLink?: string;
  referenceImages?: string[];
}

export interface TimelinePhase {
  phase: number;
  title: string;
  duration: string;
  items: string[];
}

export interface SummaryRow {
  service: string;
  price: number;
}