import { render, fireEvent } from "@testing-library/react";
import Configurator from "./Configurator";

describe("Configurator", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Configurator />);
    expect(getByText("Pizza Configurator")).toBeInTheDocument();
  });

  describe("with default options", () => {
    it("minimal cost", () => {
      const { getByText } = render(<Configurator />);
      expect(getByText("Checkout 200 RUB")).toBeInTheDocument();
    });
  });

  describe("with all additional options checked", () => {
    it("maximum cost", () => {
      const { getByText } = render(<Configurator />);
      fireEvent.click(getByText("Большая (35см)"));
      fireEvent.click(getByText("Пышное"));
      fireEvent.click(getByText("Острый"));
      fireEvent.click(getByText("Моцарелла"));
      fireEvent.click(getByText("Чеддер"));
      fireEvent.click(getByText("Дор блю"));
      fireEvent.click(getByText("Томаты"));
      fireEvent.click(getByText("Грибы"));
      fireEvent.click(getByText("Перец"));
      fireEvent.click(getByText("Бекон"));
      fireEvent.click(getByText("Пепперони"));
      fireEvent.click(getByText("Ветчина"));

      expect(getByText("Checkout 521 RUB")).toBeInTheDocument();
    });
  });

  describe("on pizza submit", () => {
    it("passes checked options", () => {
      const { getByText } = render(<Configurator />);
      fireEvent.click(getByText("Ветчина"));
      fireEvent.click(getByText("Checkout 229 RUB"));
      expect(getByText("Ветчина")).toBeInTheDocument();
      expect(getByText("Total:")).toBeInTheDocument();
      expect(getByText("229 RUB")).toBeInTheDocument();
      expect(getByText("Order")).toBeInTheDocument();
    });
  });
});