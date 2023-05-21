import { ColorEnum } from './types';

export default class ColorService {
  static logText(color: ColorEnum, text: string) {
    console.log(`${color}${text}${ColorEnum.Reset}`);
  }
}
