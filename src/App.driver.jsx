import React from "react";
import App from "./App";

const Driver = () => {
  const driver = {
    get: {
      button(){
        return driver.component.find("[data-hook=\"hi button\"]")
      }
    },
    when: {
      created() {
        driver.component = mount(
          <App/>,
          {
            attachTo: document.createElement("div")
          }
        );

        return driver;
      },
      buttonClicked() {
        driver.get.button().simulate('click')
      }
    },
    is: {
      buttonPresent() {
        return !!driver.component.find("[data-hook=\"hi button\"]").length;
      },
      formPresent() {
        return !!driver.component.find("[data-hook=\"hi form\"]").length;
      }
    },
    detach() {
      driver.component.detach();
    }
  };

  return driver;
};

export default Driver;

