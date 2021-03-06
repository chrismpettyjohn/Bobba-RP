import React from 'react';
import {Select} from '@instinct-web/core';
import {OnChangeValue} from 'react-select';
import {RoomSelectorProps} from './RoomSelector.types';
import {RPRoom} from '@bobba-rp/types';

export function RoomSelector({rooms, roomID, onChange}: RoomSelectorProps) {
  function onNewRoom(event: OnChangeValue<RPRoom, any>) {
    onChange(event as any);
  }

  return (
    <Select
      options={rooms ?? []}
      getOptionLabel={(_: any) => _.roomName}
      getOptionValue={(_: any) => _.id as any}
      value={rooms?.find(_ => _.id === roomID) ?? null}
      onChange={onNewRoom}
    />
  );
}
