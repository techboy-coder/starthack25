<script lang="ts">
	import type { DataPoints } from '$lib/app/types';
	import * as Table from '$lib/components/ui/table/index.js';
	import { readable } from 'svelte/store';
	import { createTable, Subscribe, Render } from 'svelte-headless-table';

	let { data }: { data: DataPoints } = $props();

	const dd = readable(data);

	const table = createTable(dd);

	// "Unnamed: 0": number,
	// "device_id": string,
	// "dataprofile_id": string,
	// "cloud_received_time": string,
	// "sample_time": string,
	// "year": number,
	// "year_month": number,
	// "year_month_day": number,
	// "influx_migration_source_filename": string,
	// "T1_remote_K": number,
	// "T2_embeded_K": number,
	// "RelFlow_Fb_Rel2Vmax": number,
	// "RelPower_Fb_Rel2Pmax": number,
	// "AbsFlow_Fb_m3s": number,
	// "AbsPower_Fb_W": number,
	// "Heating_E_J": number,
	// "Glycol_Concentration_Rel": number,
	// "ControlMode_Write": number,
	// "Cooling_E_J": number,
	// "RelPos_Fb": number,
	// "DeltaT_Limitation_Write": number,
	// "SpDeltaT_K_Write": number,
	// "Pmax_Rel_Write": number,
	// "Vmax_Rel_Write": number,
	// "InstallationPosition_Write": number,
	// "Override_Write": number,
	// "DN_Size": number,
	// "SpFlow_DeltaT_lmin_Write": number,
	// "DDC_Sp_Rel": number,
	// "SpDeltaT_applied_K": number,
	// "Error_Status_Cloud": number,
	// "DDC_BUS_Sp_Write": number,
	// "dT_Manager_Ste": number,
	// "Active_dT_Manager_total_h": number,
	// "DeltaT_K": number,
	// "DDC_Sp_V": number,
	// "OperatingHours": number,
	// "Flow_Volume_total_m3": number,
	// "Y3AnalogInputValue": string

	const columns = table.createColumns([
		table.column({
			header: 'Year Month Day',
			accessor: 'year_month_day'
		}),

		table.column({
			header: 'T1 Remote K',
			accessor: 'T1_remote_K'
		}),
		table.column({
			header: 'T2 Embedded K',
			accessor: 'T2_embeded_K'
		}),
		table.column({
			header: 'Rel Flow Fb Rel2Vmax',
			accessor: 'RelFlow_Fb_Rel2Vmax'
		}),
		table.column({
			header: 'Rel Power Fb Rel2Pmax',
			accessor: 'RelPower_Fb_Rel2Pmax'
		}),
		table.column({
			header: 'Abs Flow Fb m3s',
			accessor: 'AbsFlow_Fb_m3s'
		}),
		table.column({
			header: 'Abs Power Fb W',
			accessor: 'AbsPower_Fb_W'
		}),
		table.column({
			header: 'Heating E J',
			accessor: 'Heating_E_J'
		}),
		table.column({
			header: 'Glycol Concentration Rel',
			accessor: 'Glycol_Concentration_Rel'
		}),
		table.column({
			header: 'Control Mode Write',
			accessor: 'ControlMode_Write'
		})
	]);

	const { headerRows, rows, tableAttrs, tableBodyAttrs } = table.createViewModel(columns);
</script>

<table {...$tableAttrs}>
	<thead>
		{#each $headerRows as headerRow (headerRow.id)}
			<Subscribe rowAttrs={headerRow.attrs()} let:rowAttrs>
				<tr {...rowAttrs}>
					{#each headerRow.cells as cell (cell.id)}
						<Subscribe attrs={cell.attrs()} let:attrs>
							<th {...attrs}>
								<Render of={cell.render()} />
							</th>
						</Subscribe>
					{/each}
				</tr>
			</Subscribe>
		{/each}
	</thead>
	<tbody {...$tableBodyAttrs}>
		{#each $rows as row (row.id)}
			<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
				<tr {...rowAttrs}>
					{#each row.cells as cell (cell.id)}
						<Subscribe attrs={cell.attrs()} let:attrs>
							<td {...attrs}>
								<Render of={cell.render()} />
							</td>
						</Subscribe>
					{/each}
				</tr>
			</Subscribe>
		{/each}
	</tbody>
</table>
