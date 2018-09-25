let sequence = "TZZSZTZZSZSTSSZZZSTZTZSSSSTTTZTTZZTSSZSSTTTZTSTZSZZTTSSTZSZSSSTSSSZZTSTSSTSZSTSSTTZTSZTSTTZSZTSTSZTS"
const peiceDict = {
    O:0,
    J:1,
    L:2,
    Z:3,
    S:4,
    T:5,
    I:6
}
function LoadSequence(str){
    return str.split('').map(s=>peiceDict[s])
}
sequence = LoadSequence(sequence+'O')

function RandomPieceGenerator(){
    Math.seed
    this.bag = [3,4,5];
    this.shuffleBag();
    this.index = -1;
};

RandomPieceGenerator.prototype.nextPiece = function(){
    // this.index++;
    // if (this.index >= this.bag.length){
        this.shuffleBag();
        this.index = 0;
    // }
    const R = Piece.fromIndex(this.bag[this.index]);
    // const R = Piece.fromIndex(sequence.shift())
    // console.log('next peice',R)
    return R
};

RandomPieceGenerator.prototype.shuffleBag = function() {
    var currentIndex = this.bag.length
        , temporaryValue
        , randomIndex
        ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = this.bag[currentIndex];
        this.bag[currentIndex] = this.bag[randomIndex];
        this.bag[randomIndex] = temporaryValue;
    }
};