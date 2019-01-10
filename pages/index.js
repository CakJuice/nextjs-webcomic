import axios from 'axios'

const Index = (props) => (
  <div>
    <h1 className="title">Homepage</h1>
    <h1>Batman TV Shows</h1>
    <ul>
      {
        props.shows.map(({show}) => (
          <li key={show.id}>
            {show.name}
          </li>
        ))
      }
    </ul>
  </div>
)

Index.getInitialProps = async function() {
  const response = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
  return {
    shows: await response.data
  }
}

export default Index