var arrays = ['LG','Monitor','Asus','Laptop', '5432','Mix','For','Youtuber','Bluetooth', 'Adapter','Solo','Leveling','Webtoon','Panasoni','Air','Conditioner','Karaoke','Bazooka','PowerBank','24','Hours','Backpack','of','Holding','Game','Box','5','Universal','Gadget','Charger','USB','Squirming','Tentacle','USB','Fishquarium','Intel','Processor','8','core','Space','Bar','Keyboard','Organizer','&','USB','Hub','Pop','USB','Pet','Rock','Powerstation','5','Dual','Heated','Travel','Mug','Crosley','Collegiate','Portable','USB','Turntable','Hoodie','AK-47'];
function filterProduct(arrays){
    var product = arrays.filter((array)=> array.startsWith("A"));
    var product1 = arrays.filter((array)=> array.startsWith("B"));
    var product2 = arrays.filter((array)=> array.startsWith("C"));
    var product3 = arrays.filter((array)=> array.startsWith("D"));
    var product4 = arrays.filter((array)=> array.startsWith("E"));
    var product5 = arrays.filter((array)=> array.startsWith("G"));
    var product6 = arrays.filter((array)=> array.startsWith("M"));
    var product7 = arrays.filter((array)=> array.startsWith("O"));
    console.log("==== A ====")
    console.log(product)
    console.log("==== B ====")
    console.log(product1)
    console.log("==== C ====")
    console.log(product2)
    console.log("==== D ====")
    console.log(product3)
    console.log("==== E ====")
    console.log(product4)
    console.log("==== G ====")
    console.log(product5)
    console.log("==== M ====")
    console.log(product6)
    console.log("==== O ====")
    console.log(product7)

}
console.log(filterProduct(arrays));