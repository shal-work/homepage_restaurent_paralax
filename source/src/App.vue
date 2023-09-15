<template>

	<div>
		<Site v-on:click="hendel"/>
		<Landing v-if="visible" v-on:click="hendel"/>
	</div>
	
</template>


<script>
	import Landing from '@/components/Landing/Landing'
	import Site from '@/components/Site/Site' 
	import { ref } from '@vue/reactivity';

	export default {
		components: { Landing, Site },
		setup () {
			let visible = ref(true);
            // let hendel = val => visible.value = false;
            let hendel = () => {
				setTimeout(() => {visible.value = false}, 800);
			};

			const script = document.createElement("script")
			script.src = "script.js";
			script.type = 'text/javascript';
			// script.async = true;
			script.async = false;
			document.body.appendChild(script);

            return {
                visible,
				hendel
	        }
        }
	}

</script>


