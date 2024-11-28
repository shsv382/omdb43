import './SearchField.css'

export default function SearchField({ onChange }) {
    return (
        <input 
        className='searchfield' 
        type='text' 
        placeholder='Search' 
        onChange={onChange}
         />
    )
}