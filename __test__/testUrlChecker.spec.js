import { checkForURL } from "../src/client/js/urlChecker";

describe("Test the URL Check functionality", () => {
    test("Test the checkForURL() function", () => {
        const input = [
            "http://localhost:8080/",
            "https://www.washingtonpost.com/religion/2021/07/29/theodore-mccarrick-charged-sex-assault/?itid=hp-top-table-main",
        ];
        const output = [false, true, false, true];

        input.forEach((element, index) => {
            expect(checkForURL(element)).toEqual(output[index]);
        });
    });
});