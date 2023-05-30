require('dotenv').config();
import app from './rest/app';
import ColorService from './rest/libs/services/ColorService';
import EnvironmentService from './rest/libs/services/EnvironmentService';
import { ColorEnum } from './rest/libs/services/types';

// * Server listener.
app.listen(EnvironmentService.PORT, () => {
  ColorService.logText(
    ColorEnum.FgCyan,
    `Server is running in http://localhost:${EnvironmentService.PORT}`
  );
});
