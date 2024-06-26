import React, { useState } from 'react';
import './MeetingForm.css';
import Colonna from './colonna';

const MeetingForm = () => {
  const [formData, setFormData] = useState({
    meetingObjective: '',
    date: '',
    time: '',
    locations: '',
    actionItems :'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui puoi aggiungere la logica per inviare i dati del modulo
    console.log('Dati del modulo:', formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>

        {/* colonna meetingObjective */}
        <div className="container text-center ">
          <div className="row row-cols-2 " >
            <div className="col">
              <label htmlFor="meetingObjective" className="form-label">Meeting objective
                <hr />
                <input
                  list="meetingOptions"
                  id="exampleMeetingList"
                  placeholder="Objective"
                  className="form-control"
                  type="text"
                  name="meetingObjective"
                  value={formData.meetingObjective}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {/* colonna location     */}
            <div className="col" >
              <label
                htmlFor="location"
                className="form-label">
                Location
                <hr />
                <input
                  className="form-control"
                  list="locationOptions"
                  id="locationList"
                  placeholder="Location"
                  type="text"
                  name="locations"
                  value={formData.locations}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {/* colonna data   */}
            <div className="col" >
              <label
                htmlFor="data"
                className="form-label">
                Data
                <hr />
                <input
                  className="form-control"
                  list="dateOptions"
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {/* colonna ora  */}
            <div className="col" >
              <label
                htmlFor="time"
                className="form-label">
                Time
                <hr />
                <input
                  className="form-control"
                  list="timeOptions"
                  id="time"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <hr /><hr />
            <div className="container text-center " style={{ width: '100%' }}>
              < label
                htmlFor="time"
                className="form-label">
                Customer Notes
                <hr />
                <textarea
                  id='text'
                  className="form-control "
                />
              </label>
              <hr />
            </div>
            {/* collonna da 4 */}
            <div className="container text-center " style={{ width: '100%' }}>
              <div className="row align-items-start">
                <div className="col">
                  <h6>Action Items</h6>
                  <hr />
                  <input
                  className="form-control"
                  id="Action Items"
                  type="text"
                  name="actionItems"
                />
                </div>
                <div className="col">
                  <h6>Assigned To</h6>
                  <hr />
                  <input
                  className="form-control"
                  id="Action Items"
                  type="text"
                  name="actionItems"
                />
                </div>
                <div className="col">
                  <h6>Due</h6>
                  <hr />
                  <input
                    className="form-control"
                    id="Action Items"
                    type="text"
                    name="actionItems"
                  />
                </div>
                <div className="col">
                  <h6>V</h6>
                  <hr />
                  <input
                    className="form-control"
                    id="Action Items"
                    type="text"
                    name="actionItems"
                  />
                </div>
              </div>
              <hr />
            </div>

            {/* Next Meeting */}
            
            <div className="container text-center " style={{ width: '100%' }}>
              <h2 >Next Meeting</h2>
              <div className="row align-items-start">
                <div className="col">
                  <h6>Objective</h6>
                  <hr />
                  <input
                  className="form-control"
                  id="Action Items"
                  type="text"
                  name="actionItems"
                />
                </div>
                <div className="col">
                  <h6>Location</h6>
                  <hr />
                  <input
                  className="form-control"
                  id="Action Items"
                  type="text"
                  name="actionItems"
                />
                </div>
                <div className="col">
                  <h6>Time</h6>
                  <hr />
                  <input
                  className="form-control"
                  id="Action Items"
                  type="text"
                  name="actionItems"
                />
                </div>
              </div>
            </div>

          </div>
        </div>
        <hr />
        <button className=' btn btn-success' type="submit">Organizza Meeting</button>
      </form>
    </>
  );
};

export default MeetingForm;
