export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character){
        if (this.members.has(character)){
            throw new Error('Character is already on the team');
        }
        this.members.add(character);
    }
    
    addAll(...characters){
        characters.forEach((member) => {
            this.members.add(member);
        });
    }

    toArray(){
        return [...this.members];
    }
}