import test from 'ava';
// eslint-disable-next-line import/extensions
import noop from './index';

test('main exports a function', t => {
  t.deepEqual(typeof noop, 'function');
});
