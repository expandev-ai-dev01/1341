/**
 * @summary
 * Main API router with version management
 *
 * @module routes
 */

import { Router } from 'express';
import v1Routes from './v1';

const router = Router();

/**
 * @summary
 * Version 1 routes (current stable)
 */
router.use('/v1', v1Routes);

export default router;
