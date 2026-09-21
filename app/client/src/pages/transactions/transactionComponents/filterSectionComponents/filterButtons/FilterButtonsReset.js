import {
  PriceRangeButton,
  CategoryButton,
  DateTimeFromButton,
  DateTimeToButton,
  TransactionTypeButton,
  TransactionPlaceButton,
} from "../../../index.js";

function FilterButtonsReset() {
  PriceRangeButton.reset();
  CategoryButton.reset();
  DateTimeFromButton.reset();
  DateTimeToButton.reset();
  TransactionTypeButton.reset();
  TransactionPlaceButton.reset();

  if (window.updateTransactionFilters) {
    window.updateTransactionFilters();
  }
}

export default FilterButtonsReset;
