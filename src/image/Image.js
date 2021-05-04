import "./Image.css"

const React = require('react')
class Image extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div className="imgbox">
        <h1 className="click">Take Photo</h1>
        <input className="imginput"type="file" onChange={this.handleChange}/>
        <img className="image" src={this.state.file}/>
      </div>
    );
  }
}
// module.exports = Upload
export default Image