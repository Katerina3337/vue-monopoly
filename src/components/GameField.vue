<template>
    <div class="wrapper">
        <div class="top-row">
            <div class="box box-big">
                <div class="parking">
                    <span class="free-parking">Free</span>
                    <font-awesome-icon icon="fa-solid fa-car" class="parking-img"/>
                    <span class="parking-parking">Parking</span>
                </div>
            </div>
            <div class="box">
                <div class="top-street-col red"></div>
                <p class="top-street-name">Strand</p>
                <p class="price price-top"> <span class="price-label">M</span> 220</p>
            </div>
            <div class="box">
                <p class="chance-text chance-text-top">Chance</p>
                <font-awesome-icon icon="fa-solid fa-question" class="question question-top"/>
            </div>
            <div class="box">
                <div class="top-street-col red"></div>
                <p class="top-street-name">Fleet Street</p>
                <p class="price price-top"> <span class="price-label">M</span> 220</p>
            </div>
            <div class="box">
                <div class="top-street-col red"></div>
                <p class="top-street-name">Trafalgar Square</p>
                <p class="price price-top"> <span class="price-label">M</span> 240</p>
            </div>
            <div class="box">
                <p class="station-name station-name-top">Marylebone <br> Station</p>
                <img class="station station-top" src="../assets/img/train.png" alt="">
                <p class="price price-top"> <span class="price-label">M</span> 200</p>
            </div>
            <div class="box">
                <div class="top-street-col yellow"></div>
                <p class="top-street-name">Liecister Square</p>
                <p class="price price-top"> <span class="price-label">M</span> 260</p>
            </div>
            <div class="box">
                <div class="top-street-col yellow"></div>
                <p class="top-street-name">Coventry Street</p>
                <p class="price price-top"> <span class="price-label">M</span> 260</p>
            </div>
            <div class="box">
                <p class="water-works-text">Water Works</p>
                <font-awesome-icon icon="fa-solid fa-faucet-drip" class="water-works"/>
                <p class="price price-top"> <span class="price-label">M</span> 150</p>
            </div>
            <div class="box">
                <div class="top-street-col yellow"></div>
                <p class="top-street-name">Piccadilly</p>
                <p class="price price-top"> <span class="price-label">M</span> 280</p>
            </div>
            <div class="box box-big">
                <div class="policeman">
                    <span class="goto-policeman">Go To</span>
                    <font-awesome-icon icon="fa-solid fa-person-military-pointing" class="policeman-img"/>
                    <span class="jail-policeman">Jail</span>
                </div>
            </div>
        </div>
        <div class="side-rows">
            <div class="left-row">
                <div class="box">
                    <div class="left-street-col orange"></div>
                    <p class="left-street-name">Vine <br> Street</p>
                    <p class="price price-left"> <span class="price-label">M</span> 200</p>
                </div>
                <div class="box">
                    <div class="left-street-col orange"></div>
                    <p class="left-street-name">Marlborough <br> Street</p>
                    <p class="price price-left"> <span class="price-label">M</span> 180</p>
                </div>
                <div class="box">
                    <p class="chest-text chest-text-left">Community <br> Chest</p>
                    <img src="../assets/img/chest.png" alt="" class="chest chest-left">
                </div>
                <div class="box">
                    <div class="left-street-col orange"></div>
                    <p class="left-street-name">Bow <br> Street</p>
                    <p class="price price-left"> <span class="price-label">M</span> 180</p>
                </div>
                <div class="box">
                    <p class="station-name station-name-left">Marylebone <br> Station</p>
                    <img class="station station-left" src="../assets/img/train.png" alt="">
                    <p class="price price-left"> <span class="price-label">M</span> 200</p>
                </div>
                <div class="box">
                    <div class="left-street-col pink"></div>
                    <p class="left-street-name">Northumrl <br> Avenue</p>
                    <p class="price price-left"> <span class="price-label">M</span> 160</p>
                </div>
                <div class="box">
                    <div class="left-street-col pink"></div>
                    <p class="left-street-name">Whitehall</p>
                    <p class="price price-left"> <span class="price-label">M</span> 140</p>
                </div>
                <div class="box">
                    <p class="electricity-text">Electric <br> Community</p>
                    <img src="../assets/img/Lamp.png" alt="" class="electricity">
                    <p class="price price-left"> <span class="price-label">M</span> 150</p>
                </div>
                <div class="box">
                    <div class="left-street-col pink"></div>
                    <p class="left-street-name">Pall Mall</p>
                    <p class="price price-left"> <span class="price-label">M</span> 140</p>
                </div>
            </div>
            <mon-dices></mon-dices>
            <div class="right-row">
                <div class="box">
                    <div class="right-street-col green"></div>
                    <p class="right-street-name">Regent <br> Street</p>
                    <p class="price price-right"> <span class="price-label">M</span> 300</p>
                </div>
                <div class="box">
                    <div class="right-street-col green"></div>
                    <p class="right-street-name">Oxford <br> Street</p>
                    <p class="price price-right"> <span class="price-label">M</span> 300</p>
                </div>
                <div class="box">
                    <p class="chest-text chest-text-right">Community <br> Chest</p>
                    <img src="../assets/img/chest.png" alt="" class="chest chest-right">
                </div>
                <div class="box">
                    <div class="right-street-col green"></div>
                    <p class="right-street-name">Bond <br> Street</p>
                    <p class="price price-right"> <span class="price-label">M</span> 320</p>
                </div>
                <div class="box">
                    <p class="station-name station-name-right">Live Rpool St. <br> Station</p>
                    <img class="station station-right" src="../assets/img/train.png" alt="">
                    <p class="price price-right"> <span class="price-label">M</span> 200</p>
                </div>
                <div class="box">
                    <p class="chance-text chance-text-right">Chance</p>
                    <font-awesome-icon icon="fa-solid fa-question" class=" question question-right"/>
                </div>
                <div class="box">
                    <div class="right-street-col blue"></div>
                    <p class="right-street-name">Park <br> Lane</p>
                    <p class="price price-right"> <span class="price-label">M</span> 350</p>
                </div>
                <div class="box">
                    <p class="supertax-text">Super Tax</p>
                    <img src="../assets/img/ring.png" alt="" class="supertax">
                    <p class="price supertax-price"> pay <span class="price-label">M</span> 100</p>
                </div>
                <div class="box">
                    <div class="right-street-col blue"></div>
                    <p class="right-street-name">MayFair</p>
                    <p class="price price-right"> <span class="price-label">M</span> 400</p>
                </div>
            </div>
        </div>
        <div class="bottom-row">
            <div class="box box-big">
                <span class="just-jail">Just</span>
                <span class="visiting-jail">Visiting</span>
                <div class="jail">
                    <div class="jail-img">
                        <span class="in-jail">In</span>
                        <font-awesome-icon icon="fa-solid fa-handcuffs" class="handcluffs"/>
                        <span class="jail-jail">Jail</span>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="bottom-street-col light-blue"></div>
                <p class="bottom-street-name">Pentonville Road</p>
                <p class="price price-bottom"> <span class="price-label">M</span> 120</p>
            </div>
            <div class="box">
                <div class="bottom-street-col light-blue"></div>
                <p class="bottom-street-name">Euston Road</p>
                <p class="price price-bottom"> <span class="price-label">M</span> 100</p>
            </div>
            <div class="box">
                <p class="chance-text chance-text-bottom">Chance</p>
                <font-awesome-icon icon="fa-solid fa-question" class=" question question-bottom"/>
            </div>
            <div class="box">
                <div class="bottom-street-col light-blue"></div>
                <p class="bottom-street-name">The Angel, Islington</p>
                <p class="price price-bottom"> <span class="price-label">M</span> 100</p>
            </div>
            <div class="box">
                <p class="station-name station-name-bottom">Kings Cross Station</p>
                <img class="station" src="../assets/img/train.png" alt="">
                <p class="price price-bottom"> <span class="price-label">M</span> 200</p>
            </div>
            <div class="box">
                <p class="tax-text">Income Tax</p>
                <p class="tax">*</p>
                <p class="price tax-price">pay <span class="price-label">M</span> 200</p>
            </div>
            <div class="box">
                <div class="bottom-street-col brown"></div>
                <p class="bottom-street-name">White Chapel Road</p>
                <p class="price price-bottom"> <span class="price-label">M</span> 60</p>
            </div>
            <div class="box">
                <p class="chest-text chest-text-bottom">Community <br> Chest</p>
                <img src="../assets/img/chest.png" alt="" class="chest chest-bottom">
            </div>
            <div class="box">
                <div class="bottom-street-col brown"></div>
                <p class="bottom-street-name">Old Kent Road</p>
                <p class="price price-bottom"> <span class="price-label">M</span> 60</p>
            </div>
            <div class="box box-big">
                <p class="start">Collect <br><span class="current">M</span> 200 Salary <br> as You Pass <br><span class="go">GO</span></p>
                <img src="../assets/img/arrow.png" alt="" class="start-arrow">
            </div>
        </div>
        
        
    </div>
