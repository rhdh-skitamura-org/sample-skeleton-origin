import { Selector } from 'testcafe';

fixture`Login and take screenshots`
    .page(process.env.TARGET_URL)
    .beforeEach( async t => {
        await t
        .typeText('#username.email', 'test')
        .typeText('#password.email', 'test')
        .click('#btn2')
    });

test
    .before( async t => {
        await t
            .takeScreenshot({
                path:'login.png',
                fullPage: true
              })
    })
    ('Login', async t => {await t});

test('Select Info page', async t => {
    await t
        .expect(Selector('.Fictional').innerText).eql('Example Health')
        .takeScreenshot({
            path:'info.png',
            fullPage: true
          })
});

test('Select Mesurements page', async t => {
    await t
        .click(Selector('.dimmed')
            .withAttribute('href','./measurements.html')
        )
        .expect(Selector('.disclaimer').innerText).eql('This is a simulated health data system. Any resemblance to any person living or dead is purely coincidental.')
        .takeScreenshot({
            path:'measurements.png',
            fullPage: true
        })
});

test('Select Architecture page', async t => {
    await t
        .click(Selector('.dimmed')
            .withAttribute('href','./jee.html')
        )
        .takeScreenshot({
            path:'architecture.png',
            fullPage: true
        })
});       

test('Select Settings page', async t => {
    await t
        .click(Selector('.dimmed')
            .withAttribute('href','./settings.html')
        )
        .takeScreenshot({
            path:'settings.png',
            fullPage: true
        })
});
