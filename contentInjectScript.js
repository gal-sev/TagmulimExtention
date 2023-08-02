(() => {
    // Get the serial number from the document
    const itemSN = document.getElementById("barcode-container").textContent.slice(5);
    
    chrome.storage.local.get(
        "items",
        (res) => {
            for (let i = 0; i < res.items.length; i++) {
                if (res.items[i].sn === itemSN) {
                    let tagmulValue = res.items[i].tagmul;
                    let tagmulText = document.createElement("p");
                    tagmulText.textContent = `Tagmul: ${tagmulValue}`;
                    tagmulText.id = "product-tagmul";
                    let itemTitle = document.getElementById("product-page-prodict-title");
                    itemTitle.appendChild(tagmulText);
                }
            }
        }
    );
})();