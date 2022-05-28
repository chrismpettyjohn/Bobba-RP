import {GuideDTO} from '@instinct-plugin/bobba-rp-types';

export interface GuideEditorProps {
  baseGuideDTO?: GuideDTO;
  onSubmit(newGuideDTO: GuideDTO): Promise<void>;
}
