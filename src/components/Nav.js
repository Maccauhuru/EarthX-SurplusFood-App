import React from 'react';

const navigation = () => {
   return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
      <div className="container text-center">
         <a className="navbar-brand text-center" href="index.html"></a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="index.htmlnavbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto mx-auto">
               <li className="nav-item active">
                  <a className="nav-link" href="index.html">Add Item
          </a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="index.html">Logout</a>
               </li>
            </ul>
         </div>
      </div>
   </nav>)
}

export default navigation;