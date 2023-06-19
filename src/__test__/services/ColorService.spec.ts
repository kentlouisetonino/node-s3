import ColorService from '../../services/ColorService';
import { ColorEnum } from '../../services/types';

describe('#2. Test ColorService class file.', () => {
  test('a. It should return undefined.', (done) => {
    expect(ColorService.logText(ColorEnum.BgBlack, 'test')).toBe(undefined);
    done();
  });
});
