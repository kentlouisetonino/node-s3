import DefaultController from '../controllers/DefaultController';
import ExpressService from '../services/ExpressService';

// * Get the express router instance.
const router = ExpressService.router;

// * Default endpoints.
router.get('/url', DefaultController.home);

export default router;
