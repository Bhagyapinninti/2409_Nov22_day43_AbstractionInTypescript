abstract class RRRMovie{
    
    noOfHeroes:number=2;
    noOfHeroines:number=1;
    abstract noOfSongs:number;
    abstract movieDirector:string;

    abstract collectionOfMovie():void

messageOfMovie =()=>{
    console.log(`An Uprising,Standing up and showing courage in the face of tyrannical rule`)
}
constructor(){
console.log(`RRR Movie Constructor`);
}
}
export default RRRMovie;