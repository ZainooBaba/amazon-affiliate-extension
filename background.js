let currentTabId = null;
const affiliateTag = "yourtag-20";
const asinList = [
  "B07FZ8S74R",
  "B01N5IB20Q",
  "B08N5M7S6K",
];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.triggerAffiliateTab && currentTabId === null) {
    const randomASIN = asinList[Math.floor(Math.random() * asinList.length)];
    const url = `https://www.amazon.com/dp/${randomASIN}?tag=${affiliateTag}`;

    chrome.tabs.create({ url, active: false }, tab => {
      currentTabId = tab.id;

      setTimeout(() => {
        chrome.tabs.remove(tab.id, () => {
          currentTabId = null;
        });
      }, 5000);
    });
  }
});
