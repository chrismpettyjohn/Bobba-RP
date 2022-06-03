import {CrimePipe} from './crime.pipe';
import {CrimeModule} from './crime.module';
import {HasSession} from '@instinct-api/session';
import {Crime} from '@bobba-rp/types';
import {crimeWire} from '../database/crime/crime.wire';
import {
  CrimeEntity,
  CrimeStackable,
  CrimeTicketable,
} from '../database/crime/crime.entity';
import {CrimeRepository} from '../database/crime/crime.repository';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  CacheTTL,
} from '@nestjs/common';
import {CrimeDTOImplementation} from './crime.dto';
import {HasRPScope} from '../session/permission-scope.decorator';
import {TWENTY_MINUTES_IN_MS} from '../time.const';

@Controller('crimes')
@HasSession()
export class CrimeController {
  constructor(private readonly crimeRepo: CrimeRepository) {}

  @Post()
  @HasRPScope('websiteManageCrimes')
  async createCrime(@Body() crimeDTO: CrimeDTOImplementation): Promise<Crime> {
    const newCrime = await this.crimeRepo.create({
      ...crimeDTO,
      ticketable: crimeDTO.ticketable
        ? CrimeTicketable.Yes
        : CrimeTicketable.No,
      stackable: crimeDTO.stackable ? CrimeStackable.Yes : CrimeStackable.No,
    });
    return crimeWire(newCrime);
  }

  @Get()
  @CacheTTL(TWENTY_MINUTES_IN_MS)
  async getCrimes(): Promise<Crime[]> {
    const crimes = await this.crimeRepo.find();
    return crimes.map(crimeWire);
  }

  @Get(':crimeID')
  async getCrimeByID(
    @Param('crimeID', CrimePipe) crime: CrimeEntity
  ): Promise<CrimeModule> {
    return crimeWire(crime);
  }

  @Patch(':crimeID')
  @HasRPScope('websiteManageCrimes')
  async updateCrimeByID(
    @Param('crimeID', CrimePipe) crime: CrimeEntity,
    @Body() crimeDTO: CrimeDTOImplementation
  ) {
    await this.crimeRepo.update(
      {id: crime.id!},
      {
        ...crimeDTO,
        ticketable: crimeDTO.ticketable
          ? CrimeTicketable.Yes
          : CrimeTicketable.No,
        stackable: crimeDTO.stackable ? CrimeStackable.Yes : CrimeStackable.No,
      }
    );
  }

  @Delete(':crimeID')
  @HasRPScope('websiteManageCrimes')
  async deleteCrimeByID(@Param('crimeID', CrimePipe) crime: CrimeEntity) {
    await this.crimeRepo.delete({id: crime.id!});
  }
}
