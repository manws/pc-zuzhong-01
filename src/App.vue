<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	import {
		Message
	} from 'element-ui';
	export default {
		name: 'App',
		data() {
			return {};
		},
		mounted() {
			window.onTokenInvalid = () => {
				Message.info('您的账号登录已超时或在异地登录，请重新登录！');
				setTimeout(() => {
					this.$store.dispatch('user/resetToken').then(res => {
						localStorage.clear();
						window.location.reload();
					});
				}, 2000);
			};
		}
	};
</script>
