import type { stardust } from '@nebula.js/stardust';
import { KeyCodes } from '../../constants';
import focusSelectionToolbar from '../focus-selection-toolbar';
import preventDefaultBehavior from '../prevent-default-behavior';

const handleLastTab = (evt: React.KeyboardEvent, keyboard: stardust.Keyboard, isSelectionMode = false) => {
  if (isSelectionMode && evt.key === KeyCodes.TAB && !evt.shiftKey) {
    // tab key: focus on the selection toolbar
    preventDefaultBehavior(evt);
    focusSelectionToolbar(evt.target as HTMLElement, keyboard, false);
  }
};

export default handleLastTab;
