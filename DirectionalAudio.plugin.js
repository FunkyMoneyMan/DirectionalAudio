/**
 * @name DirectionalAudio
 * @author Funky
 * @authorLink https://github.com/FunkyMoneyMan
 * @description Add directional audio to other users while in discord calls.
 * @version 0.0.1
 */
var DEBUG = true;

module.exports = class MyPlugin {
    constructor(meta) {
      // Do stuff in here before starting
    }

    start() {
      //this.startObserving();
      this.test();
    }

    stop() {
        // Cleanup when disabled
        const elements = document.querySelectorAll(".DirectionalAudio");
        elements.forEach(element => {
          // You can perform actions on each individual element here
          // For example, you can call .remove() on each element
          element.remove();
        });
      
        //Bdapi.remove(element);
        BdApi.alert("Removing", "Remove");
        BdApi.clearCSS("DirectionalAudio");
        //this.stopObserving();
    }

    onSwitch() {
      this.cLog("STARTING");
      // Handle mutations here
      if (document.querySelector("#my-button") != null) { 
        this.cLog("Returned early. Buttonexists is true")
        return;
      }
          // Handle child list changes
          this.cLog('Element children changed!');
          const hangupButton = document.getElementsByClassName("buttonContainer-1sjtPU")[0];
          this.cLog("Value of hangup button: " + hangupButton);
          if (hangupButton != null) {
            this.cLog("CREATING BUTTON!");
            this.createButton();
          }
          // Call your functions here
        
      
      this.cLog("ENDING");
    }

    createButton() {
        const myButton = document.createElement("button");
        myButton.id = "my-button";
        myButton.setAttributeNS(null, "type", "button");
        myButton.classList.add("controlButton-2PMNom", "centerButton-1IShs7", "colorable-3rVGna", "primaryDark-2UJt1G", "button-ejjZWC", "lookBlank-FgPMy6", "colorBrand-2M3O3N");

        const audioButton = document.createElement("audio");
        audioButton.id = "customAudio";
        audioButton.src = "https://docs.google.com/uc?export=open&id=11EG3Kat1oK-vBYU5VMrOMFWXB0wL76RF";

        myButton.appendChild(audioButton);

        // Create div
        const div = document.createElement("div");
        div.classList.add("contents-3NembX", "lineHeightReset-1WxXXk");
        myButton.appendChild(div);

        const myImg = document.createElement("img");
        myImg.src = "https://i.gyazo.com/c4d8438ae6903a1897f3fafa0b017805.png";
        myImg.width = 24;
        myImg.height = 24;
        div.appendChild(myImg);

        BdApi.UI.createTooltip(myButton, "Edit Spacial", {side:"top"});

        const serverList = document.querySelector(".wrapper-3t3Yqv");
        serverList.append(myButton);

        //const testSound = new Audio("https://docs.google.com/uc?export=open&id=11EG3Kat1oK-vBYU5VMrOMFWXB0wL76RF");
        //testSound.play();



        //const audioContext = new AudioContext();
//
        //const bob = AudioConvert.amplitutude();
//
        //const audioUrl = "https://docs.google.com/uc?export=open&id=11EG3Kat1oK-vBYU5VMrOMFWXB0wL76RF";
        //var track;
        //fetch(audioUrl)
        //.then((response) => response.arrayBuffer())
        //.then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
        //.then((decodedData) => {
        //  const testSound = new Audio(audioUrl);
        //
        //  //const sourceNode = audioContext.createBufferSource();
        //  //sourceNode.buffer = decodedData;
        //
        //  track = audioContext.createMediaStreamSource(testSound.captureStream());
        //
        //  // Start playing the audio
        //  testSound.play();
        //})
        //.catch((error) => {
        //  console.error("Error fetching or decoding audio:", error);
        //});

        // get the audio element
        //const audioElement = document.querySelector("#customAudio");

        // pass it into the audio context
        //const track = audioContext.createMediaElementSource(audioElement);

        //const gainNode = audioContext.createGain();
//
        //const pannerOptions = { pan: 0 };
        //const panner = new StereoPannerNode(audioContext, pannerOptions);
//
        //track.connect(gainNode).connect(panner).connect(audioContext.destination);
//
        //const playButton = document.querySelector("#my-button");
//
        //playButton.dataset.playing = false;


        //Song has ended
        //audioElement.addEventListener(
        //  "ended",
        //  () => {
        //    playButton.dataset.playing = "false";
        //  },
        //  false
        //);





        myButton.addEventListener("click", () => {
          BdApi.UI.showConfirmationModal("Spacial Editor", "Playing: ");
          // Check if context is in suspended state (autoplay policy)
          },
        false
        );











        BdApi.injectCSS("DirectionalAudio", `#my-button {
            width: 56px;
            height: 56px;
            margin-inline: 8px;
        }`);

        BdApi.onRemoved(myButton, () => {
          this.cLog("Button is getting removed");
          BUTTONEXISTS = false;
      });
    }

    cLog(str) {
      if (DEBUG) console.log("DirectionalAudio: " + str);
    }

    test() {
      const MediaEngineActions = BdApi.Webpack.getModule("ActionModule");
      BdApi.Webpack.Filters.byProps(MediaEngineActions, null);
      //this.cLog(MediaEngineActions);
      //MediaEngineActions.toggleLocalMute(230442068915388416);
      //BdApi.Webpack.Filters.byProps();
    }
  };