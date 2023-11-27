import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import "./Cards.css";

export default function Cards() {
  return (
    <MDBRow className="row-cols-1 row-cols-md-2 g-4">
      <MDBCol className="card-margin">
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>
              Ce animal se află pe tricourile departamentului de IT?
              <div>
                <ul>
                  <li className="option">
                    <input type="radio" name="animal" />
                    <span> Un elefant</span>
                  </li>
                  <li className="option">
                    <input type="radio" name="animal" />
                    <span> O testoasa</span>
                  </li>
                  <li className="option">
                    <input type="radio" name="animal" />
                    <span> Un lenes</span>
                  </li>
                  <li className="option">
                    <input type="radio" name="animal" />
                    <span> Un caine</span>
                  </li>
                </ul>
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>
              Cine este actualul coordonator al departamentului de IT?
              <div>
                <ul>
                  <li className="option">
                    <input type="radio" name="coordonator" />
                    <span> Edi</span>
                  </li>
                  <li className="option">
                    <input type="radio" name="coordonator" />
                    <span> Mari</span>
                  </li>
                  <li className="option">
                    <input type="radio" name="coordonator" />
                    <span> Bogdan</span>
                  </li>
                  <li className="option">
                    <input type="radio" name="coordonator" />
                    <span> Codrut</span>
                  </li>
                </ul>
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>
              Cine este team lead la echipa de infra?
              <div>
                <ul>
                  <li className="option">
                    <input type="radio" name="teamlead" />
                    <span> Robert</span>
                  </li>
                  <li className="option">
                    <input type="radio" name="teamlead" />
                    <span> Vlad</span>
                  </li>
                  <li className="option">
                    <input type="radio" name="teamlead" />
                    <span> Andrei</span>
                  </li>
                  <li className="option">
                    <input type="radio" name="teamlead" />
                    <span> Povi</span>
                  </li>
                </ul>
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>
              Cine a fost MD Bucharest Walk anul acesta?
              <div>
                <ul>
                  <li className="option">
                    <input type="radio" name="md" />
                    <span> Rares</span>
                  </li>
                  <li className="option">
                    <input type="radio" name="md" />
                    <span> Cip</span>
                  </li>
                  <li className="option">
                    <input type="radio" name="md" />
                    <span> Alexa</span>
                  </li>
                  <li className="option">
                    <input type="radio" name="md" />
                    <span> Mihai (MeHigh)</span>
                  </li>
                </ul>
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}