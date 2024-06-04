import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
    const { messages, loading } = useGetMessages();
    return (
        <div className='px-4 flex-1 overflow-auto'>
            {!loading &&
                messages.length > 0 &&
                messages.map((message) => (
                    <div key={message._id}>
                        <Message message={message} />
                    </div>
                ))}
            {loading && <> <MessageSkeleton />
                <MessageSkeleton />
                <MessageSkeleton/>
            </>}
            {!loading && messages.length === 0 && (
                <p className='text-center text-white'>Send a message to start the conversation</p>
            )}
        </div>
    )
}

export default Messages;