import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TrackedProductTitle } from "../trackedProduct/TrackedProductTitle";

export const PriceHistoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="capturedAt" source="capturedAt" />
        <NumberInput label="price" source="price" />
        <ReferenceInput
          source="trackedProduct.id"
          reference="TrackedProduct"
          label="TrackedProduct"
        >
          <SelectInput optionText={TrackedProductTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
