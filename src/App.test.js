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

  it.skip("render w/o crashing", () => {
    driver.when.created();
  });

  it.skip("matches snapshot", () => {
    driver.when.created();
    expect(driver.component).toMatchSnapshot();
  });

  it.skip("render with Register button ", () => {
    driver.when.created();
    expect(driver.is.buttonPresent()).toBeTruthy();
  });

  it.skip("not render with form when started is false", () => {
    driver.when.created();
    expect(driver.is.formPresent()).toBeFalsy();
  });

  it.skip("render form after button was clicked", () => {
    driver
      .when.created()
      .when.buttonClicked();
    expect(driver.is.formPresent()).toBeTruthy();
  });

});
