import RootController from '../controllers/RootController';
import ExpressService from '../services/ExpressService';

// Get the express router instance.
const router = ExpressService.router;

router.get('/', RootController.home);

export default router;
