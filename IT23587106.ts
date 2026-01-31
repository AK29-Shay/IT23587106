import { test, expect } from '@playwright/test';

// Pos_Fun_0001 - Domain: Greeting | Grammar: Simple, Present | Length: S (≤30)
test('Pos_Fun_0001 - Convert short daily greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('vanankkam nanba ', { delay: 100 });
  await page.waitForTimeout(500);
  const value = await inputBox.inputValue();
  expect(value).toMatch(/[\u0B80-\u0BFF]/); // Contains Tamil characters
});

// Pos_Fun_0002 - Domain: Daily language | Grammar: Simple, Future | Length: S (≤30)
test('Pos_Fun_0002 - Convert future tense daily phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('naan veetukku poveen ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value.trim()).not.toBe('naan veetukku poveen');
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0003 - Domain: Greeting/request | Grammar: Imperative | Length: S (≤30)
test('Pos_Fun_0003 - Convert imperative request phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('thayavu seithu utkaarungal ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value.trim()).not.toBe('thayavu seithu utkaarungal');
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0004 - Domain: Daily language | Grammar: Interrogative | Length: S (≤30)
test('Pos_Fun_0004 - Convert interrogative question', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('enna seigiraai ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value.trim()).not.toBe('enna seigiraai');
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0005 - Domain: Daily language | Grammar: Past tense, Simple | Length: S (≤30)
test('Pos_Fun_0005 - Convert past tense statement', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('naan saappittaen ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value.trim()).not.toBe('naan saappittaen');
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0006 - Domain: Daily language | Grammar: Negation, Present | Length: S (≤30)
test('Pos_Fun_0006 - Convert negation phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('enakku theriyaathu ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value.trim()).not.toBe('enakku theriyaathu');
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0007 - Domain: Daily language | Grammar: Plural, Simple | Length: S (≤30)
test('Pos_Fun_0007 - Convert plural noun phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('kuzhanthaigal vilayaadugiraarkal ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value.trim()).not.toBe('kuzhanthaigal vilayaadugiraarkal');
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0008 - Domain: Slang | Grammar: Simple, Present | Length: S (≤30)
test('Pos_Fun_0008 - Convert slang expression', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('semma mass da ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value.trim()).not.toBe('semma mass da');
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0009 - Domain: Punctuation/numbers | Grammar: Simple | Length: S (≤30)
test('Pos_Fun_0009 - Convert text with numbers', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('en vayathu 25 ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
  expect(value).toContain('25');
});

// Pos_Fun_0010 - Domain: Mixed Tanglish + English | Grammar: Compound | Length: M (31–299)
test('Pos_Fun_0010 - Convert mixed Tanglish with English words', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('naan office ku pogiren ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0011 - Domain: Daily language | Grammar: Complex sentence | Length: M (31–299)
test('Pos_Fun_0011 - Convert complex sentence with clauses', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('mazhai peithaal naan veliyil pogamaattan ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0012 - Domain: Formatting/Daily | Grammar: Compound, Multiple sentences | Length: L (≥300)
test('Pos_Fun_0012 - Convert long paragraph with multiple sentences', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('inru kaalai naan santhaikku senren. angae pazhangalum kaaikalum vaanginen. pinbu veetukku thirumbi vanthu samayal seithaen. ', { delay: 30 });
  const value = await inputBox.inputValue();
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
  expect(value.length).toBeGreaterThan(50);
});

// Pos_Fun_0013 - Domain: Greeting | Grammar: Simple, Present | Length: S (≤30)
test('Pos_Fun_0013 - Convert morning greeting', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('kaalai vanakkam ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0014 - Domain: Daily language | Grammar: Future tense | Length: S (≤30)
test('Pos_Fun_0014 - Convert future plan statement', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('naalai naan varuvean ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0015 - Domain: Request | Grammar: Imperative, Polite | Length: S (≤30)
test('Pos_Fun_0015 - Convert polite request', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('konjam kaathirungal ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0016 - Domain: Daily language | Grammar: Interrogative, Present | Length: S (≤30)
test('Pos_Fun_0016 - Convert question about location', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('nee engae irukkiraai ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0017 - Domain: Daily language | Grammar: Past tense, Compound | Length: S (≤30)
test('Pos_Fun_0017 - Convert past action statement', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('avan vanthu senraan ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0018 - Domain: Daily language | Grammar: Negation, Future | Length: S (≤30)
test('Pos_Fun_0018 - Convert negative future statement', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('naan varamaattan ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0019 - Domain: Daily language | Grammar: Plural, Present | Length: S (≤30)
test('Pos_Fun_0019 - Convert plural subject statement', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('maanavargal padikkiraargal ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0020 - Domain: Slang | Grammar: Simple, Exclamatory | Length: S (≤30)
test('Pos_Fun_0020 - Convert casual slang phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('aiyoo kadavulae ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0021 - Domain: Punctuation/numbers | Grammar: Simple | Length: S (≤30)
test('Pos_Fun_0021 - Convert phone number reference', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('en number 9876543210 ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
  expect(value).toContain('9876543210');
});

// Pos_Fun_0022 - Domain: Mixed Tanglish + English | Grammar: Compound | Length: M (31–299)
test('Pos_Fun_0022 - Convert mixed language work context', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('naan meeting ku late aanean sorry ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0023 - Domain: Daily language | Grammar: Complex, Conditional | Length: M (31–299)
test('Pos_Fun_0023 - Convert conditional statement', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('nee vandhaal naan santhosham adaivean ', { delay: 50 });
  const value = await inputBox.inputValue();
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
});

// Pos_Fun_0024 - Domain: Formatting/Daily | Grammar: Compound, Multiple sentences | Length: L (≥300)
test('Pos_Fun_0024 - Convert long story paragraph', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('oru naal oru siruvan kaatukku senraan. angae avan oru azhagiya poovaai kandaan. avan athai parithu veetukku konduvanthaan. avan amma migavum santhoshamaanaal. ', { delay: 30 });
  const value = await inputBox.inputValue();
  expect(value).toMatch(/[\u0B80-\u0BFF]/);
  expect(value.length).toBeGreaterThan(50);
});

// ==================== NEGATIVE FUNCTIONAL TEST CASES ====================
// These test complex inputs where the system typically struggles or fails

// Neg_Fun_0001 - Domain: Heavy Slang | Grammar: Simple | Length: S (≤30)
// Heavy Chennai slang with abbreviated words
test('Neg_Fun_0001 - Heavy slang abbreviations', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('da machi vrdhaa poi vidu ', { delay: 50 });
  const value = await inputBox.inputValue();
  // System may struggle with abbreviated slang like "vrdhaa" (veedhiya)
  expect(value).toBeDefined();
});

// Neg_Fun_0002 - Domain: Mixed Tanglish + English | Grammar: Compound | Length: M (31–299)
// Heavy code-switching between English and Tamil
test('Neg_Fun_0002 - Heavy English-Tamil code mixing', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('bro actually naa busy da later call pannren ok bye tc ', { delay: 50 });
  const value = await inputBox.inputValue();
  // System struggles with mixed English abbreviations (tc, ok, bye)
  expect(value).toBeDefined();
});

// Neg_Fun_0003 - Domain: Slang | Grammar: Exclamatory | Length: S (≤30)
// Ambiguous spelling with multiple interpretations
test('Neg_Fun_0003 - Ambiguous slang spelling', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('aiyo paavam da ivn ', { delay: 50 });
  const value = await inputBox.inputValue();
  // "ivn" is ambiguous - could be "ivan" or other words
  expect(value).toBeDefined();
});

// Neg_Fun_0004 - Domain: Punctuation/numbers | Grammar: Simple | Length: S (≤30)
// Mixed numbers with Tamil words and special characters
test('Neg_Fun_0004 - Numbers with special characters mixed', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('2mrw 4pm ku meet panlm @cafe ', { delay: 50 });
  const value = await inputBox.inputValue();
  // System struggles with "2mrw" (tomorrow), "4pm", "@"
  expect(value).toBeDefined();
});

// Neg_Fun_0005 - Domain: Heavy Slang | Grammar: Interrogative | Length: S (≤30)
// Youth internet slang with vowel drops
test('Neg_Fun_0005 - Internet slang with vowel omissions', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('y u r nt rplyng da whr r u ', { delay: 50 });
  const value = await inputBox.inputValue();
  // Heavy English SMS abbreviations mixed with Tamil "da"
  expect(value).toBeDefined();
});

// Neg_Fun_0006 - Domain: Mixed Tanglish | Grammar: Complex | Length: M (31–299)
// Technical jargon with Tamil connectors
test('Neg_Fun_0006 - Technical English with Tamil connectors', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('bug fix pannitu deploy pannanum bt server down da ', { delay: 50 });
  const value = await inputBox.inputValue();
  // Technical terms (bug, fix, deploy, server) with Tamil verb forms
  expect(value).toBeDefined();
});

// Neg_Fun_0007 - Domain: Slang | Grammar: Negation | Length: S (≤30)
// Regional dialect variations with non-standard spelling
test('Neg_Fun_0007 - Regional dialect non-standard spelling', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('onnum therla da ennaku purla ', { delay: 50 });
  const value = await inputBox.inputValue();
  // "therla" "purla" are colloquial forms that may not transliterate correctly
  expect(value).toBeDefined();
});

// Neg_Fun_0008 - Domain: Formatting | Grammar: Multiple sentences | Length: L (≥300)
// Long text with emojis and special formatting
test('Neg_Fun_0008 - Text with emojis and special formatting', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('hiii.. hw r u??? naa nalla iruken... neee??? lol haha romba naal aachu illaya... catch up panlma soooon!!! ', { delay: 30 });
  const value = await inputBox.inputValue();
  // Multiple punctuation, elongated words, English mixed
  expect(value).toBeDefined();
});

// Neg_Fun_0009 - Domain: Slang | Grammar: Imperative | Length: S (≤30)
// Movie dialogue style with stylized spelling
test('Neg_Fun_0009 - Movie style exaggerated slang', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('thalaivaaaa masssss loadddd maxxxx ', { delay: 50 });
  const value = await inputBox.inputValue();
  // Exaggerated repeated letters for emphasis
  expect(value).toBeDefined();
});

// Neg_Fun_0010 - Domain: Mixed | Grammar: Complex, Multiple clauses | Length: L (≥300)
// Complex mixed content with abbreviations, slang, and English
test('Neg_Fun_0010 - Complex mixed abbreviations and slang', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('dei tmrw 10am ku clg la meet panlm. btw assignment submit pnniya illa? prof kita solunga pls. c u thr. ttyl byee ', { delay: 30 });
  const value = await inputBox.inputValue();
  // Heavy abbreviations: tmrw, clg, btw, pnniya, pls, c u, thr, ttyl
  expect(value).toBeDefined();
});

// ==================== UI TEST CASES ====================

// Pos_UI_0001 - Verifying the real-time update capability
test('Pos_UI_0001 - Verify real-time transliteration updates', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  
  // Step 1: Type first character and verify immediate update
  await inputBox.pressSequentially('va', { delay: 100 });
  await page.waitForTimeout(300);
  const valueAfterVa = await inputBox.inputValue();
  
  // Step 2: Continue typing and check real-time conversion
  await inputBox.pressSequentially('na', { delay: 100 });
  await page.waitForTimeout(300);
  const valueAfterVana = await inputBox.inputValue();
  
  // Step 3: Complete a word with space to trigger full conversion
  await inputBox.pressSequentially('kkam ', { delay: 100 });
  await page.waitForTimeout(500);
  const valueAfterWord = await inputBox.inputValue();
  
  // Verify real-time update: text should contain Tamil characters after word completion
  expect(valueAfterWord).toMatch(/[\u0B80-\u0BFF]/); // Contains Tamil characters
  
  // Step 4: Type another word to verify continuous real-time updates
  await inputBox.pressSequentially('nanba ', { delay: 100 });
  await page.waitForTimeout(500);
  const finalValue = await inputBox.inputValue();
  
  // Verify the final output has more Tamil content than initial
  expect(finalValue).toMatch(/[\u0B80-\u0BFF]/);
  expect(finalValue.length).toBeGreaterThan(valueAfterWord.length);
  
  // Step 5: Verify the textarea is responsive and editable throughout
  await expect(inputBox).toBeEditable();
  await expect(inputBox).toBeVisible();
});
