import './index.css'

const HistoryItem = props => {
  const {historyItemDetails, onDeleteFunc} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItemDetails

  const deleteItemFunc = () => onDeleteFunc(id)

  return (
    <li className="list-item">
      <div className="list-row-container">
        <div className="row">
          <p className="date">{timeAccessed}</p>
          <img src={logoUrl} className="img-logo" alt="domain logo" />
          <p className="title">{title}</p>
          <p className="url">{domainUrl}</p>
          <div className="btn-container">
            <button
              data-testid="delete"
              type="button"
              onClick={deleteItemFunc}
              className="deleteBtn"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
                className="delete"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
