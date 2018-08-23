<template>
	<ul class="cb-slideshow">
        <li></li>
    </ul>
</template>

<script>
export default {
  name: 'indexbg'
}
</script>

<style lang="scss">
	.cb-slideshow {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #0086B3;
    top: 0px;
    left: 0px;
    z-index: 0;
     li {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        color: transparent;
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: none;
        opacity: 0;
        z-index: 0;
        -webkit-backface-visibility: hidden;
        -webkit-animation: imageAnimation 20s linear infinite 0s;
        -moz-animation: imageAnimation 20s linear infinite 0s;
        -o-animation: imageAnimation 20s linear infinite 0s;
        -ms-animation: imageAnimation 20s linear infinite 0s;
        animation: imageAnimation 20s linear infinite 0s;
        
        &:nth-child(1) { 
              background-image:url(../../assets/bg-1.gif)
        }
    }
}
@keyframes imageAnimation { 
    0% {
        opacity: 0;
        animation-timing-function: ease-in;
    }
    8% {
        opacity: 1;
        transform: scale(1.15);
        animation-timing-function: ease-out;
    }
    17% {
        opacity: 1;
        transform: scale(1.20);
    }
    25% {
        opacity: 0;
        transform: scale(1.40);
    }
    100% { opacity: 0 }
}

</style>