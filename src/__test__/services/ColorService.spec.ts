import ColorService from '../../services/ColorService';
import { ColorEnum } from '../../services/types';

describe('[ ColorService ]', () => {
  test('a. It should return a string.', (done) => {
    const logText = ColorService.logText(ColorEnum.BgBlack, 'Unit Test');
    expect(typeof logText).toBe('string');
    done();
  });
});
