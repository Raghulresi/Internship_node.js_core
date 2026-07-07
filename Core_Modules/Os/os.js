const os = require("os");
console.log("OS Module Imported");
console.log(os.arch()); //returns the CPU architecture of the operating system.
console.log(os.platform()); //returns the operating system platform.
console.log(os.type()); //returns the name of the operating system
console.log(os.release()); //returns the operating system version.
console.log(os.version()); //returns the kernel version of the operating system.
console.log(os.userInfo()); //returns information about the current user.
console.log(os.homedir()); //returns the home directory of the current user.
console.log(os.hostname()); //returns the hostname of the computer.
console.log(os.tmpdir()); //returns the temporary directory of the operating system.
console.log(os.cpus().length); //returns information about all CPU cores.
console.log(os.totalmem()); //returns the total memory available in the system.
console.log(os.freemem()); //returns the available free memory in the system.
console.log(os.uptime()); //returns the time for which the system has been running.
console.log(os.networkInterfaces()); //returns network information of the system.
console.log(JSON.stringify(os.EOL)); // returns the end-of-line character used by the operating system.