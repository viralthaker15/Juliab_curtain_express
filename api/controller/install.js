const nonce = require("nonce")();
const cookie = require("cookie");
const querystring = require("querystring");
const crypto = require("crypto");
const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;
const scopes = "read_products";
const request = require("request-promise");
//const forwardingAddress = process.env.APP_URL;
const forwardingAddress = "https://72e3e4d7863f.ngrok.io";
const jwt = require("jsonwebtoken");

exports.getInstall = function (req, res) {
	// const shop = req.query.shop;
	const shop = "shah-nidhi.myshopify.com";
	/* Skip to login if we are in dev server */
	// if (!process.env.PORT) {
	// 	createJWT(res, shop);
	// 	return;
	// }
	// if (process.env.PORT) {
	// 	createJWT(res, shop);
	// 	return;
	// }
	/* End of dummy code */
	if (shop) {
		const state = nonce();
		const redirectUri = forwardingAddress + "/callback";
		const installUrl =
			"https://" +
			shop +
			"/admin/oauth/authorize?client_id=" +
			apiKey +
			"&scope=" +
			scopes +
			"&state=" +
			state +
			"&redirect_uri=" +
			redirectUri;
		res.cookie("state", state);
		res.redirect(installUrl);
	} else {
		return res
			.status(400)
			.send(
				"Missing shop parameter. Please add ?shop=your-development-shop.myshopify.com to your request"
			);
	}
};

const createJWT = (res, shop) => {
	var token = jwt.sign({ user: shop }, "test@123", { expiresIn: "15m" });
	res.redirect(`https://juliab-curtain.herokuapp.com/?token=${token}`);
};

exports.getCallback = function (req, res) {
	const { shop, hmac, code, state } = req.query;
	const stateCookie = cookie.parse(req.headers.cookie).state;
	console.log("state----" + state + "    cookie-----" + stateCookie);
	if (state !== stateCookie) {
		return res.status(403).send("Request origin cannot be verified");
	}
	if (shop && hmac && code) {
		const map = Object.assign({}, req.query);
		//delete map["signature"];
		delete map["hmac"];
		const message = querystring.stringify(map);
		const providedHmac = Buffer.from(hmac, "utf-8");
		const generatedHash = Buffer.from(
			crypto.createHmac("sha256", apiSecret).update(message).digest("hex"),
			"utf-8"
		);
		let hashEquals = false;
		// timingSafeEqual will prevent any timing attacks. Arguments must be buffers
		try {
			hashEquals = crypto.timingSafeEqual(generatedHash, providedHmac);
			// timingSafeEqual will return an error if the input buffers are not the same length.
		} catch (e) {
			hashEquals = false;
		}
		if (!hashEquals) {
			return res.status(400).send("HMAC validation failed");
		}

		const accessTokenRequestUrl =
			"https://" + shop + "/admin/oauth/access_token";
		const accessTokenPayload = {
			client_id: apiKey,
			client_secret: apiSecret,
			code,
		};

		request
			.post(accessTokenRequestUrl, { json: accessTokenPayload })
			.then(accessTokenResponse => {
				const accessToken = accessTokenResponse.access_token;

				const shopRequestUrl =
					"https://" + shop + "/admin/api/2019-04/shop.json";
				const shopRequestHeaders = {
					"X-Shopify-Access-Token": accessToken,
				};
				request
					.get(shopRequestUrl, { headers: shopRequestHeaders })
					.then(shopResponse => {
						createJWT(res, shop);
						//res.end(shopResponse);
					}) // not generating token
					.catch(error => {
						console.log(error);
						res.status(400).send(error.error_description);
					});
				// TODO
				// Use access token to make API call to 'shop' endpoint
			})
			.catch(error => {
				res.status(error.statusCode).send(error.error.error_description + "*");
			});
	} else {
		res.status(400).send("Required parameters missing");
	}
};
