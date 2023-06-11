require('dotenv').config();
import app from './app';
import ColorService from './services/ColorService';
import EnvironmentService from './services/EnvironmentService';
import { ColorEnum } from './services/types';

// * Server listener.
app.listen(EnvironmentService.PORT, () => {
  ColorService.logText(
    ColorEnum.FgCyan,
    `Server is running in http://localhost:${EnvironmentService.PORT}`
  );
});
