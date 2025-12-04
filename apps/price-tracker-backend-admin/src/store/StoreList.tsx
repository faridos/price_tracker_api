import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const StoreList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Stores"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="baseUrl" source="baseUrl" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="name" source="name" />
        <TextField label="priceSelector" source="priceSelector" />
        <TextField label="scrapingMethod" source="scrapingMethod" />
        <TextField label="titleSelector" source="titleSelector" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
