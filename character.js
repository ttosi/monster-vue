import Weapon from './weapon';

class Character {
    constructor(props) {
        this.name = props.name || 'Horse with No Name',
        this.isHuman = props.isHuman || false,
        this.maxHealth = props.maxHealth || 100,
        this.health = this.maxHealth,
        this.heals = props.heals || 2,
        this.specialAttacks = props.specialAttacks || 3
        this.weapons = props.weapons || [ new Weapon({ name: 'middle finger' }) ]
    }

    currentHealth() {
        if (this.health <= 0) {
            this.health = 0;
            return 0;
        }
        if (this.health >= this.maxHealth) {
            this.health = this.maxHealth;
            return this.maxHealth;
        }
        return this.health;
    }
}

export default Character;