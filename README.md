# Pi Hub
INSTALLING OS IMAGE

# Download Raspbian
// http://www.raspberrypi.org/downloads/

# Format SD card
Download raspbian (OS) image
// http://www.raspberrypi.org/documentation/installation/installing-images/mac.md

# copy image onto SD card
diskutil list
diskutil unmountDisk /dev/<disk# from diskutil>
sudo dd bs=1m if=2014-09-09-wheezy-raspbian.img of=/dev/<disk# from diskutil>

// now you are ready to boot up!


# CONNECT

Plug in keyboard, mouse, display, ethernet
Plug in power


# UPDATE OS

sudo apt-get upgrade;
sudo apt-get update


# INSTALLING NODE

wget http://nodejs.org/dist/v0.10.2/node-v0.10.2-linux-arm-pi.tar.gz //downloads package
tar -xvzf node-v0.10.2-linux-arm-pi.tar.gz //unzips the package
node-v0.10.2-linux-arm-pi/bin/node --version //prints v0.10.2

// update your PATH
// add this line to ~/.profile

nano ~/.profile
export PATH=$PATH:/home/pi/node-v0.10.2-linux-arm-pi/bin

// now you can run node!

# SSH

//find the pi's ip address
ifconfig

//from the remote computer
ssh pi@10.0.1.43


# PISTREAM MVP
open websocket between node-server on pi and remote computer ( same network for MVP )
submit shell commands from client, execute shell command on pi

10.0.1.43:8000

# OTHER HELPFUL COMMANDS

# check disk space
df -Bm
