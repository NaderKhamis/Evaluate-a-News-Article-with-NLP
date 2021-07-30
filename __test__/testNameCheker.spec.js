import { checkForName } from "../src/client/js/nameChecker"
describe("Test the submit functionality", () => {
    test("Test the checkForName() function", () => {
        expect(checkForName).toBeDefined();
    })
});