import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friends/FriendList';
import TransactionHistory from './components/Transactions/TransactionHistory';

import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

const { username, tag, location, avatar, stats } = user;

function App() {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics information={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}

export default App;
