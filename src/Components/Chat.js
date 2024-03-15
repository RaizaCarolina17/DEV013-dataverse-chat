//import data from '../data/dataset.js';

export const chatContainer = () => {

  /// Create elements for the chat container
  const divChat = document.createElement("div");
  const sectionChat = document.createElement("sectionChat");

  // Create elements for the chat input section
  const sectionPrompt = document.createElement("section");
  const textAreaChat = document.createElement("textarea");
  const inputPrompt = document.createElement("input");
  const buttonSendChat = document.createElement("button");

  // Create elements for the writer ID section
  const writerId = document.createElement("section");
  const imgCredential = document.createElement("img");
  const idCredential = document.createElement("h2");

  // Set classes for the elements
  divChat.className = "div-chat";
  sectionChat.className = "section-chat";
  sectionPrompt.className = "section-prompt";
  textAreaChat.className = "text-area-chat";
  inputPrompt.className = "input-prompt";
  buttonSendChat.className = "button-send-chat";
  writerId.className = "writer-id";
  imgCredential.className = "img-credential";
  idCredential.className = "id-credential";

  // Append elements to respective parent containers
  divChat.appendChild("sectionPromp");
  divChat.appendChild("sectionChat");
  
  writerId.appendChild(imgCredential);
  writerId.appendChild(idCredential);

  sectionPrompt.appendChild(textAreaChat);
  sectionPrompt.appendChild(inputPrompt);
  sectionPrompt.appendChild(buttonSendChat);

  divChat.appendChild(sectionChat);
  divChat.appendChild(sectionPrompt);
  divChat.appendChild(writerId);

  return divChat;
};


