import { handleSubmit } from "../src/client/js/formHandler";

describe("Test the submit functionality", () => {
    test("Test the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    });
});