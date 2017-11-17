[Rasberry Pi Static IP](https://www.modmypi.com/blog/how-to-give-your-raspberry-pi-a-static-ip-address-update)

1. `sudo nano /etc/dhcpcd.conf`
2. add the following line to the button
```
interface eth0

static ip_address=192.168.0.10/24
static routers=192.168.0.1
static domain_name_servers=192.168.0.1

interface wlan0

static ip_address=192.168.0.200/24
static routers=192.168.0.1
static domain_name_servers=192.168.0.1
```
3. press ctrl+x

4. press Y to save

5. reboot

6. check by running `ifconfig`