
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import Template1 from '../Components/Templates/Template1';
import Template2 from '../Components/Templates/Template2';
import Template3 from '../Components/Templates/Template3';
import Template4 from '../Components/Templates/Template4';
import html2canvas from 'html2canvas';
import SuccessMessage from '../Components/Modal/Modal';
import { clearSelectedTemplate } from '../Redux/DataSlice';


function MyResume() {

      //this component shows the preview of the resume created by the user with the 'Save'and 'Back' button//

  const selectedTemplate = useSelector(state => state.dataStore.selectedTemplate);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const downloadComponentPDF = () => {
    //this function is called when the user clicks on the 'Download Resume' button.
    // it takes the 'div' element with id 'divToPrint' and then convert it into pdf format which is downloaded into the user's computer memory.

    const input = document.getElementById('divToPrint');
    html2canvas(input, { scrollY: -window.scrollY }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'px', 'a4');
      const ratio = canvas.width / canvas.height;
      const width = pdf.internal.pageSize.getWidth();
      const height = width / ratio;
      pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
      pdf.save('resume.pdf');
    }).then(() => {

       // this function shows the modal popup named 'SuccessMessage' after the resume has been successfully downloaded
       
      setTimeout(() => {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 6000);
      }, 100);
    });
  };

  const handleDelete = () => {
    dispatch(clearSelectedTemplate());
  };

  return (
    <div className='container w-100 overflow-scroll'>
      <div className='row mt-2 p-5'>
        <div className='w-100 d-flex justify-content-center'>
          {selectedTemplate ? (
            <>
              <Link to='/detailsfillingpage/keyskills'>
                <button className='btn btn-primary me-3'>Edit</button>
              </Link>
              <button className='btn btn-success' onClick={downloadComponentPDF}>
                Download
              </button>
              <button className='btn btn-danger ms-3' onClick={handleDelete}>
                Delete
              </button>
            </>
          ) : (
            <p>Firstly you have to select resume template.</p>
          )}
        </div>
      </div>
      <div className=' mt-2 p-5 w-100 ' style={{ minWidth:"1200px", overflow:'scroll'}}>
        <div className=' w-100  d-flex justify-content-center '>
          <div className=' w-100 resume-preview'>
            <div id='divToPrint' className='w-100'>
              {selectedTemplate === '' ? (
                <div className='text-center'>
                  <h1>Please select a resume template!</h1>
                </div>
              ) : selectedTemplate === 'Template 1' ? (
                <Template1 />
              ) : selectedTemplate === 'Template 2' ? (
                <Template2 />
              ) : selectedTemplate === 'Template 3' ? (
                <Template3 />
              ) : (
                <Template4 />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col text-center'>
          <SuccessMessage showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </div>
  );
}

export default MyResume;
































































































