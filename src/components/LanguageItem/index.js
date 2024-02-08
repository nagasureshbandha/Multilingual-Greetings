import './index.css'

const LanguageItem = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails
  return (
    <>
      <li className="link">
        <img src={imageUrl} className="item-image" alt={`${imageAltText}`} />
      </li>
    </>
  )
}

export default LanguageItem
