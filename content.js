chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "save_post") {
    let postContent = document.querySelector('.feed-shared-update-v2__description').innerText;
    chrome.storage.sync.get("savedPosts", function(data) {
      let savedPosts = data.savedPosts || [];
      savedPosts.push(postContent);
      chrome.storage.sync.set({savedPosts: savedPosts}, function() {
        console.log("Post saved.");
      });
    });
  }
});
