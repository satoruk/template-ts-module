import * as pakcage from "./index";

it("name", () => {
  expect(pakcage.name).toStrictEqual("template-ts-module");
});

it("version", () => {
  expect(pakcage.version).toStrictEqual("1.0.0");
});

it("onTimeout", () => {
  expect(typeof pakcage.onTimeout).toStrictEqual("function");
});

it("import keys", () => {
  expect(Object.keys(pakcage).sort()).toStrictEqual([
    "name",
    "onTimeout",
    "version",
  ]);
});
