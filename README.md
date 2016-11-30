# Home-Automation
This is a guide on how to automate a couple of things around you(lights, lamps etc.) 

Hardware required: Raspberry pi Relay( Number of channels depends on you) Jumper cables (female to female) SD card (for your Raspberry Pi)

Note: I have a mac so I'll be guiding you using that, you can find help online if you have a PC.

##**Step 1:** Setup##
1. Start by downloading Raspbian with PIXEL from here https://www.raspberrypi.org/downloads/raspbian/
2. Download Etcher (https://www.etcher.io) 
3. Open Etcher and flash the raspbian image you downloaded into your sd card.
4. Put your SD card in your raspberry pi. (Note: Make sure its not already switched on)

**NOTE:** There are 2 ways to move forward. One way is to connect a monitor (using hdmi), keyboard and mouse (using USB). In that case you can skip Step 2. On the other hand if you don't have a monitor and a keyboard, go ahead and read step 2 for wireless/ headless setup.
**NOTE:**If you plan to keep your RPi connected to the network via the ethernet, you can skip step 3 also.


##**Step 2:** Headless (Wireless) Setup##
1. Connect your RPi to the router using an ethernet cable. 
2. Now you'll have to figure out the IP address of the RPi. To do this, download IP Scanner from the app store for apple mac/iphone **or** download FING from playstore for android. 
3. Open the application and you'll see the RPi connected to your network with the name RaspberryPi. Not down the IP address.
4. Open terminal(or bash) and type ssh@192.168.##.### , replace the "#" with the address of your numbers. It will prompt you for a password, the default password is: "raspberry".

##**Step 3:** Connecting to the wifi##
**NOTE:** If you have Raspberry Pi 2, you want to plug in the wireless dongle now.
5. Then, while connected to the RPi, enter "sudo nano /etc/wpa_supplicant/wpa_supplicant.conf". This will open the network configuration file. Browse down to the end of the file and add your network information:
'''
network={
    ssid="your-network-ssid-name"
    psk="your-network-password"
}
'''
6. Remove the ethernet cable, and reboot your RPi. It should be now connected to the Wifi.

**Side note:**If you want to operate the RPi using the interface without monitor, keybaord and mouse you can install VNC. Follow this tutorial [here](https://www.youtube.com/watch?v=c5QCoh8S0N4&t=121s).

We've now setup the OS on the raspberry pi. 
We are going to install node

##Step 4: Installing node on RPi##
1. The first step will be to add the apt.adafruit.com package repository to your Pi's /etc/apt/sources.list file. You can do this by running the following command.
```
curl -sLS https://apt.adafruit.com/add | sudo bash
```
2. Next, we will install the latest version of node.js using apt-get.
```
sudo apt-get install node
```
3.If everything went as expected, we can check the installed version of node.js by running "node -v". it should return something like : 
```
v0.12.0
```
4. You also need to install a GPIO module from the [npmjs website](https://www.npmjs.com/package/rpi-gpio).
```npm install rpi-gpio
```

Now to install the appropriate files, open the directory where you want the server files to be installed. If you are new to all this, stick to desktop. Open terminal and clone my git repo.
```
git clone https://github.com/deepanshpahwa/Home-Automation
```

##Step 5: Setting up the relay.##
If you don't know what a relay is, you should google it and undersand the basic idea. It is basically just a switch which will get switched on whenever the pin ints connected to on RPI will get power. 
![Raspberry Pi 3 GPIO layout](https://www.element14.com/community/servlet/JiveServlet/previewBody/73950-102-10-339300/pi3_gpio.png)
![4-channel Relay image](http://img.banggood.com/images/upload/2012/sku090677g.JPG)
 Take female to female jumper cables and connect like so:
    - from GND on relay to GND on RPi.
    - from IN1 on relay to pin#3(GPIO2) on RPi.
    - from VCC on relay to pin#2 on RPi. (This is to power your relay, if you have external power source for yur relay, skip this.)
**NOTE:** If you want to change the pin number you can do so by opening the server.js file with text editor and changing the pin number. Keep in mind that we are talking about the pin number and the GPIO number.

Now connect whatever appliance you want to the relay.

##Step 6: Starting the node server ##
Now, cd into the the Home-Automation directory and start the node server.
```sudo node server.js
```
As of now, all the devices connected to the same wifi as RPi can send a signal and turn the appliance on or off.
To do this open the browser on a device and type "http://<pi ip address>:2368/lights?state=1" so if my ip address is 192.168.1.35, I'll enter http://192.168.1.35:2368/lights?state=1 . Changing the state from 1 to 0 will switch it on or off. You should hear a click on your relay.


 
