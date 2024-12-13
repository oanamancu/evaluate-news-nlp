import {analyze} from '../src/client/js/formHandler'


describe('test analyze function', () => {

    beforeAll(() => {

        global.fetch = jest.fn(() =>
            Promise.resolve({
              json: () => Promise.resolve({
                sentimentScore: "P", 
                subjectivity: "SUBJECTIVE", 
                irony: "NONIRONIC",
                textSnippet: "Excellent mood!"
            }),
            })
        );

        const urlForm = document.createElement("form");
        urlForm.setAttribute("id", "urlForm");
        document.body.appendChild(urlForm);
        document.getElementById = jest.fn((x) => urlForm);
    });
      
    beforeEach(() => {
        fetch.mockClear();
    });
      
    test("analyze function", async () => {
        await analyze("https://domain.com");
        expect(fetch).toHaveBeenCalledTimes(1);
    });
})