const Select = ({onChange}) => {
    return (
        <select   style={{width: '100px', fontFamily: 'sans-serif', fontWeight: 'bold'}} onChange={onChange}>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
       </select>
    )
}

export default Select