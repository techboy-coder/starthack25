// TypeScript Types

export interface HVACData {
	id: string; // Unique identifier for the row (LIM 1234, etc.)
	type: string; // Type of task/issue (e.g., "Task", "Alert", "Notification")
	shortDescription: string; // Short description in the second cell.
	details: string; // More detailed description in the third cell.
	status: 'Todo' | 'WIP' | 'Done' | 'Review'; // Task Status
	priority: 'Low' | 'Medium' | 'High' | 'Critical'; // Priority Level
	longDescription: string; // Detailed explanation (not in the original table row, added field)
	cta: string; // Call to Action (not in the original table row, added field)
}

// JSON Mock Data

export const mockHVACData: HVACData[] = [
	{
		id: 'LIM 1234',
		type: 'Task',
		shortDescription: 'Maintenance Required',
		details:
			"Smoke Detection System hasn't been tested in 5 years. Please schedule a maintenance check with an Belimo authorized technician.",
		status: 'Todo',
		priority: 'High',
		longDescription:
			'As a technical representative of Belimo, I can confirm that the smoke detection system connected to LIM 1234 is overdue for its routine maintenance.  NFPA 72 guidelines recommend annual testing of smoke detectors.  Failure to perform regular maintenance can lead to reduced sensitivity, false alarms, or, most critically, failure to detect a fire.  This poses a significant safety risk to occupants.',
		cta: 'Please contact a Belimo authorized service provider immediately to schedule a comprehensive inspection and testing of your smoke detection system.  You can find a local provider on our website or by calling our support line.'
	},
	{
		id: 'LIM 1235',
		type: 'Alert',
		shortDescription: 'Valve Actuator Fault',
		details: 'Actuator on AHU-3 is reporting a stall condition.',
		status: 'WIP',
		priority: 'Critical',
		longDescription:
			'The Belimo actuator controlling the chilled water valve on Air Handling Unit 3 (AHU-3) is reporting a stall condition. This indicates a mechanical issue, potentially a jammed valve, obstruction, or actuator failure.  Continued operation in this state could lead to overheating, system inefficiency, and potential damage to the AHU or connected piping.  It also disrupts the temperature regulation for the zone served by AHU-3.',
		cta: 'Dispatch a technician to physically inspect the actuator and valve on AHU-3.  Check for obstructions, verify power supply, and attempt a manual override. If the issue persists, the actuator likely needs replacement. Contact Belimo support for expedited parts delivery.'
	},
	{
		id: 'LIM 1236',
		type: 'Notification',
		shortDescription: 'Filter Replacement Due',
		details: 'Air filters on RTU-1 are past their recommended replacement interval.',
		status: 'Todo',
		priority: 'Medium',
		longDescription:
			"The air filters on Rooftop Unit 1 (RTU-1) have exceeded their recommended operational lifespan.  Clogged filters reduce airflow, increase energy consumption, and negatively impact indoor air quality.  Prolonged operation with dirty filters can also strain the unit's fan motor, leading to premature failure.",
		cta: "Schedule a maintenance task to replace the air filters on RTU-1 with the correct size and MERV rating as specified in the unit's documentation.  Consider upgrading to higher-efficiency filters for improved air quality if appropriate."
	},
	{
		id: 'LIM 1237',
		type: 'Task',
		shortDescription: 'Sensor Calibration Needed',
		details: 'Temperature sensor in Zone 4 is reading 3 degrees higher than the setpoint.',
		status: 'Todo',
		priority: 'Medium',
		longDescription:
			'The temperature sensor in Zone 4 is consistently reporting a temperature 3 degrees Celsius higher than the desired setpoint. This indicates a calibration issue, leading to discomfort for occupants and unnecessary energy expenditure as the system attempts to over-cool the zone.  The sensor may require recalibration or replacement.',
		cta: 'Use a calibrated reference thermometer to verify the actual temperature in Zone 4.  If the discrepancy persists, attempt to recalibrate the sensor using the building management system (BMS) interface.  If recalibration fails, replace the sensor with a compatible Belimo model.'
	},
	{
		id: 'LIM 1238',
		type: 'Alert',
		shortDescription: 'Pressure Fluctuation',
		details: 'Unstable water pressure detected in the main supply line.',
		status: 'Review',
		priority: 'High',
		longDescription:
			'The system has detected significant fluctuations in the water pressure within the main supply line. This can be caused by issues with the main water pump, a closed or partially closed valve, or a leak in the system.  Unstable pressure can damage Belimo actuators and valves, leading to premature failure and system instability.',
		cta: 'Investigate the cause of the pressure fluctuations. Check the main water pump, inspect all valves for proper operation, and conduct a leak detection test on the main supply line. Contact a qualified plumber if necessary.'
	},
	{
		id: 'LIM 1239',
		type: 'Notification',
		shortDescription: 'Firmware Update Available',
		details: 'A new firmware version is available for the Belimo Energy Valve.',
		status: 'Todo',
		priority: 'Low',
		longDescription:
			'Belimo has released a new firmware version for the Energy Valve. This update includes performance improvements, enhanced security features, and bug fixes. While not critical, updating to the latest firmware is recommended to ensure optimal operation and long-term reliability.',
		cta: 'Schedule a maintenance window to update the firmware on the Belimo Energy Valve.  The update can be performed through the Belimo Assistant App or the building management system (BMS).  Refer to the Belimo documentation for detailed instructions.'
	},
	{
		id: 'LIM 1240',
		type: 'Task',
		shortDescription: 'Battery Backup Test',
		details: "The battery backup for the control system hasn't been tested recently.",
		status: 'Todo',
		priority: 'Medium',
		longDescription:
			'The battery backup system for the HVAC control system is overdue for its routine test.  A functional battery backup is essential to maintain critical system operations during power outages, preventing data loss and ensuring safe shutdown procedures.',
		cta: 'Schedule a test of the battery backup system.  This typically involves simulating a power outage and verifying that the control system remains operational for the expected duration. Replace the batteries if they fail the test or are nearing the end of their service life.'
	},
	{
		id: 'LIM 1241',
		type: 'Alert',
		shortDescription: 'Communication Loss',
		details: 'Communication lost with sensor network in Zone 7.',
		status: 'WIP',
		priority: 'Critical',
		longDescription:
			'The building management system (BMS) has lost communication with the sensor network in Zone 7. This means that temperature, humidity, and occupancy data from that zone are unavailable, preventing proper control of the HVAC system.  The cause could be a network outage, wiring fault, or sensor malfunction.',
		cta: 'Investigate the network connection to Zone 7. Check network switches, cabling, and power supplies.  If the network infrastructure is functioning correctly, inspect the sensors in Zone 7 for any signs of damage or malfunction.  Use diagnostic tools to pinpoint the source of the communication failure.'
	},
	{
		id: 'LIM 1242',
		type: 'Notification',
		shortDescription: 'Energy Consumption High',
		details: 'Zone 2 is consuming significantly more energy than expected.',
		status: 'Review',
		priority: 'Medium',
		longDescription:
			'Energy consumption in Zone 2 is abnormally high compared to historical data and similar zones. This could indicate a number of issues, including malfunctioning equipment, incorrect setpoints, air leaks, or occupancy patterns that are not being properly accounted for.',
		cta: 'Analyze the energy consumption data for Zone 2 to identify potential causes. Check for equipment malfunctions, review setpoints, inspect for air leaks, and assess occupancy patterns.  Consider implementing energy-saving measures, such as adjusting setpoints or optimizing schedules.'
	},
	{
		id: 'LIM 1243',
		type: 'Task',
		shortDescription: 'Actuator Range Check',
		details: 'Perform a range check on the newly installed actuator in AHU-5.',
		status: 'Todo',
		priority: 'Medium',
		longDescription:
			"A new Belimo actuator has been installed on Air Handling Unit 5 (AHU-5).  It's crucial to perform a full range check to ensure that the actuator is properly calibrated and can move the valve or damper through its entire operating range.  This prevents issues with airflow control and ensures optimal system performance.",
		cta: "Use the Belimo Assistant App or the building management system (BMS) to command the actuator to its minimum and maximum positions.  Visually verify that the valve or damper is moving fully and smoothly.  Adjust the actuator's end stops if necessary."
	},
	{
		id: 'LIM 1244',
		type: 'Alert',
		shortDescription: 'High Humidity Alert',
		details: 'Humidity levels in Zone 9 are exceeding the defined threshold.',
		status: 'WIP',
		priority: 'High',
		longDescription:
			'Humidity levels in Zone 9 are consistently above the defined threshold.  High humidity can lead to discomfort for occupants, promote mold growth, and potentially damage sensitive equipment. The cause could be a malfunctioning dehumidifier, insufficient ventilation, or a water leak.',
		cta: "Investigate the source of the high humidity in Zone 9. Check the dehumidifier for proper operation, ensure adequate ventilation, and inspect for any signs of water leaks.  Adjust the HVAC system's settings as needed to reduce humidity levels."
	},
	{
		id: 'LIM 1245',
		type: 'Notification',
		shortDescription: 'System Log Review',
		details: 'Review system logs for any recurring errors or warnings.',
		status: 'Todo',
		priority: 'Low',
		longDescription:
			'Regularly reviewing the HVAC system logs is a proactive maintenance practice.  Examining the logs can help identify recurring errors, warnings, or unusual events that may indicate underlying problems before they escalate into major issues. This preventative approach helps improve the reliability of your Belimo system',
		cta: 'Access the system logs through the building management system (BMS) or the Belimo device interfaces.  Review the logs for any recurring errors, warnings, or unusual events.  Investigate any identified issues and take corrective action as needed.'
	}
];
