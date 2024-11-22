import RRRMovie from "./RRRMovie";

class Devara extends RRRMovie{

    movieDirector: string="Koratala Siva";
    noOfSongs: number=4;
    
    collectionOfMovie(): void {
        console.log(`Devara:part 1 grossed over ₹500 crore worldwide`)
    }
    constructor(){
       super();
       console.log(`Devara constructor`)
    }

}
export default Devara;