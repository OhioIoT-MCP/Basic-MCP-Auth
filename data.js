

const devices = [
    { deviceId: 'oh-akr-001', name: 'Akron Pump House A',      type: 'flow-meter',   site: 'Akron, OH',      status: 'online',     firmware: '2.4.1', installedOn: '2024-03-12', lastSeen: '2026-09-07T18:42:00Z' },
    { deviceId: 'oh-akr-002', name: 'Akron Pump House B',      type: 'flow-meter',   site: 'Akron, OH',      status: 'online',     firmware: '2.4.1', installedOn: '2024-03-12', lastSeen: '2026-09-07T18:41:30Z' },
    { deviceId: 'oh-clv-010', name: 'Cleveland Cold Store 1',  type: 'thermostat',   site: 'Cleveland, OH',  status: 'degraded',   firmware: '1.9.7', installedOn: '2023-11-04', lastSeen: '2026-09-07T18:12:05Z' },
    { deviceId: 'oh-clv-011', name: 'Cleveland Dock Sensor',   type: 'door-contact', site: 'Cleveland, OH',  status: 'online',     firmware: '1.9.7', installedOn: '2023-11-04', lastSeen: '2026-09-07T18:44:10Z' },
    { deviceId: 'oh-col-020', name: 'Columbus Line 3 Motor',   type: 'vibration',    site: 'Columbus, OH',   status: 'online',     firmware: '3.0.0', installedOn: '2025-06-21', lastSeen: '2026-09-07T18:43:55Z' },
    { deviceId: 'oh-day-030', name: 'Dayton Roof Weather',     type: 'weather',      site: 'Dayton, OH',     status: 'offline',    firmware: '2.2.0', installedOn: '2022-08-30', lastSeen: '2026-09-05T03:17:44Z' },
    { deviceId: 'oh-tol-040', name: 'Toledo Tank Level',       type: 'ultrasonic',   site: 'Toledo, OH',     status: 'online',     firmware: '2.4.0', installedOn: '2025-01-15', lastSeen: '2026-09-07T18:40:00Z' },
    { deviceId: 'oh-cin-050', name: 'Cincinnati Substation',   type: 'power-meter',  site: 'Cincinnati, OH', status: 'maintenance', firmware: '2.4.1', installedOn: '2024-09-09', lastSeen: '2026-09-07T16:00:00Z' }
];


const data = [
    { readingId: 'r-1001', deviceId: 'oh-akr-001', metric: 'flow_rate',    value: 412.6, unit: 'L/min', recordedAt: '2026-09-07T18:00:00Z', quality: 'good' },
    { readingId: 'r-1002', deviceId: 'oh-akr-001', metric: 'flow_rate',    value: 408.1, unit: 'L/min', recordedAt: '2026-09-07T18:15:00Z', quality: 'good' },
    { readingId: 'r-1003', deviceId: 'oh-akr-001', metric: 'flow_rate',    value: 0.0,   unit: 'L/min', recordedAt: '2026-09-07T18:30:00Z', quality: 'suspect' },
    { readingId: 'r-1004', deviceId: 'oh-akr-002', metric: 'flow_rate',    value: 397.4, unit: 'L/min', recordedAt: '2026-09-07T18:30:00Z', quality: 'good' },
    { readingId: 'r-1005', deviceId: 'oh-clv-010', metric: 'temperature',  value: -18.2, unit: 'C',     recordedAt: '2026-09-07T18:00:00Z', quality: 'good' },
    { readingId: 'r-1006', deviceId: 'oh-clv-010', metric: 'temperature',  value: -14.9, unit: 'C',     recordedAt: '2026-09-07T18:15:00Z', quality: 'good' },
    { readingId: 'r-1007', deviceId: 'oh-clv-010', metric: 'temperature',  value: -11.3, unit: 'C',     recordedAt: '2026-09-07T18:30:00Z', quality: 'good' },
    { readingId: 'r-1008', deviceId: 'oh-clv-011', metric: 'door_open',    value: 1,     unit: 'bool',  recordedAt: '2026-09-07T18:22:00Z', quality: 'good' },
    { readingId: 'r-1009', deviceId: 'oh-clv-011', metric: 'door_open',    value: 0,     unit: 'bool',  recordedAt: '2026-09-07T18:37:00Z', quality: 'good' },
    { readingId: 'r-1010', deviceId: 'oh-col-020', metric: 'vibration_rms', value: 2.14, unit: 'mm/s',  recordedAt: '2026-09-07T18:00:00Z', quality: 'good' },
    { readingId: 'r-1011', deviceId: 'oh-col-020', metric: 'vibration_rms', value: 3.86, unit: 'mm/s',  recordedAt: '2026-09-07T18:20:00Z', quality: 'good' },
    { readingId: 'r-1012', deviceId: 'oh-col-020', metric: 'vibration_rms', value: 6.02, unit: 'mm/s',  recordedAt: '2026-09-07T18:40:00Z', quality: 'good' },
    { readingId: 'r-1013', deviceId: 'oh-day-030', metric: 'temperature',  value: 21.7,  unit: 'C',     recordedAt: '2026-09-05T03:00:00Z', quality: 'good' },
    { readingId: 'r-1014', deviceId: 'oh-day-030', metric: 'wind_speed',   value: 14.3,  unit: 'km/h',  recordedAt: '2026-09-05T03:00:00Z', quality: 'good' },
    { readingId: 'r-1015', deviceId: 'oh-tol-040', metric: 'tank_level',   value: 68.5,  unit: '%',     recordedAt: '2026-09-07T18:00:00Z', quality: 'good' },
    { readingId: 'r-1016', deviceId: 'oh-tol-040', metric: 'tank_level',   value: 61.2,  unit: '%',     recordedAt: '2026-09-07T18:30:00Z', quality: 'good' },
    { readingId: 'r-1017', deviceId: 'oh-cin-050', metric: 'power_draw',   value: 118.4, unit: 'kW',    recordedAt: '2026-09-07T15:45:00Z', quality: 'good' },
    { readingId: 'r-1018', deviceId: 'oh-cin-050', metric: 'power_draw',   value: 0.0,   unit: 'kW',    recordedAt: '2026-09-07T16:00:00Z', quality: 'stale' }
];


