import ColorService from '../../services/ColorService';
import { ColorEnum } from '../../services/types';

describe('[ src/services/ColorService ]', () => {
  test('a. It should return a type string.', (done) => {
    const logText = ColorService.logText(ColorEnum.BgBlack, 'Unit Test');
    expect(typeof logText).toBe('string');
    done();
  });
});
