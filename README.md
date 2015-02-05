# PiStream
Setting up a chromecast clone on the raspberry pi

CONNECT

Plug in keyboard, mouse, display, ethernet
Plug in power

FIRST STEPS

sudo apt-get upgrade; 
sudo apt-get update

INSTALLING NODE

wget http://nodejs.org/dist/v0.10.2/node-v0.10.2-linux-arm-pi.tar.gz //downloads package
tar -xvzf node-v0.10.2-linux-arm-pi.tar.gz //unzips the package
node-v0.10.2-linux-arm-pi/bin/node --version //prints v0.10.2

// update your PATH
// add this line to ~/.profile

export PATH=$PATH:/home/pi/node-v0.10.2-linux-arm-pi/bin

SSH

//find the pi's ip address
ifconfig

//from the remote computer
ssh pi@10.0.1.43