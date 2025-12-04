import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TrackedProductTitle } from "../trackedProduct/TrackedProductTitle";

export const PriceHistoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
