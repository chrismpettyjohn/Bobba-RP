import {BusinessDTO} from '@bobba-rp/types';

export interface BusinessEditorProps {
  defaultBusiness?: BusinessDTO;
  editorOnly: boolean;
  onSubmit(business: BusinessDTO): void | Promise<void>;
}
