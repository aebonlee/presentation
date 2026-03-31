import { powerpointGuide } from './powerpoint';
import { googleSlidesGuide } from './google-slides';
import { canvaGuide } from './canva';
import { miricanvasGuide } from './miricanvas';
import { figmaGuide } from './figma';
import { geniallyGuide } from './genially';

export const toolGuides = [
  powerpointGuide,
  googleSlidesGuide,
  canvaGuide,
  miricanvasGuide,
  figmaGuide,
  geniallyGuide,
];

export const getGuideByToolId = (toolId: string | undefined) => {
  return toolGuides.find(g => g.toolId === toolId);
};
