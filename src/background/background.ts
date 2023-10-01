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

// contentScript.js or popup.js

// Start recording
chrome.runtime.sendMessage({ action: 'startRecording', tabId: chrome.devtools.inspectedWindow.tabId }, (response) => {
	if (response.success) {
		console.log('Recording started.');
	} else {
		console.error('Failed to start recording:', response.message);
	}
});

// Stop recording
chrome.runtime.sendMessage({ action: 'stopRecording' }, (response) => {
	if (response.success) {
		console.log('Recording stopped.');
	} else {
		console.error('Failed to stop recording:', response.message);
	}
});
