/* eslint-disable no-undef */
const metaget = require('../index');

test('Fetch wordpress.com async/await', async () => {
    try{
        const metaResponse = await metaget.fetch('https://wordpress.com');
        expect(metaResponse['application-name']).toBe('WordPress.com');
        expect(metaResponse['og:type']).toBe('website');
    }catch(ex){}
});

test('Fetch wordpress.com with callback', () => {
    metaget.fetch('https://wordpress.com', (err, metaResponse) => {
        if(err){
            console.log(err);
        }else{
            expect(metaResponse['application-name']).toBe('WordPress.com');
            expect(metaResponse['og:type']).toBe('website');
        }
    });
});

test('Fetch dud website', async () => {
    try{
        await metaget.fetch('https://imadudwebsite.com');
    }catch(ex){
        expect(ex).toBe('ENOTFOUND');
    }
});

test('Fetch wordpress.com with custom User-Agent header', async () => {
    try{
        const metaResponse = await metaget.fetch('https://wordpress.com', { headers: { 'User-Agent': 'Googlebot' } });
        expect(metaResponse['application-name']).toBe('WordPress.com');
        expect(metaResponse['og:type']).toBe('website');
    }catch(ex){}
});
