const sortedBy = (list, typeSorted) => {
    let sortedList = list;
    if (typeSorted === "date") {
        sortedList = list.sort( (a, b) => {
            let aDate = new Date(a.releaseDate + '/01/01')
            let bDate = new Date(b.releaseDate + '/01/01')
            return bDate - aDate;
        });
    } else if (typeSorted === "rating") {
        sortedList = list.sort( (a, b) =>  b.rating - a.rating );
    } else if (typeSorted === "runtime") {
        sortedList = list.sort( (a, b) =>  b.runtime - a.runtime );
    }
    return sortedList;
}

export default sortedBy;