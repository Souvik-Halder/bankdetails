import React from 'react'

function Header() {
  return (
    <>

<div
      class="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent"
    >
      <div class="container">
        <div class="relative -mx-4 flex items-center justify-between">
          <div class="w-60 max-w-full px-4">
            <a href="index.html" class="navbar-logo block w-full py-5 text-white">
             BankDetails
            </a>
          </div>
          <div class="flex w-full items-center justify-between px-4">
            <div>
          
              <nav
                id="navbarCollapse"
                class="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
              >
          
              </nav>
            </div>
            <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/"
                class="loginBtn py-3 px-7 text-base font-medium text-white hover:opacity-70"
              >
               Home
              </a>
              <a
                href="/cards"
                class="signUpBtn rounded-lg py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
              >
               Cards
              </a>
              <a
                href="/aboutus"
                class="signUpBtn rounded-lg py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
              >
               About
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  

    </>
  )
}

export default Header
