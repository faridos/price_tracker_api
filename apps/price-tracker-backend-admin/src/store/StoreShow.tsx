import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { STORE_TITLE_FIELD } from "./StoreTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const StoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="baseUrl" source="baseUrl" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="name" source="name" />
        <TextField label="priceSelector" source="priceSelector" />
        <TextField label="scrapingMethod" source="scrapingMethod" />
        <TextField label="titleSelector" source="titleSelector" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="TrackedProduct"
          target="storeId"
          label="TrackedProducts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
