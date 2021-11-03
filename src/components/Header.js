import React, { useState } from 'react';
import logo from '../img/logo.png'

export const Header = ({ getVideoFromServer }) => {
  const [value, setValue] = useState('')
  const keyPress = (e) => {
    if (e.key === 'Enter') getVideoFromServer(value)
  }
  return (
    <div className='header'>
      <div className='row'>
        <div className='col-lg-3 col-12 col-sm-4 col-md-3 logo_block'>
          <a href='/'><img src={logo} alt='logo' /> </a>
        </div>
        <div className='col-lg-6 col-12 col-sm-5 col-md-6 search_block'>
          <input
            type='text'
            className='form-control'
            placeholder='Search...'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={(e) => keyPress(e)}
          />
        </div>
        <div className='col-lg-3 col-sm-3 col-md-3 icon_block '>
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 0C15.552 0 16 0.448 16 1V5.2L21.213 1.55C21.439 1.392 21.751 1.447 21.91 1.674C21.968 1.758 22 1.858 22 1.96V14.04C22 14.316 21.776 14.54 21.5 14.54C21.397 14.54 21.297 14.508 21.213 14.45L16 10.8V15C16 15.552 15.552 16 15 16H1C0.448 16 0 15.552 0 15V1C0 0.448 0.448 0 1 0H15ZM14 2H2V14H14V2ZM7 4H9V7H12V9H8.999L9 12H7L6.999 9H4V7H7V4ZM20 4.841L16 7.641V8.359L20 11.159V4.84V4.841Z" fill="black" />
          </svg>
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.17 17C4.3766 16.4145 4.75974 15.9074 5.2666 15.5488C5.77346 15.1902 6.37909 14.9976 7 14.9976C7.62091 14.9976 8.22654 15.1902 8.7334 15.5488C9.24026 15.9074 9.6234 16.4145 9.83 17H20V19H9.83C9.6234 19.5855 9.24026 20.0926 8.7334 20.4512C8.22654 20.8099 7.62091 21.0025 7 21.0025C6.37909 21.0025 5.77346 20.8099 5.2666 20.4512C4.75974 20.0926 4.3766 19.5855 4.17 19H0V17H4.17ZM10.17 10C10.3766 9.41448 10.7597 8.90744 11.2666 8.5488C11.7735 8.19015 12.3791 7.99756 13 7.99756C13.6209 7.99756 14.2265 8.19015 14.7334 8.5488C15.2403 8.90744 15.6234 9.41448 15.83 10H20V12H15.83C15.6234 12.5855 15.2403 13.0926 14.7334 13.4512C14.2265 13.8099 13.6209 14.0025 13 14.0025C12.3791 14.0025 11.7735 13.8099 11.2666 13.4512C10.7597 13.0926 10.3766 12.5855 10.17 12H0V10H10.17ZM4.17 3.00001C4.3766 2.41448 4.75974 1.90744 5.2666 1.5488C5.77346 1.19015 6.37909 0.997559 7 0.997559C7.62091 0.997559 8.22654 1.19015 8.7334 1.5488C9.24026 1.90744 9.6234 2.41448 9.83 3.00001H20V5.00001H9.83C9.6234 5.58554 9.24026 6.09258 8.7334 6.45122C8.22654 6.80986 7.62091 7.00246 7 7.00246C6.37909 7.00246 5.77346 6.80986 5.2666 6.45122C4.75974 6.09258 4.3766 5.58554 4.17 5.00001H0V3.00001H4.17ZM7 5.00001C7.26522 5.00001 7.51957 4.89465 7.70711 4.70712C7.89464 4.51958 8 4.26523 8 4.00001C8 3.73479 7.89464 3.48044 7.70711 3.2929C7.51957 3.10537 7.26522 3.00001 7 3.00001C6.73478 3.00001 6.48043 3.10537 6.29289 3.2929C6.10536 3.48044 6 3.73479 6 4.00001C6 4.26523 6.10536 4.51958 6.29289 4.70712C6.48043 4.89465 6.73478 5.00001 7 5.00001ZM13 12C13.2652 12 13.5196 11.8947 13.7071 11.7071C13.8946 11.5196 14 11.2652 14 11C14 10.7348 13.8946 10.4804 13.7071 10.2929C13.5196 10.1054 13.2652 10 13 10C12.7348 10 12.4804 10.1054 12.2929 10.2929C12.1054 10.4804 12 10.7348 12 11C12 11.2652 12.1054 11.5196 12.2929 11.7071C12.4804 11.8947 12.7348 12 13 12ZM7 19C7.26522 19 7.51957 18.8947 7.70711 18.7071C7.89464 18.5196 8 18.2652 8 18C8 17.7348 7.89464 17.4804 7.70711 17.2929C7.51957 17.1054 7.26522 17 7 17C6.73478 17 6.48043 17.1054 6.29289 17.2929C6.10536 17.4804 6 17.7348 6 18C6 18.2652 6.10536 18.5196 6.29289 18.7071C6.48043 18.8947 6.73478 19 7 19Z" fill="black" />
          </svg>
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 18H0V16H1V9.031C1 4.043 5.03 0 10 0C14.97 0 19 4.043 19 9.031V16H20V18ZM3 16H17V9.031C17 5.148 13.866 2 10 2C6.134 2 3 5.148 3 9.031V16ZM7.5 19H12.5C12.5 19.663 12.2366 20.2989 11.7678 20.7678C11.2989 21.2366 10.663 21.5 10 21.5C9.33696 21.5 8.70107 21.2366 8.23223 20.7678C7.76339 20.2989 7.5 19.663 7.5 19Z" fill="black" />
          </svg>
          <div className='user'>
            U
          </div>
        </div>
      </div>
    </div>
  )
}
