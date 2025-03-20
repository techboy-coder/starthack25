import { getData, getFlowScore, getIds } from '$lib/app/api';
import { currentConfig, IDs } from '$lib/app/state.svelte';
import type { PageLoad } from './$types';

export const load = (async () => {
	let ids = await getIds();
	IDs.splice(0, IDs.length, ...[...new Set(ids)]);
	if (!currentConfig.chosenId || !IDs.includes(currentConfig.chosenId)) {
		currentConfig.chosenId = IDs[0];
	}

	let dpoint = await getData(currentConfig.chosenId, currentConfig.limit, currentConfig.skip)
	let fscore =  await getFlowScore(currentConfig.chosenId);
	
	return {
		dpoint: getData(currentConfig.chosenId, currentConfig.limit, currentConfig.skip)
		// fscore
	};
}) satisfies PageLoad;
