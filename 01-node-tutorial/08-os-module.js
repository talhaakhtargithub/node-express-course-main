const os = require('os');

try {
    // Get information about the current user
    const user = os.userInfo();
    console.log('User Info:', user);

    // Get the system uptime in seconds
    console.log('System Uptime:', os.uptime(), 'seconds');

    // Get the operating system name
    console.log('Operating System:', os.type());

    // Get the operating system release version
    console.log('Release Version:', os.release());

    // Get the total memory available in bytes
    console.log('Total Memory:', os.totalmem(), 'bytes');

    // Get the free memory available in bytes
    console.log('Free Memory:', os.freemem(), 'bytes');

    // Get information about the CPU(s) installed on the system
    console.log('CPU Info:', os.cpus());

    // Get information about the network interfaces
    console.log('Network Interfaces:', os.networkInterfaces());

    // Get the hostname of the operating system
    console.log('Hostname:', os.hostname());

    // Get the operating system platform
    console.log('Platform:', os.platform());

    // Get the CPU architecture
    console.log('CPU Architecture:', os.arch());

    // Get the load averages
    console.log('Load Average:', os.loadavg());

    // Get the default directory for temporary files
    console.log('Temporary Directory:', os.tmpdir());

    // Get the home directory of the current user
    console.log('Home Directory:', os.homedir());

    // Get the endianness of the CPU
    console.log('Endianness:', os.endianness());
} catch (error) {
    console.error('Error occurred:', error);
}
