import i18n from "i18n";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from "./App";

let container: HTMLDivElement | null = null;
const i18nResource = i18n.getDataByLanguage(i18n.language)!;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if (container == null) return;

  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render Dashbord", () => {
  act(() => {
    render(<App />, container);
  });
  expect(container?.textContent).toContain(i18nResource.translation.title);
});
