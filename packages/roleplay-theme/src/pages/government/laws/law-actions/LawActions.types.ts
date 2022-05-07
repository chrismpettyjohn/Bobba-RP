import {Law} from '@instinct-plugin/bobba-rp-types';

export interface LawActionsProps {
  law: Law;
  onChange(): void;
}
