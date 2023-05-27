require('dotenv').config();
import app from './app';
import ColorService from './libs/internal-services/ColorService';
import EnvironmentService from './libs/internal-services/EnvironmentService';
import { ColorEnum } from './libs/internal-services/types';

// * Server listener.
app.listen(EnvironmentService.PORT, () => {
  ColorService.logText(
    ColorEnum.FgCyan,
    `Server is running in http://localhost:${EnvironmentService.PORT}`
  );
});
