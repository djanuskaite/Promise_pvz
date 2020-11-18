let pazadas = new Promise(function (resolve, reject){
    kompoKaina = 20000; // galim keisti
    santaupos = 30000; // galim keisti
    if (santaupos > kompoKaina) {
        resolve({
            brand: "MacBook",
            model: "Pro"
        });
    } else {
        reject("Neturi pakankamai pinigu");
    }
}); pazadas.then(function (value) {
    console.log("Pagaliau nusipirkau nauja pc", JSON.stringify(value));
}); pazadas.then(function (reason) {
    console.log("Negaliu nusipirkti, nes ", reason);
}); pazadas.finally(function () {
    console.log(
        "Vis tiek lalalala"
    );
});
