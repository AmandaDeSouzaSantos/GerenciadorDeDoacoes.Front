import "./sobre.css"
import React from 'react';
import Nav from '../../Components/NavHomeSobre/nav'; 

const Sobre = () => {
  return (
    <div>
    <Nav />
      <div className="container mt-5 pt-5 ">
        <div className="row">
        <div className="col-md-8 mb-3">
            <div className="card sobre">
              <h1 className="card-title">Sobre</h1>
              <p className="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis libero tincidunt massa congue, nec auctor turpis molestie. Proin metus velit, porta mollis semper in, dapibus eu felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut turpis enim. Quisque tempus diam quis gravida commodo. Quisque tempor semper massa, vitae fringilla tortor efficitur a. In vulputate eros magna, a fringilla leo sollicitudin nec. Suspendisse sit amet felis tempor, lobortis metus nec, condimentum ex. Nulla pulvinar dui ullamcorper ex luctus, sed viverra magna rutrum. Curabitur placerat nisl accumsan ornare rhoncus. Mauris in rutrum elit, ut ullamcorper augue. Donec a leo at mauris vulputate auctor.
              Vivamus ac mi leo. Cras semper mauris rutrum tincidunt viverra. Integer malesuada a eros eu condimentum. Aenean consectetur ullamcorper orci. Duis volutpat elit sem. Vestibulum commodo in mi ut lacinia. Nulla id diam orci. Sed euismod dolor id scelerisque iaculis. Aliquam molestie magna turpis, nec tincidunt velit ullamcorper a.</p>   
            </div>
          </div>  
          <div className="col-md-4">
            <div className="card sobre">
            <h2 className="card-title">Colaborações</h2>
            <ul>
              <li class="mb-2">
                  <strong className="colaboracao">Back End</strong>
                  <a href="https://exemplo.com" class="d-block text-decoration-none nome">Clique aqui para saber mais sobre o item 1</a>
              </li>
              <li class="mb-2">
                  <strong>Front End</strong>
                  <a href="https://exemplo.com" class="d-block text-decoration-none nome">Clique aqui para saber mais sobre o item 2</a>
              </li>
              <li class="mb-2">
                  <strong>Modelagem de Dados</strong>
                  <a href="https://exemplo.com" class="d-block text-decoration-none nome">Clique aqui para saber mais sobre o item 3</a>
              </li>
              <li class="mb-2">
                  <strong>Design</strong>
                  <a href="https://exemplo.com" class="d-block text-decoration-none nome">Clique aqui para saber mais sobre o item 3</a>
              </li>
          </ul>    
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Sobre;