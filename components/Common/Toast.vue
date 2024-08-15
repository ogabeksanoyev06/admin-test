<template>
	<div class="relative flex-center-between bg-transparent">
		<div class="flex items-center gap-2 px-4 py-5">
			<span v-if="type === 'success'">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<circle cx="12" cy="12" r="9" fill="#16CC53" stroke="#16CC53" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M9 12L11 14L15 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</span>
			<span v-if="type === 'error'">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<circle cx="12" cy="12" r="10" fill="#E04A36" />
					<path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#251522" stroke-width="1.5" stroke-linecap="round" />
				</svg>
			</span>
			<h2 class="text-white font-normal text-base leading-130">
				{{ text }}
			</h2>
		</div>
	</div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
	text: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	}
});
</script>

<style>
.Vue-Toastification__toast {
	align-items: flex-start;
	box-shadow: 0 8px 20px #121c2529 !important;
	display: flex;
	justify-content: space-between !important;
	min-height: auto !important;
	overflow: visible !important;
	padding: 0 !important;
	border-radius: 12px;
	background: rgba(21, 21, 22, 0.8);
	backdrop-filter: blur(10px);
}
</style>
