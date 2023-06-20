import { ColorEnum } from './types';

export default class ColorService {
  static logText(color: ColorEnum, text: string): string {
    return `${color}${text}${ColorEnum.Reset}`;
  }
}
