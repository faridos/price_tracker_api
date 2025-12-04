import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TRACKEDPRODUCT_TITLE_FIELD } from "./TrackedProductTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TrackedProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="currentPrice" source="currentPrice" />
        <TextField
          label="desiredDiscountPercentage"
          source="desiredDiscountPercentage"
        />
        <TextField label="ID" source="id" />
        <TextField label="initialPrice" source="initialPrice" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="productUrl" source="productUrl" />
        <ReferenceField label="Store" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="PriceHistory"
          target="trackedProductId"
          label="PriceHistories"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
