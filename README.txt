INSTRUCTIONS
How to Open the app using Android Studio

Setting up Node.js and Android Studio
-----------------------------------------------------------------------
Firstly, if Node.js hasn't been installed the best version to get is 14.17.4.
If a newer version has already been installed it's recommended to reinstall the
app with the listed version above as the older version supports all of android studio's features.

[Windows and Linux ONLY] https://nodejs.org/download/release/v14.17.4/
[Mac - LATEST RELEASE] https://nodejs.org/en/download/

Secondly, if Android studio (A.S.) hasn't been installed any version is accepted, however
version 2020.3.1 is recommended for the best experience as the release dates between
Node.js 14.17.4 and A.S. are closer.
https://developer.android.com/studio/archive

NOTE:
Linux users will need to install the .ZIP file as there currently is no installer for Linux

Before the list of installs appear, there is a prompt to accept the terms and conditions.
After they have been accepted find the version that lists:
Android Studio Arctic Fox (2020.3.1) Patch 4

NOTE:
Upon set-up, Android Studio will ask to install the necessary SDK components.
- Proceed through 'NEXT' until 'FINISH' appears.
- Select 'FINISH'.
-----------------------------------------------------------------------

Setting up a virtual device
-----------------------------------------------------------------------
After installation, Android Studio will open its homepage:
- select 'more actions' below the three main options on the screen
- select 'AVD Manager' (2020.3.1) or 'Virtual Device Manager' (Newer Versions)
- select 'Create Virtual Device'
- choose a device (The project was constructed on 'PIXEL 5' under 'Phone')
- select 'NEXT' and proceed to download the version at the top (usually 'R' for final release)
- accept the terms and conditions and proceed with 'NEXT' and 'FINISH'
(alternatively stop at 'Verify Configuration' to add a device name and a device orientation)
- once finished, select the play icon under 'Actions' and start the virtual device
-----------------------------------------------------------------------

Once all of the above applications have been installed successfully
and a virtual device has been created and is currently running:

- open the project folder
- copy the path from the address bar
- run the command prompt and type 'cd' (adding a space after the word)
- paste the address in the command prompt.
- type 'npm start'
- type 'a' to open the project in the emulator

and that's it!
-----------------------------------------------------------------------

_______________________________________________________________________
References:
Niraj Dhungana (Full Stack Niraj). (2021, August 8). Install Android Emulator for React Native Expo - Windows PC.
Retrieved March 31, 2022, from You-tube:
https://www.youtube.com/watch?v=ZGIU5aIRi9M&lc=Ugw1AEoSEihjUPZF6KV4AaABAg.9ZMPm6EUbd_9ZQBOCWdLjP

React Native. (Updated 2022, March 30). Setting up the development environment.
Retrieved March 31, 2022, from React Native:
https://reactnative.dev/docs/environment-setup
