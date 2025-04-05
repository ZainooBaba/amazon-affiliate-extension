const affiliateTag = "indopak02-20";

const triggerPaths = ["/gp/cart", "/checkout", "/gp/buy"];

if (triggerPaths.some(path => location.pathname.includes(path))) {
  chrome.runtime.sendMessage({ triggerAffiliateTab: true, tag: affiliateTag });
}
