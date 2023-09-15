<template>
	<div id="landing">
		<div class="landing">
			<div class="landing__parallax transition-02">
				<ul>
					<!-- Confetti -->
					<template  v-for="item in calassConfetti" v-bind:key="item" >
						<li class="layer transition-02"> 
							<div class="load-in--confetti">
								<i class="confetti transition-02" :class="[item]"></i>
							</div> 
						</li>
					</template>
					<!-- Icons -->
					<template  v-for="item in dataIcons" v-bind:key="item" >
						<li class="layer transition-02"> 
							<div class="load-in--confetti">
								<img :width="[item.width]" :height="[item.height]" class="icons transition-02" :src="[item.url]" alt="leaf"/>
							</div> 
						</li>
					</template>
				</ul>
			</div>
			<Widget/>
		</div>
	</div>
</template>


<script>
import {data, calassConfetti} from '@/data/data.js';
import '@/components/js/parallaxConfetti.js';
import '@/components/js/wheel.js';
import Widget from '@/components/Landing/Widget' 
    export default {
		components: { Widget },
		
        setup () {
            const dataIcons = data;
            return {
                dataIcons,
				calassConfetti
	        }
        }
    }


</script>

