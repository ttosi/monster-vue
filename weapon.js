class Weapon {
    constructor(props) {
        this.name = props.name || 'index finger',
        this.minDamage = props.minDamage || 1,
        this.maxDamage = props.maxDamage || 2,
        this.hitProbablity = props.hitProbablity || 10
    }

    use() {
        // returns false if misssed, otherwise
        // a random value between min/max Damage

    }
};

export default Weapon;
