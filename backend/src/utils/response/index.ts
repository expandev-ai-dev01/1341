/**
 * @summary
 * Standard API response utilities
 *
 * @module utils/response
 */

/**
 * @interface SuccessResponse
 * @description Standard success response structure
 *
 * @property {true} success - Success flag
 * @property {T} data - Response data
 * @property {object} [metadata] - Optional metadata
 */
export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    timestamp: string;
  };
}

/**
 * @interface ErrorResponse
 * @description Standard error response structure
 *
 * @property {false} success - Success flag
 * @property {object} error - Error details
 */
export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

/**
 * @summary
 * Create a success response
 *
 * @function successResponse
 * @module utils/response
 *
 * @param {T} data - Response data
 * @param {object} [metadata] - Optional metadata
 *
 * @returns {SuccessResponse<T>} Success response object
 *
 * @example
 * const response = successResponse({ id: 1, name: 'Test' });
 */
export function successResponse<T>(data: T, metadata?: any): SuccessResponse<T> {
  return {
    success: true,
    data,
    metadata: metadata
      ? { ...metadata, timestamp: new Date().toISOString() }
      : { timestamp: new Date().toISOString() },
  };
}

/**
 * @summary
 * Create an error response
 *
 * @function errorResponse
 * @module utils/response
 *
 * @param {string} message - Error message
 * @param {string} [code] - Error code
 * @param {any} [details] - Error details
 *
 * @returns {ErrorResponse} Error response object
 *
 * @example
 * const response = errorResponse('Validation failed', 'VALIDATION_ERROR');
 */
export function errorResponse(message: string, code = 'ERROR', details?: any): ErrorResponse {
  return {
    success: false,
    error: {
      code,
      message,
      details,
    },
    timestamp: new Date().toISOString(),
  };
}
