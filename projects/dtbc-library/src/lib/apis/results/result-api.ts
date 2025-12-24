/**
 * Generic API result interface
 */
export interface ResultApi<T extends {}> {
  data: T | null;
  error: string | null;
}
