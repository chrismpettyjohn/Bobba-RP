import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {Icon} from '@instinct-web/core';
import {Form, FormGroup, Input, Label} from 'reactstrap';
import {VendingMachine} from '@bobba-rp/types';
import {EditVendingMachineProps} from './EditVendingMachine.types';
import {EditModal} from '../../../components/edit-modal/EditModal';
import {vendingMachineService} from '@bobba-rp/web';

export function EditVendingMachineModal({
  vendingMachine,
  onChange,
}: EditVendingMachineProps) {
  const [vendingMachineDTO, setVendingMachineDTO] = useState(vendingMachine);

  function updateVendingMachineDTO(changes: Partial<VendingMachine>) {
    setVendingMachineDTO(_ => ({
      ..._,
      ...changes,
    }));
  }

  async function onSubmit() {
    try {
      await vendingMachineService.updateByID(
        `${vendingMachine.id}`,
        vendingMachineDTO
      );
      toast.success(`${vendingMachineDTO.name} has been updated successfully`);
      onChange();
    } catch {
      toast.error(`${vendingMachineDTO.name} could not be updated`);
    }
  }

  return (
    <EditModal
      header={
        <>
          <Icon type="coin" />
          Editing Vending Machine: <b>{vendingMachine.name}</b>
        </>
      }
      onSubmit={onSubmit}
    >
      <Form submit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            value={vendingMachineDTO.name}
            onChange={(_: any) =>
              updateVendingMachineDTO({name: _.target.value})
            }
          />
        </FormGroup>
        <FormGroup>
          <Label>Cost</Label>
          <Input
            type="number"
            value={vendingMachineDTO.cost}
            onChange={(_: any) =>
              updateVendingMachineDTO({cost: Number(_.target.value)})
            }
          />
        </FormGroup>
        <FormGroup>
          <Label>Health Gained</Label>
          <Input
            type="number"
            value={vendingMachineDTO.healthGained}
            onChange={(_: any) =>
              updateVendingMachineDTO({healthGained: Number(_.target.value)})
            }
          />
        </FormGroup>
        <FormGroup>
          <Label>Hunger Restored</Label>
          <Input
            type="number"
            value={vendingMachineDTO.hungerRestored}
            onChange={(_: any) =>
              updateVendingMachineDTO({hungerRestored: Number(_.target.value)})
            }
          />
        </FormGroup>
        <FormGroup>
          <Label>Energy Gained</Label>
          <Input
            type="number"
            value={vendingMachineDTO.energyGained}
            onChange={(_: any) =>
              updateVendingMachineDTO({energyGained: Number(_.target.value)})
            }
          />
        </FormGroup>
      </Form>
    </EditModal>
  );
}
