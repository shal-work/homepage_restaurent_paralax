<template>
	<div id="site">
		<Kitchen/>
		<Catalog/>
		<Comment/>
		<Presentation/>
		<Slider/>
		<Visit/>
		<Modal/>
	</div>
	
</template>


<script>
	// 
	import Catalog from '@/components/Site/Catalog/Catalog.vue' 
	import Kitchen from '@/components/Site/Kitchen/Kitchen.vue' 
	import Comment from '@/components/Site/Comment/Comment.vue' 
	import Presentation from '@/components/Site/Presentation/Presentation.vue' 
	import Slider from '@/components/Site/Slider/Slider.vue' 
	import Visit from '@/components/Site/Visit/Visit.vue' 
	import Modal from '@/components/Site/ModalDialog/ModalDialog.vue' 
	
	// import '@/components/js/lib.js';
    export default {
		components: { Kitchen, Catalog, Comment, Presentation, Slider, Visit, Modal }
    }


</script>

