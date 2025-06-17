import { HomePageDemoQA } from "./HomePageDemoQA";
import { Locator, expect } from "@playwright/test";
import _ from "lodash";

export class DateOfBirth extends HomePageDemoQA {
  constructor(page: any) {
    super(page);
  }

  get header() {
    return "h1";
  }
  get firstNameInput() {
    return '[id="firstName"]';
  }
  get lastNameInput() {
    return '[id="lastName"]';
  }
  get emailInput() {
    return '[id="userEmail"]';
  }
  get genderRadioButton() {
    return '[name="gender"]';
  }
  get mobileNumberInput() {
    return '[id="userNumber"]';
  }
  get dateOfBirthInput() {
    return '[id="dateOfBirthInput"]';
  }
  get monthOfTheYear() {
    return '[class="react-datepicker__month-select"]';
  }
  get yearOfTheDate() {
    return '[class="react-datepicker__year-select"]';
  }
  get prevMonthButton() {
    return '[aria-label="Previous Month"]';
  }
  get nextMonthButton() {
    return '[aria-label="Next Month"]';
  }
  get getDate() {
    return ".react-datepicker__day:not(.react-datepicker__day--outside-month)";
  }
  get subjectsInput() {
    return '[class="subjects-auto-complete__value-container"]';
  }
  get checkboxHobbies() {
    return '[type="checkbox"]';
  }
  get chooseFileButton() {
    return '[id="uploadPicture"]';
  }
  get currentAddressInput() {
    return '[id="currentAddress"]';
  }
  // get stateInput() {
  //     return '[class="css-1uccc91-singleValue"]';
  // }//very strange dropdown

  //methods
  async verifyHeader() {
    const header: Locator = this.page.locator(this.header);
    await expect(header).toContainText("Practice Form");
  }

  async navigateToDateOfBirthPage(): Promise<void> {
    await this.gotoweb("/automation-practice-form");
  }

  randomMonthClickNumber = _.random(1, 50);
  randomDayNumber = _.random(1, 31);

  async dateOfBirthFromToday() {
    const obj = {
      January: "Jan",
      February: "Feb",
      March: "Mar",
      April: "Apr",
      May: "May",
      June: "Jun",
      July: "Jul",
      August: "Aug",
      September: "Sep",
      October: "Oct",
      November: "Nov",
      December: "Dec",
    };

    await this.page.locator(this.dateOfBirthInput).click();

    for (let i = 0; i < this.randomMonthClickNumber; i++) {
      await this.page.locator(this.prevMonthButton).click();
    }

    let year = await this.page
      .locator(`${this.yearOfTheDate} option:checked`)
      .textContent();
    let month = await this.page
      .locator(`${this.monthOfTheYear} option:checked`)
      .textContent();

    console.log(year, "year");
    console.log(month, "month");
    console.log(this.randomDayNumber, "day");
    await this.page
      .locator(this.getDate)
      .getByText(this.randomDayNumber.toString(), { exact: true })
      .click();
    //have to figure out how to select the day from the calendar
    const paddedDay = String(this.randomDayNumber).padStart(2, "0");
    const formattedMonth = obj[month as keyof typeof obj];

    expect(await this.page.locator(this.dateOfBirthInput).inputValue()).toBe(
      `${paddedDay} ${formattedMonth} ${year}`
    );
  }
}
