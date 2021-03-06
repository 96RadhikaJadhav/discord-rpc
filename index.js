const RPC = require("discord-rpc");

const client = new RPC.Client({ transport: "ipc" });

client.on("ready", () => {
  client.request("SET_ACTIVITY", {
    pid: process.pid,
    activity: {
      assets: {
        large_image: "main",
        large_text: "It's Becca!",
      },
      details: "Come hang out?",
      timestamps: {
        start: Date.now(),
      },
      state: "I'm here!",
      buttons: [
        { label: "Website", url: "https://www.nhcarrigan.com" },
        {
          label: "Chat",
          url: "http://chat.nhcarrigan.com",
        },
      ],
    },
  });

  console.log("started!");
});

client.login({ clientId: "716707753090875473" });
