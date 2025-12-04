import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="passwordHash" source="passwordHash" />
        <TextField label="Roles" source="roles" />
        <TextField label="telegramChatId" source="telegramChatId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="TrackedProduct"
          target="userId"
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
