import { name, version } from "./index";

it("name", () => {
  expect(name).toStrictEqual("template-ts-module");
});

it("version", () => {
  expect(version).toStrictEqual("1.0.0");
});
