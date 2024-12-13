import {checkURL} from '../src/client/js/urlChecker'
   
describe("Testing the url check functionality", () => {

    test("Testing the checkURL() function with empty value", () => {
          expect(checkURL("")).toBe(false);
    })

    test("Testing the checkURL() function with non link text", () => {
        expect(checkURL("jsvktjrg")).toBe(false);
    })

    test("Testing the checkURL() function with ok value", () => {
        expect(checkURL("https://domain.com/something?color=red&number=0")).toBe(true);
    })

});

