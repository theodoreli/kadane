function kadane(arraySeq) {
    var maxEndingHere = 0,
        maxSoFar = 0,
        arrayMEHTracker = [],
        arrayLargestSubarray = [];
    
    arraySeq.forEach(function(el) {
        maxEndingHere = Math.max(0,maxEndingHere + el);
        if (maxEndingHere > 0) {
            arrayMEHTracker.push(el);
        } else {
            arrayMEHTracker.length = 0;
        }
        
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
        if (maxSoFar === maxEndingHere) {
            arrayLargestSubarray = arrayMEHTracker.slice(0);
        }
    });
    
    return {
        array: arrayLargestSubarray,
        sum: maxSoFar
    };
}