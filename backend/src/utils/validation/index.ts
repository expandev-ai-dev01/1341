/**
 * @summary
 * Validation utility functions
 *
 * @module utils/validation
 */

import { z } from 'zod';

/**
 * @summary
 * Common Zod validation schemas
 */

export const zString = z.string().min(1, 'Field is required');
export const zNullableString = z.string().nullable();
export const zNumber = z.number();
export const zNullableNumber = z.number().nullable();
export const zBoolean = z.boolean();
export const zDate = z.date();
export const zDateString = z.string().datetime();

/**
 * @summary
 * Validate required parameter
 *
 * @function validateRequiredParam
 * @module utils/validation
 *
 * @param {any} param - Parameter to validate
 * @param {string} paramName - Parameter name
 *
 * @throws {Error} When parameter is null or undefined
 *
 * @example
 * validateRequiredParam(userId, 'userId');
 */
export function validateRequiredParam(param: any, paramName: string): void {
  if (param === null || param === undefined) {
    throw new Error(`${paramName} is required`);
  }
}

/**
 * @summary
 * Validate positive number
 *
 * @function validatePositiveNumber
 * @module utils/validation
 *
 * @param {number} value - Value to validate
 * @param {string} fieldName - Field name
 *
 * @throws {Error} When value is not positive
 *
 * @example
 * validatePositiveNumber(score, 'score');
 */
export function validatePositiveNumber(value: number, fieldName: string): void {
  if (value <= 0) {
    throw new Error(`${fieldName} must be a positive number`);
  }
}

/**
 * @summary
 * Validate array not empty
 *
 * @function validateArrayNotEmpty
 * @module utils/validation
 *
 * @param {any[]} array - Array to validate
 * @param {string} fieldName - Field name
 *
 * @throws {Error} When array is empty
 *
 * @example
 * validateArrayNotEmpty(questions, 'questions');
 */
export function validateArrayNotEmpty(array: any[], fieldName: string): void {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error(`${fieldName} must not be empty`);
  }
}
