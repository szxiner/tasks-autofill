// Function called when a new message is received
const messagesFromReactAppListener = (
   msg: any,
   sender: chrome.runtime.MessageSender,
   sendResponse: (response: any) => void) => {
 
//    const inputs = Array.from(document.getElementsByTagName("input"))
//                        .map(input => ({id: input.id, name: input.name, value: input.value}));
 
//     // Prepare the response object with information about the site
//    const response: any = {
//        inputs,
//    };
 
   sendResponse('HELLLLLLOOOOOOOO!!!');
}
 
/**
* Fired when a message is sent from either an extension process or a content script.
*/
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
