import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/notification.wav"

function useListenMessages() {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        })
        // Cleaning Up: The socket?.off("newMessage") method removes the event listener when the component unmounts or the dependencies change, preventing memory leaks and duplicate listeners.
        return () => socket?.off("newMessage")
    },[socket, setMessages, messages])
}

export default useListenMessages


