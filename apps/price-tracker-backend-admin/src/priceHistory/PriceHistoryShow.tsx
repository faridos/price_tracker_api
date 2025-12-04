import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { TRACKEDPRODUCT_TITLE_FIELD } from "../trackedProduct/TrackedProductTitle";

export const PriceHistoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="capturedAt" source="capturedAt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="price" source="price" />
        <ReferenceField
          label="TrackedProduct"
          source="trackedproduct.id"
          reference="TrackedProduct"
        >
          <TextField source={TRACKEDPRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
