import "./Input.css"
import Image from '../image/Image';

import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: '',
      price: '',
      stall: '',
      city: ''
    }
  }

  // handleImageChange = (event) => {
  //   this.setState({
  //     image: event.target.value
  //   })
  // }

  handlePriceChange = (event) => {
    this.setState({
      price: event.target.value
    })
  }

  handleStallChange = (event) => {
    this.setState({
      stall: event.target.value
    })
  }

  handleCityChange = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  handleSubmit = event => {
    alert(`${this.state.price} ${this.state.stall} ${this.state.city} Has been submitted`)
    event.preventDefault()
  }

  render() {
    const { image, price, stall, city } = this.state
    return (
      <form onSubmit={this.handleSubmit} action="https://zachmann00.wixsite.com/peddlersmall">
        <div className="field">
          {/* <div className="imgbox">
            <input
              accept="image/*"
              type="file"
              id="imginput"
              capture="environment"
              value={image}
              onChange={this.handleImageChange}
            />
          </div> */}
          <label>
          < Image />
          </label>
          <div className="inputs">
            <input
              type="text"
              value={price}
              onChange={this.handlePriceChange}
              placeholder="Price"
            />
            <h3>Price</h3>
            <input
              type="text"
              value={stall}
              onChange={this.handleStallChange}
              placeholder="Stall Number"
            />
            <h3>Stall Number</h3>
            <select
              className="drop"
              value={city}
              onChange={this.handleCityChange}
            >
              <option value="All Stores">All Stores</option>
              <option value="Bardstown">Bardstown</option>
              <option value="Campbellsville">Campbellsville</option>
              <option value="Clarksville">Clarksville</option>
              <option value="Elizabethtown">Elizabethtown</option>
              <option value="Frankfort">Frankfort</option>
              <option value="Georgetown">Georgetown</option>
              <option value="Hillview">Hillview</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lexington">Lexington</option>
              <option value="Middletown">Middletown</option>
              <option value="Morehead">Morehead</option>
              <option value="Murray">Murray</option>
              <option value="New Cut">New Cut</option>
              <option value="Outer Loop">Outer Loop</option>
              <option value="Richmond">Richmond</option>
              <option value="Somerset">Somerset</option>
              <option value="Winchester">Winchester</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default Input