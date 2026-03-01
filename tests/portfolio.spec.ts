import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E Test Suite', () => {

  test('Critical User Journey: Global Navigation', async ({ page }) => {
    // 1. Start at Home
    await page.goto('http://localhost:4321/');
    await expect(page).toHaveTitle(/Hachemite/);

    // 2. Navigate to Projects
    await page.locator('text=PROJ').first().click();
    await expect(page).toHaveURL(/.*\/projects/);
    await expect(page.locator('h1', { hasText: 'PROJECTS' })).toBeVisible();

    // 3. Navigate to Wiki
    await page.locator('text=WIKI').first().click();
    await expect(page).toHaveURL(/.*\/wiki/);
    await expect(page.locator('text=DIGITAL_GARDEN')).toBeVisible();

    // 4. Navigate to CV
    await page.locator('text=CV').first().click();
    await expect(page).toHaveURL(/.*\/cv/);
    await expect(page.locator('text=DOWNLOAD_PDF')).toBeVisible();
  });

  test('Localization (i18n): French routing works correctly', async ({ page }) => {
    // Go to French Home
    await page.goto('http://localhost:4321/fr');
    
    // Check if the French translation is loaded instead of English
    await expect(page.locator('text=Ingénieur Logiciel')).toBeVisible();
    await expect(page.locator('text=VOIR LE CV COMPLET')).toBeVisible();
    
    // Ensure the French CV route works
    await page.goto('http://localhost:4321/fr/cv');
    await expect(page.locator('text=TÉLÉCHARGER_PDF')).toBeVisible();
  });

  test('System Resilience: Custom 404 Page triggers correctly', async ({ page }) => {
    // Force a bad route
    const badUrl = 'http://localhost:4321/this-page-does-not-exist';
    const response = await page.goto(badUrl);
    
    // Verify HTTP Status code is 404
    expect(response?.status()).toBe(404);
    
    // Verify the custom terminal 404 UI renders
    await expect(page.locator('h1', { hasText: '404' })).toBeVisible();
    await expect(page.locator('text=Return to Root')).toBeVisible();
  });

  test('Responsive Design: Mobile layout triggers correctly', async ({ page }) => {
    // Set viewport to an iPhone dimensions
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:4321/');

    // The desktop nav should be hidden
    const desktopNav = page.locator('nav.absolute.top-0');
    // We check if the desktop links container (hidden on mobile) is actually hidden
    await expect(desktopNav.locator('.hidden.md\\:flex')).toBeHidden();

    // The mobile bottom bar should be visible
    const mobileBar = page.locator('nav.md\\:hidden.fixed.bottom-0');
    await expect(mobileBar).toBeVisible();
  });

  test('Data Integration: Projects grid loads correctly', async ({ page }) => {
    await page.goto('http://localhost:4321/projects');
    
    // Check if at least one project card rendered (verifies Markdown collections are working)
    const projectCards = page.locator('a.group.flex-col');
    await expect(projectCards.first()).toBeVisible();
  });

});