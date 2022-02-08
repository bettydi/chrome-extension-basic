// background.js
let color = '#3aa757';

// sets a color variable when extension is installed
// this variable is accessible to other components in our extension
// accessing storage requires permission (see manifest)
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});