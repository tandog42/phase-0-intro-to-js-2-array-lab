const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat() {
cats.push('Ralph')
}
function destructivelyPrependCat() {
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
const allCats = [...cats, "Broom"]
function appendCat() {
    return allCats
}

const mycats = ['Arnold', ...cats]
function prependCat() {
    return mycats
}
function removeLastCat(name) {
    const mycats = cats.slice(0,-1)
return mycats
}
function removeFirstCat(){
    return cats.slice(1) }