document.addEventListener("DOMContentLoaded", () => {
  let searchQuery = "";

  function searchGoogle() {
    if (searchQuery.trim()) {
      const forumSearchUrl = `https://forum.sanjob.ca/index.php?q=${encodeURIComponent(
        searchQuery
      )}`;
      window.open(forumSearchUrl, "_blank");
    }
  }

  const searchBox = document.querySelector(".searchbox");
  if (searchBox) {
    searchBox.addEventListener("input", e => {
      searchQuery = e.target.value;
    });
  }

  const searchForm = document.querySelector(".form");
  if (searchForm) {
    searchForm.addEventListener("submit", e => {
      e.preventDefault();
      searchGoogle();
    });
  }
});
