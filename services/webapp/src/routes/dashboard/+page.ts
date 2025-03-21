import { getData, getFlowScore, getIds } from '$lib/app/api';
import { currentConfig, fscoredata, IDs } from '$lib/app/state.svelte';
import type { PageLoad } from './$types';

export const load = (async ({depends}) => {
	let ids = await getIds();
	IDs.splice(0, IDs.length, ...[...new Set(ids)]);
	if (!currentConfig.chosenId || !IDs.includes(currentConfig.chosenId)) {
		currentConfig.chosenId = IDs[0];
	}

	depends('chart:data');

	let d = await getFlowScore(currentConfig.chosenId);
	if (fscoredata && fscoredata.length > 0){
		fscoredata.splice(0, fscoredata.length, ...d);
	} else {
		fscoredata!.push(...d);
	}

	return {
		dpoint: getData(currentConfig.chosenId, currentConfig.limit, currentConfig.skip),
	};
}) satisfies PageLoad;
