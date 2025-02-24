/* globals Promise */

import path from 'path';
import SeleniumHelper from '../helpers/selenium-helper';

const {
    clickButton,
    clickText,
    clickXpath,
    findByXpath,
    getDriver,
    getLogs,
    loadUri
} = new SeleniumHelper();

let driver;

describe('player example', () => {
    const uri = path.resolve(__dirname, '../../build/player.html');

    beforeAll(() => {
        driver = getDriver();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test.skip('Player: load a project by ID', async () => {
        const projectId = '96708228';
        await loadUri(`${uri}#${projectId}`);
        await clickXpath('//img[@title="Go"]');
        await new Promise(resolve => setTimeout(resolve, 2000));
        await clickXpath('//img[@title="Stop"]');
        const logs = await getLogs();
        await expect(logs).toEqual([]);
        const projectRequests = await driver.manage().logs()
            .get('performance')
            .then(pLogs => pLogs.map(log => JSON.parse(log.message).message)
                .filter(m => m.method === 'Network.requestWillBeSent')
                .map(m => m.params.request.url)
                .filter(url => url === 'https://projects.goobermod.dumorando.com/96708228')
            );
        await expect(projectRequests).toEqual(['https://projects.goobermod.dumorando.com/96708228']);
    });
});

describe('blocks example', () => {
    const uri = path.resolve(__dirname, '../../build/blocks-only.html');

    beforeAll(() => {
        driver = getDriver();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test.skip('Blocks: load a project by ID', async () => {
        const projectId = '96708228';
        await loadUri(`${uri}#${projectId}`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await clickXpath('//img[@title="Go"]');
        await new Promise(resolve => setTimeout(resolve, 2000));
        await clickXpath('//img[@title="Stop"]');
        const logs = await getLogs();
        await expect(logs).toEqual([]);
        const projectRequests = await driver.manage().logs()
            .get('performance')
            .then(pLogs => pLogs.map(log => JSON.parse(log.message).message)
                .filter(m => m.method === 'Network.requestWillBeSent')
                .map(m => m.params.request.url)
                .filter(url => url === 'https://projects.goobermod.dumorando.com/96708228')
            );
        await expect(projectRequests).toEqual(['https://projects.goobermod.dumorando.com/96708228']);
    });

    // skipping per https://github.com/LLK/scratch-gui/issues/4902 until we have better approach
    test.skip('Change categories', async () => {
        await loadUri(`${uri}`);
        await clickText('Looks');
        await clickText('Sound');
        await clickText('Events');
        await clickText('Control');
        await clickText('Sensing');
        await clickText('Operators');
        await clickText('Variables');
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for scroll animation
        await clickText('Make a Variable');
        let el = await findByXpath("//input[@name='New variable name:']");
        await el.sendKeys('score');
        await clickButton('OK');
        await clickText('Make a Variable');
        el = await findByXpath("//input[@name='New variable name:']");
        await el.sendKeys('second variable');
        await clickButton('OK');
        const logs = await getLogs();
        await expect(logs).toEqual([]);
    });
});
