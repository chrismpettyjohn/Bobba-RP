import {RPRankEntityStruct} from './rank.types';
import {PermissionStatus} from '@instinct-api/database';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {GovernmentBranch} from '@instinct-plugin/bobba-rp-types';

@Entity('ranks')
export class RPRankEntity implements RPRankEntityStruct {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'name'})
  name!: string;

  @Column({name: 'badgeid'})
  badge!: string;

  @Column()
  level!: number;

  @Column({name: 'description'})
  description!: string;

  @Column({name: 'website_show_staff', type: 'enum', default: '0'})
  websiteShowStaff!: PermissionStatus;

  @Column({name: 'website_show_admin_panel', type: 'enum', default: '0'})
  websiteShowAdminPanel!: PermissionStatus;

  @Column({name: 'website_manage_news', type: 'enum', default: '0'})
  websiteManageNews!: PermissionStatus;

  @Column({name: 'website_manage_ranks', type: 'enum', default: '0'})
  websiteManageRanks!: PermissionStatus;

  @Column({name: 'website_manage_users', type: 'enum', default: '0'})
  websiteManageUsers!: PermissionStatus;

  @Column({name: 'website_manage_bans', type: 'enum', default: '0'})
  websiteManageBans!: PermissionStatus;

  @Column({name: 'website_manage_config', type: 'enum', default: '0'})
  websiteManageConfig!: PermissionStatus;

  @Column({name: 'website_manage_beta_codes', type: 'enum', default: '0'})
  websiteManageBetaCodes!: PermissionStatus;

  @Column({name: 'website_manage_guestbook', type: 'enum', default: '0'})
  websiteManageGuestbook!: PermissionStatus;

  @Column({name: 'website_manage_emulator', type: 'enum', default: '0'})
  websiteManageEmulator!: PermissionStatus;

  @Column({name: 'website_manage_comments', type: 'enum', default: '0'})
  websiteManageComments!: PermissionStatus;

  @Column({name: 'website_manage_forums', type: 'enum', default: '0'})
  websiteManageForums!: PermissionStatus;

  @Column({name: 'website_create_business', type: 'enum', default: '0'})
  websiteCreateBusiness!: PermissionStatus;

  @Column({name: 'website_manage_business', type: 'enum', default: '0'})
  websiteManageBusiness!: PermissionStatus;

  @Column({name: 'website_propose_laws', type: 'enum', default: '0'})
  websiteProposeLaws!: PermissionStatus;

  @Column({name: 'website_vote_on_laws', type: 'enum', default: '0'})
  websiteVoteOnLaws!: PermissionStatus;

  @Column({name: 'website_dismiss_laws', type: 'enum', default: '0'})
  websiteDismissLaws!: PermissionStatus;

  @Column({name: 'website_open_voting_on_laws', type: 'enum', default: '0'})
  websiteOpenVotingOnLaws!: PermissionStatus;

  @Column({name: 'website_stop_voting_on_laws', type: 'enum', default: '0'})
  websiteStopVotingOnLaws!: PermissionStatus;

  @Column({name: 'website_create_guides', type: 'enum', default: '0'})
  websiteCreateGuides!: PermissionStatus;

  @Column({name: 'website_create_guide_categories', type: 'enum', default: '0'})
  websiteCreateGuideCategories!: PermissionStatus;

  @Column({name: 'website_delete_guide_categories', type: 'enum', default: '0'})
  websiteDeleteGuideCategories!: PermissionStatus;

  @Column({name: 'website_manage_food', type: 'enum', default: '0'})
  websiteManageFood!: PermissionStatus;

  @Column({name: 'website_manage_vending_machines', type: 'enum', default: '0'})
  websiteManageVendingMachines!: PermissionStatus;

  @Column({name: 'website_manage_gambling', type: 'enum', default: '0'})
  websiteManageGambling!: PermissionStatus;

  @Column({name: 'website_manage_weapons', type: 'enum', default: '0'})
  websiteManageWeapons!: PermissionStatus;

  @Column({name: 'website_manage_crimes', type: 'enum', default: '0'})
  websiteManageCrimes!: PermissionStatus;

  @Column({name: 'website_manage_rooms', type: 'enum', default: '0'})
  websiteManageRooms!: PermissionStatus;

  @Column({name: 'website_manage_bounties', type: 'enum', default: '0'})
  websiteManageBounties!: PermissionStatus;

  @Column({name: 'website_manage_properties', type: 'enum', default: '0'})
  websiteManageProperties!: PermissionStatus;

  @Column({name: 'website_has_presidential_power', type: 'enum', default: '0'})
  websiteHasPresidentialPower!: PermissionStatus;

  @Column({name: 'website_government_branch'})
  websiteGovernmentBranch!: GovernmentBranch;

  @Column({
    name: 'website_register_political_party',
    type: 'enum',
    default: '0',
  })
  websiteRegisterPoliticalParty!: PermissionStatus;
}