const messages = [
    { messageId: 'm-5001', deviceId: 'oh-clv-010', level: 'warning',  code: 'TEMP_RISING',      text: 'Cold store temperature rose 6.9 C in 30 minutes.',      sentAt: '2026-09-07T18:31:00Z', acknowledged: false },
    { messageId: 'm-5002', deviceId: 'oh-clv-011', level: 'info',     code: 'DOOR_OPEN',        text: 'Dock door opened.',                                     sentAt: '2026-09-07T18:22:00Z', acknowledged: true  },
    { messageId: 'm-5003', deviceId: 'oh-clv-011', level: 'info',     code: 'DOOR_CLOSED',      text: 'Dock door closed after 15 minutes.',                    sentAt: '2026-09-07T18:37:00Z', acknowledged: true  },
    { messageId: 'm-5004', deviceId: 'oh-col-020', level: 'critical', code: 'VIBRATION_HIGH',   text: 'Line 3 motor vibration above 5.0 mm/s threshold.',      sentAt: '2026-09-07T18:40:30Z', acknowledged: false },
    { messageId: 'm-5005', deviceId: 'oh-day-030', level: 'critical', code: 'HEARTBEAT_LOST',   text: 'No heartbeat received for 63 hours.',                   sentAt: '2026-09-05T04:20:00Z', acknowledged: false },
    { messageId: 'm-5006', deviceId: 'oh-akr-001', level: 'warning',  code: 'FLOW_ZERO',        text: 'Flow rate dropped to zero while pump reports running.', sentAt: '2026-09-07T18:30:45Z', acknowledged: false },
    { messageId: 'm-5007', deviceId: 'oh-tol-040', level: 'info',     code: 'LEVEL_FALLING',    text: 'Tank level down 7.3% in 30 minutes.',                   sentAt: '2026-09-07T18:30:10Z', acknowledged: true  },
    { messageId: 'm-5008', deviceId: 'oh-cin-050', level: 'info',     code: 'MAINTENANCE_MODE', text: 'Substation placed in maintenance mode by operator.',    sentAt: '2026-09-07T16:00:00Z', acknowledged: true  },
    { messageId: 'm-5009', deviceId: 'oh-akr-002', level: 'info',     code: 'FIRMWARE_OK',      text: 'Firmware 2.4.1 verified after restart.',                sentAt: '2026-09-07T06:12:00Z', acknowledged: true  }
];


module.exports = { data, devices, messages };