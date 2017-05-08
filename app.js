new Vue({
    el: '#app',
    data: {
        playerHp: 100,
        monsterHp: 100,
        isGameInProgress: false,
        attackLog: []
    },
    computed: {
        playerHealth() {
            if (this.playerHp <= 0) {
                return 0;
            }
            return this.playerHp;
        },
        monsterHealth() {
            if (this.monsterHp <= 0) {
                return 0;
            }
            return this.monsterHp;
        }
    },
    methods: {
        startGame() {
            this.playerHp = 100;
            this.monsterHp = 100;
            this.isGameInProgress = true;
        },
        attack() {
            this.playerHp -= Math.floor((Math.random() * 10) + 1);
            this.monsterHp -= Math.floor((Math.random() * 10) + 1);
            this.checkForWin();
        },
        specialAttack() {
            this.playerHp -= Math.floor((Math.random() * 10) + 1);
            this.monsterHp -= Math.floor((Math.random() * 20) + 3);
            this.checkForWin();
        },
        heal() {
            this.playerHp += Math.floor((Math.random() * 8) + 1);
            this.playerHp -= Math.floor((Math.random() * 10) + 2);
            this.checkForWin()
        },
        adjustHp(player, amount) {
            player += amount;
        },
        checkForWin() {
            let message = '';

            if (this.playerHp <= 0) {
                message = 'Sorry, you lost!';
            } else if (this.monsterHp <= 0) {
                message = 'BAM! You won!';
            }

            if (message) {
                this.isGameInProgress = false;
                setTimeout(() => {
                    alert(message);
                }, 500)
            }
        },
        appendLog(damage, player) {
            this.push()
        }
    }
});