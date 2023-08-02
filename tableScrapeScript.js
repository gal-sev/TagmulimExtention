(() => {
    //TODO: change the url in the manifest to the real one
    let cells = document.getElementsByTagName("td");
    //TODO: change the starting cell and step count based on the real table

    let tagmulim = [];
    for (let i = 2; i < cells.length; i=i+4) {
        tagmulim.push(cells[i].textContent);
    }

    let itemsSN = [];
    for (let i = 1; i < cells.length; i=i+4) {
        itemsSN.push(cells[i].textContent);
    }

    //Update everything in localstorage
    let itemsStored = [];
    for (let i = 0; i < itemsSN.length; i++) {
        itemsStored.push({sn: itemsSN[i], tagmul: tagmulim[i]});
    }

    chrome.storage.local.set({"items": itemsStored});    
})();