</template>

<script>

import MonDices from '@/components/MonDices.vue';

export default {
    components: {MonDices}
}
</script>

<style>
body{
    margin: 0;
    padding: 0;
}

.wrapper {
    margin: 10px;

    width: 707px;
    height: 707px;

    display: flex;
    flex-direction: column;

    border: 1px solid black;

}

.box {
    width: 20px;
    height: 20px;

    border: 1px solid grey;
}

/* ?????????????? ?? ???????????? ???????? */

.top-row, .bottom-row {
    display: flex;
}

.top-row .box, .bottom-row .box {
    width: 59px;
    height: 77px;

    position: relative;

    padding: 0;
    margin: 0;
}

.top-row .box-big, .bottom-row .box-big {
    width: 77px;
    height: 77px;
}

/* ?????????? ?? ???????????? ???????? */

.side-rows {
    display: flex;
    justify-content: space-between;
}

.left-row .box, .right-row .box{
    width: 77px;
    height: 59px;

    position: relative;
}

/* Start */

.start {
    font-size: 10px;
    transform: rotate(315deg);
    text-align: center;
    position: absolute;
    top: -5px;
    left: 7px;
}

.start .go {
    font-size: 15px;
}

.start .current {
    text-decoration: line-through;
}

.start-arrow {
    transform: rotate(180deg);
    display: block;
    width: 50px;
    height: 15px;
    position: absolute;
    left: 12px;
    bottom: 3px;
}

