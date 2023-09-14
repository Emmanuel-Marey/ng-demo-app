export class Pokemon  {
    id: number;
    name: string;
    level: number;
    description: string;
    type: number;
    subType: string;
    alignment: number;
    size: number;
    weight: number;
    hitPoints: number;
    protection: number;
    movement: number;
    attack: number;
    damage: number;
    defense: number;
    specialAbilities: Array<number>;
    specialDefense: number;
    picture: string;
    created: Date;
    updated: Date | undefined;

    constructor(
        id: number,
        name: string,
        level: number,
        description: string,
        type: number,
        subType: string,
        alignment: number,
        size: number,
        weight: number,
        hitPoints: number,
        protection: number,
        movement: number,
        attack: number,
        damage: number,
        defense: number,
        specialAbilities: Array<number>,
        specialDefense: number,
        picture: string,
        created: Date,
        updated: Date | undefined)
    {
        this.id = id;
        this.name = name;
        this.level = level;
        this.description = description;
        this.type = type;
        this.subType = subType;
        this.alignment = alignment;
        this.size = size;
        this.weight = weight;
        this.hitPoints = hitPoints;
        this.protection = protection;
        this.movement = movement;
        this.attack = attack;
        this.damage = damage;
        this.defense = defense;
        this.specialAbilities = specialAbilities;
        this.specialDefense = specialDefense;
        this.picture = picture;
        this.created = created;
        this.updated = updated;
    }
}
