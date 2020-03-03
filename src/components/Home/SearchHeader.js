import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import "./SearchHeader.scss";

const SearchHeader = () => {
  return (
    <Form className="header-search d-flex pb-4">
      <FormControl type="text" placeholder="Search"  />
      <Button className="btn-green">Search</Button>
    </Form>
  );
};

export default SearchHeader;
