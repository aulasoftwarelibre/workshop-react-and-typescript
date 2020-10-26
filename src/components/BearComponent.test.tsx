import React from "react";
import { BearComponent } from "./BearComponent";
import { render, fireEvent } from "@testing-library/react";

describe("BearComponent", () => {
  it("shows a initial count of 0 bears", () => {
    const { getByText } = render(<BearComponent />);
    getByText("0 Bears");
  });

  it("increases the count when I click the increase button", () => {
    const { getByText, getByTestId } = render(<BearComponent />);
    getByText("0 Bears");
    const increaseButton = getByTestId("increase-button");

    fireEvent.click(increaseButton);

    getByText("1 Bears");
  });

  it("decreases the count when I click the decrease button", () => {
    const { getByText, getByTestId } = render(<BearComponent />);
    getByText("0 Bears");
    const decreaseButton = getByTestId("decrease-button");

    fireEvent.click(decreaseButton);

    getByText("-1 Bears");
  });

  it('shows a message when the user reach a count of 10 bears', () => {
    global.alert = jest.fn();

    const { getByTestId } = render(<BearComponent />);

    const increaseButton = getByTestId("increase-button");

    for (let i = 0; i < 10; i++) {
      fireEvent.click(increaseButton);
    }

    expect(global.alert).toHaveBeenCalled();
  })
});

describe('Modify title custom hook', () => {
  const { getByTestId } = render(<BearComponent />);

  const decreaseButton = getByTestId("decrease-button");

  fireEvent.click(decreaseButton);

  expect(global.document.title).toEqual('Warning! Negative bears');
});
