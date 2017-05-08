new Vue({
    el: '#exercise',
    data: {
        hasEffect: false,
        userClass: '',
        useUserClass: false,
        userStyle: 'red',
        iveClass: 'ive',
        gotClass: 'got',
        classClass: 'class',
        progressWidth: 0
    },
    methods: {
        startEffect() {
            this.hasEffect = true; // start the effect change immediately
            setInterval(() => {
                this.hasEffect = !this.hasEffect
            }, 750);
        },
        startProgress: function () {
            this.progressWidth = 0;
            let progressInterval = setInterval(()=> {
                this.progressWidth += .25;
                if(this.progressWidth === 100) {
                    clearInterval(progressInterval);
                }
            }, 8);
        },
    }
});