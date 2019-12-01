# **Front End documentations:**

**Target OS: Android**

## **Installing dependencies**

You will need Node, the React Native command line interface, Python2, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

### **Node, Python2, JDK**

React Native also requires a recent version of the [Java SE Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html), as well as Python 2. Both can be installed using Chocolatey.

Open an Administrator Command Prompt (right click Command Prompt and select &quot;Run as Administrator&quot;), then run the following command:

``` choco install -y nodejs.install python2 jdk8```

### **Android development environment:**

#### 1. **Install Android Studio**

[Download and install Android Studio](https://developer.android.com/studio/index.html). Choose a &quot;Custom&quot; setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:

- Android SDK
- Android SDK Platform
- Performance (Intel ® HAXM) ([See here for AMD](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html))
- Android Virtual Device

Then, click &quot;Next&quot; to install all of these components.

#### 2. Install the Android SDK

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 9 (Pie) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

Select the &quot;SDK Platforms&quot; tab from within the SDK Manager, then check the box next to &quot;Show Package Details&quot; in the bottom right corner. Look for and expand the Android 9 (Pie) entry, then make sure the following items are checked:

- Android SDK Platform 28
- Intel x86 Atom\_64 System Image or Google APIs Intel x86 Atom System Image

Next, select the &quot;SDK Tools&quot; tab and check the box next to &quot;Show Package Details&quot; here as well. Look for and expand the &quot;Android SDK Build-Tools&quot; entry, then make sure that 28.0.3 is selected.

Finally, click &quot;Apply&quot; to download and install the Android SDK and related build tools.

#### 3. Configure the ANDROID\_HOME environment variable

The React Native tools require some environment variables to be set up in order to build apps with native code.

Open the System pane under **System and Security** in the Windows Control Panel, then click on **Change settings...**. Open the **Advanced** tab and click on **Environment Variables...**. Click on **New...** to create a new ANDROID\_HOME user variable that points to the path to your Android SDK:

 

The SDK is installed, by default, at the following location:

c:\Users\YOUR\_USERNAME\AppData\Local\Android\Sdk

You can find the actual location of the SDK in the Android Studio &quot;Preferences&quot; dialog, under **Appearance &amp; Behavior** → **System Settings** → **Android SDK**.

#### 4. Add platform-tools to Path

Open the System pane under **System and Security** in the Windows Control Panel, then click on **Change settings...**. Open the **Advanced** tab and click on **Environment Variables...**. Select the **Path** variable, then click **Edit**. Click **New** and add the path to platform-tools to the list.

# Running UniEats Code :

- Download and unzip the code repository.
- Navigate to UniEats\_FE
- Run the following commands in the command line .

```npm install```

```React-native run-android```

### Using a virtual device

If you are using Android Studio to open ./UniEats\_FE/android, you can see the list of available Android Virtual Devices (AVDs) by opening the &quot;AVD Manager&quot; from within Android Studio. 
If you have recently installed Android Studio, you will likely need to [create a new AVD](https://developer.android.com/studio/run/managing-avds.html). Select &quot;Create Virtual Device...&quot;, then pick any Phone from the list and click &quot;Next&quot;, then select the **Pie** API Level 28 image.

Click &quot;Next&quot; then &quot;Finish&quot; to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it, then proceed to the next step.

Connection with the Server

- If at all the services are being re-deployed by you, please change the API endpoints in the following file.
--  \UniEats\_FE\app\library\services\api.js
