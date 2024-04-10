export default class Character {
    constructor(name, type) {
        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        
        if (name.length < 2 || name.length > 10) {
            throw new Error("Имя должно иметь от 2 до 10 символов");
        }

        if (!types.includes(type)) {
            throw new Error("Не корректный тип персонажа");
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }
}
