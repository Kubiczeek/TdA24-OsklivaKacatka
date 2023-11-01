const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.8d616d07.js","app":"_app/immutable/entry/app.73281b2b.js","imports":["_app/immutable/entry/start.8d616d07.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.6de1b757.js","_app/immutable/entry/app.73281b2b.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.a21d6cee.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-4f4514a9.js')),
			__memo(() => import('./chunks/1-242434b7.js')),
			__memo(() => import('./chunks/2-1cccd99f.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
