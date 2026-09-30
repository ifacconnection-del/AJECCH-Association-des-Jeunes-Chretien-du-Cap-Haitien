/**
 * Format a number with thousand separators
 */
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Truncate text to a maximum length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

/**
 * Generate unique ID
 */
export function generateId(prefix: string = 'id'): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Check if a string is empty or whitespace only
 */
export function isEmpty(str: string): boolean {
  return str.trim().length === 0;
}

/**
 * Get time difference string (e.g., "Il y a 2 jours")
 */
export function getTimeDifference(dateString: string): string {
  // For now, return the input - in production, implement proper date parsing
  return dateString;
}
