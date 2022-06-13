const removeFromArray = function(arr, ...removableItems) {
    let newArr = arr.filter(
        (item) => !removableItems.includes(item)
    )
    return newArr;
};

// .includes() uses === comparison
// will return false if items are not the same type

// Do not edit below this line
module.exports = removeFromArray;
