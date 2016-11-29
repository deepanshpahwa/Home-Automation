# Home-Automation
This is a guide on how to automate a couple of things around you(lights, lamps etc.) 

Hardware required: Raspberry pi Relay( Number of channels depends on you) Jumper cables (female to female) SD card (for your Raspberry Pi)

Note: I have a mac so I'll be guiding you using that, you can find help online if you have a PC.

**Step 1:** Setup

Download Raspbian on your sd card and plug it in your raspberry pi. If you dont know how to do that, here is a good tutorial: https://medium.com/a-swift-misadventure/setup-your-raspberry-pi-2-3-with-raspbian-headless-without-cables-c78309fd7045#.of4kc99qq
1. Start by downloading Raspbian with PIXEL: https://www.raspberrypi.org/downloads/raspbian/
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

##Step 4: let me get back to you guys on this one##
 Installing node on RPi
