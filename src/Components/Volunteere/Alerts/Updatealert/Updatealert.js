import React from 'react'
import '../Updatealert/Updatealert.css'
import Back_img from '../../../../Assets/Group.png';
import Alert_img1 from '../../../../Assets/Rectangle 279.png';
import Alert_img2 from '../../../../Assets/Rectangle 280.png';

function Updatealert() {
  return (
    <div>
      <div className='d-flex justify-content-center mt-5'>
        <div className='col-lg-8 col-md-8 col-sm-8'>
          <div className='row border shadow-lg rounded-4'>
            <div className='col-lg-8 col-md-8 col-sm-8'>
             <a href='#'><img className='Back_img mt-3 ms-3' src={Back_img} /></a> 
              <div className='continer mt-5'>
                <div className='col-8 ms-5'>
                  <div className='row ms-5'>
                    <div className='col'><p className='Updatealert_text'>Gamil :</p></div>
                    <div className='col'><p className='Updatealert_text'>abc@gmail. com</p></div>
                  </div>
                  <div className='row ms-5'>
                    <div className='col'><p className='Updatealert_text'>Incident :</p></div>
                    <div className='col'><p className='Updatealert_text'>Rain</p></div>
                  </div>
                  <div className='row ms-5'>
                    <div className='col'><p className='Updatealert_text'>Category :</p></div>
                    <div className='col'><p className='Updatealert_text'>Flood</p></div>
                  </div>
                  <div className='row ms-5'>
                    <div className='col'><p className='Updatealert_text'>Location :</p></div>
                    <div className='col'><p className='Updatealert_text'>Kollam</p></div>
                  </div>
                  <div className='row ms-5'>
                    <div className='col'><p className='Updatealert_text'>Date :</p></div>
                    <div className='col'><p className='Updatealert_text'>11/09/2023</p></div>
                  </div>
                  <div className='row ms-5'>
                    <div className='col'><p className='Updatealert_text'>Reporter Name :</p></div>
                    <div className='col'><p className='Updatealert_text'>Abu Salim</p></div>
                  </div>
                  <div className='row ms-5'>
                    <div className='col'><p className='Updatealert_text'>Status :</p></div>
                    <div className='col'><p className='Updatealert_text_status'>Critical</p></div>
                  </div>
                  <div className='row ms-5 mb-5'>
                    <div className='col d-inline-flex'>
                     <a href='volunteers_editviewalert' ><button className='Alert_btn Alert_btn_text'>Edit</button></a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4 mt-5 mb-3 '>
              <div className='col mb-4 '><img className='img-fluid' src={Alert_img1} /></div>
              <div className='col'><img className='img-fluid' src={Alert_img2} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Updatealert