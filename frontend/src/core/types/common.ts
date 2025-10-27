/**
 * @types common
 * @summary Common type definitions used across the application
 * @domain core
 * @category types
 */

export type SeniorityLevel = 'junior' | 'pleno' | 'senior';

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}
