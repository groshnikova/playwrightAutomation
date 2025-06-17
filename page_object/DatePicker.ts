import { Locator, expect } from "@playwright/test";
import { HomePage } from "./HomePage";
import _ from "lodash"; // lodash library for random number generation

export class DatePicker extends HomePage {
  constructor(page: any) {
    super(page);
  }

  get header() {
    return "h1";
  }
  get fromInput() {
    return '[id = "from"]';
  }
  get toInput() {
    return '[id = "to"]';
  }
  get monthOfTheYear() {
    return '[class="ui-datepicker-month"]';
  }
  get prevYearButton() {
    return '[title="Prev"]';
  }
  get nextYearButton() {
    return '[title="Next]';
  }
  get getDate() {
    return '[class="ui-state-default"]';
  }
  get dateFromComponent() {
    return "#ui-datepicker-div";
  }
  get dateOfTheYear() {
    return '[class="ui-datepicker-year"]';
  }
  // get dateOfTheMonth(){
  //     return '[class="ui-datepicker-month"]'
  // }
  async verifyHeader() {
    const header: Locator = this.page.locator(this.header);
    await expect(header).toContainText("Date Picker");
  }
  async navigateToDatePickerPage(): Promise<void> {
    await this.gotoweb("/jquery-date-picker-demo");
  }

  randomYearNumber = _.random(1, 50);
  randomDayNumber = _.random(1, 31);

  async dateFromToday() {
    const obj = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };
    await this.page.locator(this.fromInput).click();
    for (let i = 0; i < this.randomYearNumber; i++) {
      await this.page.locator(this.prevYearButton).click();
    }
    let year = await this.page.locator(this.dateOfTheYear).textContent();
    let month = await this.page.locator(this.monthOfTheYear).locator('[selected="selected"]').textContent();
    console.log(year, "year");
    console.log(month, "month");
    console.log(this.randomDayNumber, "date");
    await this.page.locator(this.dateFromComponent).getByRole('link', {name: this.randomDayNumber.toString()}).click();
    const formattedMonth = obj[month as keyof typeof obj]
    const paddedDay = String(this.randomDayNumber).padStart(2, '0');
    expect(await this.page.locator(this.fromInput).inputValue()).toBe(`${formattedMonth}/${paddedDay}/${year}`);
  }
}
