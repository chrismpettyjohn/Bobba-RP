import {PermissionStatus, RankEntityStruct} from '@instinct-api/database';
import {GovernmentBranch, RPPermissions} from '@instinct-plugin/bobba-rp-types';

export type RPPermissionsStruct = Record<keyof RPPermissions, PermissionStatus>;

export interface RPRankEntityStruct extends RankEntityStruct {
  description: string;
  websiteManageBounties: PermissionStatus;
  websiteCreateBusiness: PermissionStatus;
  websiteManageBusiness: PermissionStatus;
  websiteManageProperties: PermissionStatus;
  websiteGovernmentBranch: GovernmentBranch;
  websiteProposeLaws: PermissionStatus;
  websiteVoteOnLaws: PermissionStatus;
  websiteHasPresidentialPower: PermissionStatus;
  websiteManageRooms: PermissionStatus;
  websiteManageCrimes: PermissionStatus;
  websiteManageWeapons: PermissionStatus;
  websiteManageGambling: PermissionStatus;
  websiteManageVendingMachines: PermissionStatus;
  websiteManageFood: PermissionStatus;
  websiteCreateGuideCategories: PermissionStatus;
  websiteDeleteGuideCategories: PermissionStatus;
  websiteCreateGuides: PermissionStatus;
  websiteDismissLaws: PermissionStatus;
  websiteOpenVotingOnLaws: PermissionStatus;
  websiteStopVotingOnLaws: PermissionStatus;
  websiteRegisterPoliticalParty: PermissionStatus;
}
