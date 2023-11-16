
# Meetup

A web application that leverages pure WebRTC protocal, Google Firestore as a signaling server, and Chromium Tab sharing protocal to allow screen sharing with audio, which enable the ability for folks to catch up and enjoy music and videos together despite the distance.

  <a href="https://meetup-with-you.web.app/" target="_blank">Application</a>   

# Motivation
The motivation is to help people network and communicate in an efficient manner.

# Features
- Sharing screen with audio using Chromium-based browsers.     
<img width="600" src="showcase/chromium_share.png" />     

- Enjoy video at 60fps along with high quality audio.   
- Live Video Chat between parties.     
- Audio Only Chat betwen parties.       


# To Run this Locally

- use "npm install" in project directory
- Setup Firebase in Shared / Index.ts file
- then hit "npm start"


# Instruction
1. The flow is relatively straighforward. One user can create the call by clicking *Create Call*, then proceed to share the Call ID by clicking on the Location pin, which will copy the ID to their clipboard. 
2. The other users can join the call by entering the Call ID and hit *Join Call*
3. And that's it, share your tab and enjoy the show

# Limitation
This project is built using pure WebRTC with no forwarding server in the middle, so as users per room cross the threshold of 3 people, the stream's quality will start to decline.

# Future goals
Add a forwarding server using technologies such as `mediasoup` to host bigger rooms
