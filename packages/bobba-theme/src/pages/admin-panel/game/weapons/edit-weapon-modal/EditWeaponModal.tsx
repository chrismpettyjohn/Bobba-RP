import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {Icon} from '@instinct-web/core';
import {Weapon} from '@bobba-rp/types';

import {Form, FormGroup, Input, Label} from 'reactstrap';
import {EditWeaponModalProps} from './EditWeaponModal.types';
import {EditModal} from '../../../components/edit-modal/EditModal';
import {weaponService} from '@bobba-rp/web';

export function EditWeaponModal({weapon, onChange}: EditWeaponModalProps) {
  const [weaponDTO, setWeaponDTO] = useState(weapon);

  function updateWeaponDTO(changes: Partial<Weapon>) {
    setWeaponDTO(_ => ({
      ..._,
      ...changes,
    }));
  }

  async function onSubmit() {
    try {
      await weaponService.updateByID(`${weapon.id}`, weaponDTO);
      toast.success(`${weaponDTO.name} has been updated successfully`);
      onChange();
    } catch {
      toast.error(`${weaponDTO.name} could not be updated`);
    }
  }

  return (
    <EditModal
      header={
        <>
          <Icon type="axe" />
          Editing Weapon: <b>{weapon.name}</b>
        </>
      }
      onSubmit={onSubmit}
    >
      <Form submit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            value={weaponDTO.name}
            onChange={(_: any) => updateWeaponDTO({name: _.target.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label>Cost</Label>
          <Input
            type="number"
            value={weaponDTO.cost}
            onChange={(_: any) =>
              updateWeaponDTO({cost: Number(_.target.value)})
            }
          />
        </FormGroup>
        <FormGroup>
          <Label>Minimum Damage</Label>
          <Input
            type="number"
            value={weaponDTO.minDamage}
            onChange={(_: any) =>
              updateWeaponDTO({minDamage: Number(_.target.value)})
            }
          />
        </FormGroup>
        <FormGroup>
          <Label>Maximum Damage</Label>
          <Input
            type="number"
            value={weaponDTO.maxDamage}
            onChange={(_: any) =>
              updateWeaponDTO({maxDamage: Number(_.target.value)})
            }
          />
        </FormGroup>
        <FormGroup>
          <Label>Maximum Range</Label>
          <Input
            type="number"
            value={weaponDTO.range}
            onChange={(_: any) =>
              updateWeaponDTO({range: Number(_.target.value)})
            }
          />
        </FormGroup>
        <FormGroup>
          <Label>Energy Used</Label>
          <Input
            type="number"
            value={weaponDTO.energyUsed}
            onChange={(_: any) =>
              updateWeaponDTO({energyUsed: Number(_.target.value)})
            }
          />
        </FormGroup>
      </Form>
    </EditModal>
  );
}
