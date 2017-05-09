import Character from './character';
import Weapon from './weapon';

new Vue({
    el: '#app',
    data: {
        isGameInProgress: false,
        attackLog: [],
        players: []
    },
    methods: {
        startGame() {
            this.players = [
                new Character({
                    name: 'ME',
                    health: 100,
                    isHuman: true,
                    weapons: [
                        new Weapon({name: 'First Finger'}),
                        new Weapon({name: 'Fuck off Finger'})
                    ]
                }),
                new Character({name: 'MONSTER', health: 100, isHuman: false})
            ]

            this.isGameInProgress = true;
        },
        theHuman() {
            return this
                .players
                .filter(player => player.isHuman)[0];
        },
        theMonster() {
            return this
                .players
                .filter(player => !player.isHuman)[0];
        },
        attack() {
            this.mutateHealth(this.theHuman(), 3, 20, false); // take damage
            this.mutateHealth(this.theMonster(), 1, 10, false); // deal damage
        },
        specialAttack() {
            this.mutateHealth(this.theHuman(), 2, 15, false);
            this.mutateHealth(this.theMonster(), 5, 20, false);

            this
                .theHuman()
                .specialAttacks--;
        },
        heal() {
            this.mutateHealth(this.theHuman(), 10, 30, true); // heal human
            this.mutateHealth(this.theHuman(), 3, 15, false); // take damage

            this
                .theHuman()
                .heals--;
        },
        mutateHealth(player, min, max, isHealing) {
            console.log(player);
            let points = Math.floor((Math.random() * max) + min);
            player.health += isHealing
                ? points
                : (points * -1);
        },
        appendLog(damage, player) {
            this.push(``)
        },
        giveUp() {
            alert('Are you kidding me?. Pftt, finish your fight.');
            this.mutateHealth(this.theHuman(), 3, 25, false);
        }
    },
    watch: {
        players: {
            deep: true,
            handler() {
                if (!this.isGameInProgress) 
                    return;
                
                let message = '';
                this
                    .players
                    .map((player) => {
                        console.log(player.name, player.health);
                        if (player.isHuman && player.currentHealth() <= 0) {
                            message = 'You lost.';
                        }
                        if (!player.isHuman && player.currentHealth() <= 0) {
                            message = 'You won!';
                        }
                    });

                if (message) {
                    this.isGameInProgress = false;
                    setTimeout(() => {
                        alert(message);
                    }, 500)
                }
            }
        }
    }
});