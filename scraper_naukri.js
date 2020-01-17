const Apify = require('apify');

const reqprom = require('request-promise');

Apify.main( async () => {
    
    /*const reqlist = new Apify.RequestList({
        sources : [
            { url: 'http://naukri.com'},
        ],
    });
    
    await reqlist.initialize();
    */

    const requestQueue = await Apify.openRequestQueue();

    await requestQueue.addRequest( { url: 'www.google.com'});

    const craw = new Apify.PuppeteerCrawler({
        requestQueue,

        launchPuppeteerOptions: {

        },

        maxRequestsPerCrawl : 2 , 

        handlePageFunction: async ({ request, page }) => {
            console.log(requestQueue.url);

            const pgfn = $posts => {
                const data = [];

                $posts.forEach($posts => {
                    data.push({
                    links : $posts.querySelector(`body`).href, 
                    // here write the actual logic of scraper
                    });
                
                });

                //console.log(data);

                return data;
            };

            const data = await page.$$eval('body',pgfn);

            await Apify.pushData(data); 

            const info = await Apify.utils.enqueueLinks({
                page,
                requestQueue,
                selector: 'body',
            });

            //console.log(`info ${info}`);

            if (info.length==0) console.log(`${request.url}`);
            
        },

        handleFailedRequestFunction: async ({ request }) => {
            console.log(`Request ${request.url} failed too many times`);
            await Apify.pushData({
                '#debug': Apify.utils.createRequestDebugInfo(request),
            });
        }
    });

    await craw.run();
    console.log('done');
});    

