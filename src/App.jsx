import FriendList from "./components/FriendList/FriendList"
import Statistics from "./components/Statistics/Statistics"
import friends from "../friend.json"
import data from "../data.json"

function App() {

  return (
    <>
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

    </>
  )
}

export default App
