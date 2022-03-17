import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

export default function App() {
  const cards = data.map(item =>
      <Card 
        items={item}
      />
    )
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  )
}