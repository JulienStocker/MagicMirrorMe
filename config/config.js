/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		/* Commenting out US Holidays
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
					}
				]
			}
		},
		*/
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 47.0333,
				lon: 8.2833
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 47.0333,
				lon: 8.2833
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-Hevy",
			position: "top_right",
			header: "Hevy Workouts",
			config: {
				heavyApiKey: "2a103d99-befe-4b6a-94d5-bf5a5061b5ca",
				updateInterval: 15 * 60 * 1000,    // Updates every 15 minutes
				height: "200px",
				primaryColor: "rgba(194, 95, 96, 1)",
				secondaryColor: "rgba(194, 95, 96, 0.5)"
			}
		},
		// {
		// 	module: "MMM-GoogleCalendar",
		// 	position: "top_left",
		// 	header: "Personal Calendar",
		// 	config: {
		// 		calendars: [
		// 			{
		// 				calendarID: "stockerjulien@gmail.com",
		// 				symbol: "calendar"
		// 			},
		// 			{
		// 				calendarID: "en.ch#holiday@group.v.calendar.google.com",
		// 				symbol: "star"
		// 			}
		// 		],
		// 		updateInterval: 60 * 60 * 1000,
		// 		timeFormat: "relative",
		// 		maxEntries: 10,
		// 		maxDays: 7
		// 	}
		// },
		{
			module: "MMM-GoogleCalendar2",
			position: "top_left",
			header: "Work Calendar",
			config: {
				calendars: [
					{
						calendarID: "julien@witty-machines.com",
						symbol: "calendar"
					}
				],
				updateInterval: 60 * 60 * 1000,
				timeFormat: "relative",
				maxEntries: 10,
				maxDays: 7
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
