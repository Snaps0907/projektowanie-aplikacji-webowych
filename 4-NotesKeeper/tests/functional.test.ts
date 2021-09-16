import 'expect-puppeteer';

describe('note', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:8080');
    }, 10000)

    test('can be added', async () => {
        await page.type('.input-box #titleInput', 'Test');
        await page.type('.input-box #descriptionInput', 'testy opis');
        await page.click('.input-box .btn-add');
        await page.waitForSelector('.notesBox .note');

        const headerEl = await page.$('.note .note-title');
        const bodyEl = await page.$('.note .note-description');

        expect(await page.evaluate(el => el.innerHTML, headerEl)).toBe('Test');
        expect(await page.evaluate(el => el.innerHTML, bodyEl)).toBe('testy opis');
    }, 30000);
});