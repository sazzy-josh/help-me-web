chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	if (msg.action === 'navigate') {
		// Handle the navigation based on the message
		const urlToNavigate = msg.url;
		chrome.tabs.update(sender.tab.id, { url: urlToNavigate });
	}
});

chrome.runtime.onInstalled.addListener(() => {
	console.log('Extension Installed');
});
