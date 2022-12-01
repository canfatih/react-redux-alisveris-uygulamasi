import React, { Component } from 'react';
import {Row,Col} from "reactstrap";
import CategoryList from "../categories/CategoryList";
import ProductList from '../product/ProductList';
export default class DashBoard extends Component {
  render() {
    return <div>
<Row>
  <Col xs="4">
    <CategoryList></CategoryList>
  </Col>
  <Col xs ="8">
    <ProductList></ProductList>
  </Col>
</Row>

    </div>;
  }
}
