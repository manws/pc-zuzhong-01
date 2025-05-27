module.exports = {
	title: '首都医科大学宣武医院',
	tick: '首都医科大学宣武医院',
	flag: 'xuanwu', // 当前项目的标识，用来标记路由
	showQRCode: false, // 显示下载APP的二维码
	showLang: false,
	showSize: false,
	showFullscreen: false,
	/**
	 * @type {boolean} true | false
	 * @description Whether show the settings right-panel
	 */
	showSettings: false,

	/**
	 * @type {boolean} true | false
	 * @description Whether need tagsView
	 */
	tagsView: true,

	/**
	 * @type {boolean} true | false
	 * @description Whether fix the header
	 */
	fixedHeader: true,

	/**
	 * @type {boolean} true | false
	 * @description Whether show the logo in sidebar
	 */
	sidebarLogo: true,

	/**
	 * @type {boolean} true | false
	 * @description Whether support pinyin search in headerSearch
	 * Bundle size minified 47.3kb,minified + gzipped 63kb
	 */
	supportPinyinSearch: true,

	/**
	 * @type {string | array} 'production' | ['production', 'development']
	 * @description Need show err logs component.
	 * The default is only used in the production env
	 * If you want to also use it in dev, you can pass ['production', 'development']
	 */
	errorLog: 'production',

	/**
	 * 是否需要获取菜单生成路由
	 */
	isRemoteRoute: false
}
