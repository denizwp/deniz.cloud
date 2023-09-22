import { NextApiRequest, NextApiResponse } from "next";
import Spotify from "spotify-web-api-node";

export type TrackResponseSuccess = SpotifyApi.SingleTrackResponse;
export type TrackResponseError = { error: unknown };
export type TrackResponse = TrackResponseSuccess | TrackResponseError;

const api = new Spotify({
	clientId: 'f91c8a8166064b5b81f065f0c6b86c64',
	clientSecret: '054d95eb48ea4e29958384e95f7b961a'
});
let expirationTime = 0;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<TrackResponse>
) {
	if (req.method !== "GET") {
		res.status(405).json({ error: "Method not allowed." });
		return;
	}

	const { id } = req.query;

	if (!id) {
		res.status(400).json({ error: "Missing 'id' query parameter." });
		return;
	}

	if (Array.isArray(id)) {
		res.status(400).json({
			error: "Expected only one 'id' query parameter."
		});
		return;
	}

	try {
		if (Date.now() > expirationTime) {
			const response = await api.clientCredentialsGrant();
			api.setAccessToken(response.body.access_token);

			expirationTime = Date.now() + response.body.expires_in * 1000;
		}

		const response = await api.getTrack(id);
		res.status(200).json(response.body);
	} catch (err) {
		res.status(500).json({ error: (err as any)?.message });
	}
}