/* Jail */

.just-jail, .visiting-jail {
    display: block;
    position: absolute;
}

.just-jail {
    transform: rotate(90deg);
    top: 17px;
    left: -2px;
}

.visiting-jail {
    left: 22px;
    top: 57px;
}

.jail {
    width: 55px;
    height: 55px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: orange;
}

.jail-img {
    transform: rotate(45deg);
    position: absolute;
    top: 12px;
    left: 12px;
}

.in-jail, .jail-jail {
    font-size: 12px;
}

.in-jail, .jail-jail, .handcluffs {
    position: absolute;
}

.in-jail {
    top: -29px;
    left: 16px;
}

.handcluffs {
    font-size: 19px;
    top: -12px;
    left: 10px;
}

.jail-jail {
    top: 12px;
    left: 14px;
}

/* Free Parking */

.parking {
    transform: rotate(135deg);
}

.free-parking, .parking-img, .parking-parking {
    font-size: 15px;
    position: absolute;
}

.free-parking {
    top: -69px;
    left: 53px;
}

.parking-img {
    font-size: 37px;
    top: -50px;
    left: 47px;
    color: red;
}

.parking-parking {
    top: -12px;
    left: 41px;
}

/* Policeman */

.policeman {
    transform: rotate(225deg);
}

.goto-policeman, .policeman-img, .jail-policeman {
    position: absolute;
    font-size: 15px;
}

.goto-policeman {
    top: -67px;
    left: -7px;
}

.policeman-img {
    font-size: 35px;
    top: -44px;
    left: -10px;
}

.jail-policeman {
    top: -3px;
}

/* ?????????? */

.top-street-col {
    width: 59px;
    height: 20px;

    position: absolute;
    bottom: 0;
}

.left-street-col {
    width: 20px;
    height: 59px;

    position: absolute;
    right: 0;
}

.right-street-col {
    width: 20px;
    height: 59px;

    position: absolute;
    left: 0;
}

.bottom-street-col {
    width: 59px;
    height: 20px;

    position: absolute;
    top: 0;
}

.orange {
    background-color: orange;
}

.pink {
    background-color: rgb(223, 15, 102);
}

.red {
    background-color: red;
}

.yellow {
    background-color: yellow;
}

.green {
    background-color: green;
}

.blue {
    background-color: blue;
}

.light-blue {
    background-color: rgb(140, 212, 234);
}

.brown {
    background-color: brown;
}

.top-street-name {
    text-align: center;
    font-size: 10px;
    transform: rotate(180deg);
    margin-top: 28px;
}

.right-street-name {
    text-align: center;
    font-size: 10px;
    transform: rotate(270deg);
    margin-top: 18px;
}

.left-street-name {
    text-align: center;
    font-size: 10px;
    transform: rotate(90deg);
    margin-top: 20px;
}

.bottom-street-name {
    text-align: center;
    font-size: 10px;
    margin-top: 25px;
}

