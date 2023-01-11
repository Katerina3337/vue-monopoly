<template>
    <div>
        <button v-show="!isStarted" @click="start">Start</button>
        <div>
            <div v-show="isStarted">
                <button @click="rollDice">Roll the dice!</button>
            <div v-if="isRolled">
                <p>Player: <span>{{ diceOne }}</span> + <span>{{ diceTwo }}</span> = {{ total }}</p>
                <p>Computer: <span></span> <span></span></p>
            </div>
            </div>
            
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            isStarted: false,
            diceOne: null,
            diceTwo: null,
            total: null,
            isRolled: false
        };
    },
    computed: {

    },
    methods: {
        start() {
            this.isStarted = true;
        },
        rollDice() {
            this.isRolled = true;
            this.diceOne = Math.floor(Math.random() * 6);
            this.diceTwo = Math.floor(Math.random() * 6);
            this.total = this.diceOne + this.diceTwo;

        },

    }
};
</script>