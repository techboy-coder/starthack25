
export type IDs = string[];

export type DataPoint = {
    "Unnamed: 0": number,
    "device_id": string,
    "dataprofile_id": string,
    "cloud_received_time": string,
    "sample_time": string,
    "year": number,
    "year_month": number,
    "year_month_day": number,
    "influx_migration_source_filename": string,
    "T1_remote_K": number,
    "T2_embeded_K": number,
    "RelFlow_Fb_Rel2Vmax": number,
    "RelPower_Fb_Rel2Pmax": number,
    "AbsFlow_Fb_m3s": number,
    "AbsPower_Fb_W": number,
    "Heating_E_J": number,
    "Glycol_Concentration_Rel": number,
    "ControlMode_Write": number,
    "Cooling_E_J": number,
    "RelPos_Fb": number,
    "DeltaT_Limitation_Write": number,
    "SpDeltaT_K_Write": number,
    "Pmax_Rel_Write": number,
    "Vmax_Rel_Write": number,
    "InstallationPosition_Write": number,
    "Override_Write": number,
    "DN_Size": number,
    "SpFlow_DeltaT_lmin_Write": number,
    "DDC_Sp_Rel": number,
    "SpDeltaT_applied_K": number,
    "Error_Status_Cloud": number,
    "DDC_BUS_Sp_Write": number,
    "dT_Manager_Ste": number,
    "Active_dT_Manager_total_h": number,
    "DeltaT_K": number,
    "DDC_Sp_V": number,
    "OperatingHours": number,
    "Flow_Volume_total_m3": number,
    "Y3AnalogInputValue": string
}

export type DataPoints = DataPoint[];

export type ColumnMap = {
    "Unnamed: 0": number,
    "id": string,
    "access": string,
    "basetype": string,
    "description": string,
    "format": string,
    "name": string,
    "privacy": boolean,
    "restriction": string,
    "definedBy": string,
    "unit": string
}

export type ColumnMapping = ColumnMap[]

export type CurrentConfig = {
    chosenId: string,
    limit: number,
    skip: number,
    graphX: string,
    graphY: string,
    amount: number
}