/* ????????  */

.price-label {
    text-decoration: line-through;
}

.price {
    font-size: 12px;
    position: absolute;
}

.price-top {
    transform: rotate(180deg);
    top: -12px;
    left: 12px;
}

.price-left {
    transform: rotate(90deg);
    left: -10px;
    top: 10px
}

.price-right {
    transform: rotate(270deg);
    top: 12px;
    right: -10px;
}

.price-bottom {
    bottom: -12px;
    left: 14px;
}

/* ?????????????? */

.station {
    display: block;
    width: 37px;
    height: 27px;
    margin: 0 auto;
}

.station-top {
    transform: rotate(180deg);
    position: absolute;
    left: 10px;
    top: 22px;
}

.station-left {
    transform: rotate(90deg);
    position: absolute;
    right: 22px;
    top: 16px;
}

.station-right {
    transform: rotate(270deg);
    position: absolute;
    left: 22px;
    top: 15px;
}

.station-name {
    font-size: 10px;
    text-align: center;
}

.station-name-top {
    transform: rotate(180deg);
    position: absolute;
    bottom: -7px;
    left: 4px;
}

.station-name-left {
    transform: rotate(90deg);
    position: absolute;
    right: -10px;
    top: 8px;
}

.station-name-right {
    transform: rotate(270deg);
    position: absolute;
    left: -15px;
    top: 6px;
}

.station-name-bottom {
    margin-top: 3px;
    margin-bottom: 1px;
}

/* ???????????? ???????? */

.chance-text {
    font-size: 10px;
    position: absolute;
}

.chance-text-top {
    transform: rotate(180deg);
    bottom: -7px;
    left: 15px;
}

.question {
    font-size: 55px;
}

.question-top {
    transform: rotate(180deg);
    margin-top: 4px;
    margin-left: 12px;
    color: rgb(116, 219, 248);
}

.chance-text-right {
    transform: rotate(270deg);
    left: -7px;
    top: 15px;
}

.question-right {
    transform: rotate(270deg);
    margin-top: 2px;
    margin-left: 27px;
    color: orangered;
}

.chance-text-bottom {
    top: -7px;
    left: 14px;
}

.question-bottom {
    margin-top: 17px;
    margin-left: 12px;
    color: rgb(239, 6, 177);
}

/* ???????????????????? */

.water-works-text {
    font-size: 10px;
    position: absolute;
    transform: rotate(180deg);
    bottom: -7px;
    left: 3px;
}

.water-works {
    font-size: 37px;
    transform: rotate(180deg);
    margin-top: 18px;
    margin-left: 10px;
}

/* ?????????????????????????????????? */

.electricity-text {
    font-size: 10px;
    transform: rotate(90deg);
    position: absolute;
    right: -10px;
    top: 8px;
    text-align: center;
}

.electricity {
    display: block;
    width: 35px;
    height: 35px;
    transform: rotate(90deg);
    position: absolute;
    right: 25px;
    top: 11px;
}

/* ???????????? */

.chest-text {
    font-size: 10px;
    text-align: center;
}

.chest-text-left {
    transform: rotate(90deg);
    position: absolute;
    right: -10px;
    top: 7px;
}

.chest-text-right {
    transform: rotate(270deg);
    position: absolute;
    left: -10px;
    top: 7px;
}

.chest-text-bottom {
    margin-top: 3px;
    margin-bottom: 1px;
}

.chest {
    display: block;
    width: 59px;
    height: 48px;
    position: absolute;
    
}

.chest-left {
    transform: rotate(90deg);
    top: 4px;
    right: 17px;
}

.chest-right {
    transform: rotate(270deg);
    top: 7px;
    right: -2px;
}

.chest-bottom {
    bottom: 4px;
}

/* ???????????? */

.tax-text {
    font-size: 10px;
    text-align: center;
    margin-top: 3px;
    margin-bottom: 1px;
}

.tax {
    font-size: 15px;
    text-align: center;
}

.tax-price {
    bottom: -12px;
    left: 5px;
}

.supertax-text {
    font-size: 10px;
    text-align: center;
    transform: rotate(270deg);
    position: absolute;
    left: -12px;
    top: 12px;
}

.supertax {
    display: block;
    width: 37px;
    height: 27px;
    transform: rotate(270deg);
    position: absolute;
    left: 17px;
    top: 15px;
}

.supertax-price {
    font-size: 10px;
    position: absolute;
    transform: rotate(270deg);
    top: 12px;
    right: -14px;
}

</style>