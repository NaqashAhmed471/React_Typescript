type GreetProps = {
    name : string,
    messageCount?: number,
    isLoggedIn: Boolean
}

export const Greet = ({name,messageCount=0,isLoggedIn } : GreetProps) => {
    
  return (
    <div>
        <h2>
            {isLoggedIn ? `Hello ${name}! You have ${messageCount} unread messages` : "Welcome Guest" }
        </h2>
    </div>
  )
}
