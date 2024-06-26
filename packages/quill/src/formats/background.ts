import { ClassAttributor, Scope } from '@shaxpir/parchment';
import { ColorAttributor } from './color.js';

const BackgroundClass = new ClassAttributor('background', 'ql-bg', {
  scope: Scope.INLINE,
});
const BackgroundStyle = new ColorAttributor('background', 'background-color', {
  scope: Scope.INLINE,
});

export { BackgroundClass, BackgroundStyle };
