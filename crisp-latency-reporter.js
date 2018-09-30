var CrispStatusReporter = require("crisp-status-reporter").CrispStatusReporter;

var crispStatusReporter = new CrispStatusReporter({
  token      : "726ece5b-e2a4-484f-bd2d-b7b451b6aa86",  // Your reporter token (given by Crisp)
  service_id : "3e807dd1-dc2b-4ad0-a850-11e5a86d5031",    // Service ID containing the parent Node for Replica (given by Crisp)
  node_id    : "42224317-cd84-40ac-ae37-da9e45a8ffe1",       // Node ID containing Replica (given by Crisp)
  replica_id : "192.168.1.10",       // Unique Replica ID for instance (ie. your IP on the LAN)
  interval   : 30,                   // Reporting interval (in seconds; defaults to 30 seconds if not set)
  console    : require("console")    // Console instance if you need to debug issues
});
