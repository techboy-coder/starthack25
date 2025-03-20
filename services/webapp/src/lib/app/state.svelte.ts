import { getData } from "./api";
import { type FlowScore, type ColumnMapping, type CurrentConfig } from "./types";

export let IDs = $state([""])

export let currentConfig = $state<CurrentConfig>({
    chosenId: IDs[0],
    limit: 100,
    skip: 0,
    graphX: "year_month_day",
    graphY: "AbsPower_Fb_W",
    amount: 100
})


let currentData = $derived(getData(currentConfig.chosenId, currentConfig.limit, currentConfig.skip))

export async function getCurrentData(){
    return await currentData
}

export let colMapping = $state<ColumnMapping>([])

export let fscoredata = $state<FlowScore>([]);