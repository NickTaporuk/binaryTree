import getDriver from "./App.driver";

// console.log(getDriver );

describe("Index", () => {
  let driver;

  beforeEach(() => {
    driver = getDriver();
  });

  afterEach(() => {
    driver.detach();
  });

  it("render w/o crashing", () => {
    driver.when.created();
  });

  it.skyp("matches snapshot", () => {
    driver.when.created();
    expect(driver.component).toMatchSnapshot();
  });

  it("render with Register button ", () => {
    driver.when.created();
    expect(driver.is.buttonPresent()).toBeTruthy();
  });

  it("not render with form when started is false", () => {
    driver.when.created();
    expect(driver.is.formPresent()).toBeFalsy();
  });

  it("render form after button was clicked", () => {
    driver
      .when.created()
      .when.buttonClicked();
    expect(driver.is.formPresent()).toBeFalsy();
  });

});
