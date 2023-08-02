(() => {
    let tagmulValue = 50;
    let tagmulText = document.createElement("p");
    tagmulText.textContent = `Tagmul: ${tagmulValue}`;
    tagmulText.id = "product-tagmul";
    let itemTitle = document.getElementById("product-page-prodict-title");
    itemTitle.appendChild(tagmulText);
})();