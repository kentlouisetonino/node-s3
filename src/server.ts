require('dotenv').config();
import app from './app';
import ColorService, { ColorEnum } from './services/ColorService';
import EnvironmentService from './services/EnvironmentService';

// * Server listener.
app.listen(EnvironmentService.PORT, () => {
  const serverLogger = ColorService.logText(
    ColorEnum.FgCyan,
    `Server is running in http://localhost:${EnvironmentService.PORT}`
  );

  console.log(serverLogger);
});
