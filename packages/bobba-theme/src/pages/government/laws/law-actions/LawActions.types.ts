import {Law} from '@bobba-rp/types';

export interface LawActionsProps {
  law: Law;
  onChange(): void;
}
