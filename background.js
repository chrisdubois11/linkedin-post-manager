chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({savedPosts: []}, function() {
    console.log("Initialized saved posts.");
  });
});
