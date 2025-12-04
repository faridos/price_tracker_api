import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PriceHistoryTitle } from "../priceHistory/PriceHistoryTitle";
import { StoreTitle } from "../store/StoreTitle";
import { UserTitle } from "../user/UserTitle";

export const TrackedProductCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="currentPrice" source="currentPrice" />
        <NumberInput
          label="desiredDiscountPercentage"
          source="desiredDiscountPercentage"
        />
        <NumberInput label="initialPrice" source="initialPrice" />
        <BooleanInput label="isActive" source="isActive" />
        <ReferenceArrayInput source="priceHistories" reference="PriceHistory">
          <SelectArrayInput
            optionText={PriceHistoryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="productUrl" source="productUrl" />
        <ReferenceInput source="store.id" reference="Store" label="Store">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
