import React from "react";
import ReactDom from "react-dom";
import Button from "./../button";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer"; //snapshot test

//"npm test" to run test

afterEach(cleanup); //to allow mulitple tests on the same button with different parameters

//test app for crashing
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Button></Button>, div);
});

it("renders button correctly", () => {
  //data-testdidvv = button
  const { getByTestId } = render(<Button label="click me please" />);
  expect(getByTestId("button")).toHaveTextContent("click me please");
});

it("renders button correctly", () => {
  //data-testdidvv = button
  const { getByTestId } = render(<Button label="save" />);
  expect(getByTestId("button")).toHaveTextContent("save");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Button label="save"></Button>).toJSON(); //created an object and save to tree
  expect(tree).toMatchSnapshot(); //this creates and looks for a folder called snapshot by default
});
