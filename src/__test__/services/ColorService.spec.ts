import ColorService from '../../services/ColorService';
import { ColorEnum } from '../../services/types';

describe('[ ColorService ]', () => {
  test('a. It should return undefined.', (done) => {
    const logText = ColorService.logText(ColorEnum.BgBlack, 'test');
    expect(logText).toBeUndefined();
    done();
  });
});
