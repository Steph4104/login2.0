import React, { Component } from 'react'
import Link from './Link'

class Search extends Component {



  render() {
    return (
      <div>
        <div>
          Search
          <input
            type='text'
            onChange={(e) => this.setState({ searchText: e.target.value })}
          />
          <button
            onClick={() => this._executeSearch()}
          >
            OK
          </button>
        </div>
        {this.state.links.map((link, index) => <Link key={link.id} link={link} index={index}/>)}
      </div>
    )
  }

_executeSearch = async () => {
  const { searchText } = this.state
  const result = await this.props.client.query({

    variables: { searchText }
  })
  const links = result.data.allLinks
  this.setState({ links })
}

}



export default Search

