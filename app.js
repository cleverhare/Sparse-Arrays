// Just copy and paste the below code HAPPY CODING 
function matchingStrings(strings, queries) {
    let results = [];
    
    queries.forEach((query) => {
        results.push(strings.filter((string) => string === query).length);
    })
    
    return results;
}
