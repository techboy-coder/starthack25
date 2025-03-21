import { BACKEND_URL } from '$lib';
import type { ColumnMapping, DataPoints, FlowScore, IDs } from './types';

export async function getIds() {
	const response = await fetch(`${BACKEND_URL}/getIds`);
	let ids: IDs = await response.json();
	return ids;
}

export async function getData(id: string, limit: number, skip: number) {
	const response = await fetch(`${BACKEND_URL}/get?id=${id}&limit=${limit}&skip=${skip}`);
	let data: DataPoints = await response.json();
	return data;
}

export async function getColumns() {
	const response = await fetch(`${BACKEND_URL}/columns`);
	let columns: ColumnMapping = await response.json();
	return columns;
}

// /flow_score/{id}

export async function getFlowScore(id: string) {
	const response = await fetch(`${BACKEND_URL}/flow_score/${id}`);
	let flowScore: FlowScore = await response.json();
	return flowScore;
}

// await fetch("http://localhost:8000/ask", {
//   "credentials": "include",
//   "headers": {
//       "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:136.0) Gecko/20100101 Firefox/136.0",
//       "Accept": "application/json",
//       "Accept-Language": "en-US,en;q=0.5",
//       "Content-Type": "application/json",
//       "Sec-GPC": "1",
//       "Sec-Fetch-Dest": "empty",
//       "Sec-Fetch-Mode": "cors",
//       "Sec-Fetch-Site": "same-origin",
//       "Priority": "u=0"
//   },
//   "referrer": "http://localhost:8000/docs",
//   "body": "{\n \"query\": \"What is this?\",\n  \"X\": [\n    5,0,0,10,7\n  ],\n  \"Y\": [\n    \"june 1\", \"june 2\", \"june 3\", \"june 4\", \"june 5\"\n  ],\n  \"descriptions\": [\n    \"Absolute Power in W\"\n  ]\n}",
//   "method": "POST",
//   "mode": "cors"
// });

// {
//   "query": "What is this?",
//    "X": [
//      5,0,0,10,7
//    ],
//    "Y": [
//      "june 1", "june 2", "june 3", "june 4", "june 5"
//    ],
//    "descriptions": [
//      "Absolute Power in W"
//    ]
//  }

export async function ask(query: string, X: number[], Y: string[], description: string) {
	const body = {
		query: query,
		X: X,
		Y: Y,
		descriptions: [description]
	};

	const response = await fetch(`${BACKEND_URL}/ask`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});

	let result: { response: string } = await response.json();
	return result;
}
