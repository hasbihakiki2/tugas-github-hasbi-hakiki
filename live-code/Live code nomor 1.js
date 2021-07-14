/**
 * Algoritma
 * 1. Buat variable loker
 * 2. Buat variable pengalaman
 * 3. Cek loker, jika :
 *  3.1. Junior, jika :
 *      3.1.1. Memiliki pengalaman kurang dari 2, maka gaji Rp. 3.000.000
 *      3.1.2. Memiliki pengalaman antara 2 sampai 5, maka gaji Rp. 4.000.000
 *      3.1.3. Memiliki pengalaman lebih dari 5, maka gaji Rp. 5.000.000
 *  3.2. Middle, jika :
 *      3.2.1. Memiliki pengalaman kurang dari 2, maka gaji Rp. 5.500.000
 *      3.2.2. Memiliki pengalaman antara 2 sampai 5, maka gaji Rp. 6.500.000
 *      3.2.3. Memiliki pengalaman lebih dari 5, maka gaji Rp. 7.500.000
 *  3.3. Senior, jika :
 *      3.3.1. Memiliki pengalaman kurang dari 2, maka gaji Rp. 7.500.000
 *      3.3.2. Memiliki pengalaman antara 2 sampai 5, maka gaji Rp. 9.000.000
 *      3.3.3. Memiliki pengalaman lebih dari 5, maka gaji Rp. 10.000.000
 */

 let loker = 'Junior';
 let pengalaman = 2;
 
switch (loker){
    case 'Junior':
        if (pengalaman<2){
            console.log('Gaji anda sebesar Rp. 3.000.000')
        }else if(pengalaman >= 2 && pengalaman <= 5){
            console.log('Gaji anda sebesar Rp. 4.000.000')
        }else{
            console.log('Gaji anda sebesar Rp. 5.000.000')
        }
        break;
    case 'Middle':
        if (pengalaman<2){
            console.log('Gaji anda sebesar Rp. 5.500.000')
        }else if(pengalaman >= 2 && pengalaman <= 5){
            console.log('Gaji anda sebesar Rp. 6.500.000')
        }else{
            console.log('Gaji anda sebesar Rp. 7.500.000')
        }
        break;
    case 'Senior':
        if (pengalaman<2){
            console.log('Gaji anda sebesar Rp. 7.500.000')
        }else if(pengalaman >= 2 && pengalaman <= 5){
            console.log('Gaji anda sebesar Rp. 9.000.000')
        }else{
            console.log('Gaji anda sebesar Rp. 10.000.000')
        }
        break;
}