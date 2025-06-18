import Header from './component/Header';
import ChatBox from './component/ChatBox';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1">
        <ChatBox />
      </main>
    </div>
  );
}
