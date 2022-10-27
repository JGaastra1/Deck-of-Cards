function getCard(){
    const suits = ['S', 'C', 'D', 'H'];
    const suitIdx = Math.floor(Math.random() * suit.length);
    const suit = suits[suitIdx];
 
     const values = [1,2,3,4,5,6,7,8,9,10,J,Q,K,A];
     const valueIdx = math.floor(Math.random()*value.length);
     const value = values[valueIdx];
     return {value: value, suit: suit};
 }