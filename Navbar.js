import React from "react";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import useStyles from './styles.js';

function Navbar( { totalItems }) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
          <span className="famous">Famous Tears </span>
            <img src="https://e1.pngegg.com/pngimages/401/429/png-clipart-sharingan-all-files-mangekyo-sharingan.png" alt='Commerce.js' height="25px" className={classes.image} />
          </Typography>
          <div className={classes.grow}/>
          <div className={classes.button}>
             <IconButton aria-label="Show Cart Items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
             </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}


// function Navbar(props) {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Famous Tears</a>
//           <img src="https://e1.pngegg.com/pngimages/401/429/png-clipart-sharingan-all-files-mangekyo-sharingan.png" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//               </li>
//               </ul>
//               <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <a className="nav-link" href="#">T-shirts</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Hoodies</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Accessories</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     );
// }

export default Navbar;