import {test} from "@playwright/test";

test.describe(`Salesforce login - GitHub Actions`,async()=>{

    test(`Login to salesforce`,async({page})=>{
        
        await page.goto("https://login.salesforce.com/");
        await page.fill("#username","ranjini.r@testleaf.com");
        await page.fill("#password","Testleaf$1234")
        await page.click("#Login")
        
        const appLauncherLocator = page.locator(".slds-icon-waffle")

        await appLauncherLocator.click()

        const viewAllLocator = page.getByLabel("View All Applications")
        await viewAllLocator.click()

        await page.getByPlaceholder("Search apps or items...").fill("Marketing");
        await page.click('mark:has-text("Marketing")');
    })
})