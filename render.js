const backBtn = document.querySelector("#back");

const webview = document.querySelector("#browserView");
const forwardBtn = document.querySelector("#forward");
const reloadBtn = document.querySelector("#reload");
const goBtn = document.querySelector("#go");
const addressBar = document.querySelector("#addressBar");
const homeScreen = document.querySelector("#homeScreen");
const homeSearch = document.querySelector("#homeSearch");
const homeGo = document.querySelector("#homeGo");

function loadURL(url) {
  url = url.trim();
  if (!url) return;

  if (!url.startsWith("http")) {
    url = "https://" + url;
  }
  webview.src = url;
  webview.style.display = "block";
  homeScreen.style.display = "none"; 
}

backBtn.addEventListener("click", () => {
  if (webview.canGoBack()) webview.goBack();
});

forwardBtn.addEventListener("click", () => {
  if (webview.canGoForward()) webview.goForward();
});

reloadBtn.addEventListener("click", () => {
  webview.reload();
});

goBtn.addEventListener("click", () => {
  loadURL(addressBar.value);
});

homeGo.addEventListener("click", () => {
  const query = homeSearch.value;
  if (query.trim() !== "") {
    loadURL("https://www.google.com/search?q=" + encodeURIComponent(query));
  }
});

webview.addEventListener("did-navigate", (event) => {
  addressBar.value = event.url;
});

webview.addEventListener("did-fail-load", (event) => {
  if (!event.isMainFrame) return;

  homeScreen.style.display = "flex";
  homeScreen.querySelector("p").textContent = "The website could not be loaded. Check your internet connection.";
  webview.style.display = "none";
});