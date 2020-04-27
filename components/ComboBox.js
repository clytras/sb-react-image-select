import React from 'react'

export const ComboBox = ({title, themes, setTheme, onSelect}) => {

    return (
        <div className="form-group">
        <label className="label" htmlFor="select1">
          {title}
        </label>
        <div className="flex-line">
          <div className="flex-group">
            <select className="form-select" id="select1" onChange={(e)=> setTheme(e.target.value)} >
            {themes.map(theme => <option key={theme}>{theme}</option>)}
            </select>
          </div>
          <button className="button-icon" onClick={onSelect} >
            <i className="material-icons">check</i>
          </button>
        </div>
      </div>
    )
}
