document.addEventListener('DOMContentLoaded', function() {
  let savePostButton = document.getElementById('savePostButton');
  savePostButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      let activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "save_post"});
    });
  });

  // Load saved posts from storage
  chrome.storage.sync.get("savedPosts", function(data) {
    let postList = document.getElementById('postList');
    if (data.savedPosts) {
      data.savedPosts.forEach(function(post) {
        let listItem = document.createElement('li');
        listItem.textContent = post;
        postList.appendChild(listItem);
      });
    }
  });
});
