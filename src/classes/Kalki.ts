import RRRMovie from "./RRRMovie";

class Kalki extends RRRMovie{
    noOfSongs: number=8;
    movieDirector: string ="Nag Ashwin";
    collectionOfMovie(): void {
        console.log(`The Worldwide box office collection for Kalki 2898 AD is between ₹1,100-1,200 crore`)
    }  
    constructor(){
        super();
        console.log(`Kalki constructor`)
    }

}
export default Kalki;