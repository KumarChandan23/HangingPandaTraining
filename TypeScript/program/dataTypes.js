var numbs;
(function (numbs) {
    numbs[numbs["noth"] = 1] = "noth";
    numbs[numbs["west"] = 2] = "west";
    numbs[numbs["south"] = 3] = "south";
})(numbs || (numbs = {}));
console.log(numbs.south);
