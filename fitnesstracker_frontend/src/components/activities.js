import React from 'react';
import { useState, useEffect } from 'react';
import { getAllActivities, createActivity } from '../APIs/apis';

import { Link } from 'react-router-dom';



const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [createNew, setCreateNew] = useState(false);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');


    const getActivities = async () => {
      let activities = await getAllActivities();
      console.log(activities);
      setActivities(activities);
    };

    useEffect(() => {
      getActivities();
      setActivities(activities)
    }, []);

    // async function addActivity() {
    //     const newActivity = {
    //         name: name,
    //         description: description,
      
    //     }

    // const handleSubmit = async (event) => {
    //   event.preventDefault();
    //   let res = await createActivity(event);
    //   window.alert(res);
    //   window.location.reload(true);
    // };



   


    return (
        <>
        <h1>H1 World</h1>

        <div>
        {activities.map((activity) => {


            const { id, name, description} = activity;

            return (
            <div className="activities-card" key={id}>
                <h3>Activity Name |  {name}</h3>
                <h4>Description |  {description}</h4>
                <h5>ID |  {id}</h5>

            </div>
            );
            })}
      </div>
        </>

    );
};


export default Activities;





 {/* <>
        <CreateActivity getActivities={getActivities} setActivity={setActivity} />
          {localStorage.getItem("token") ? (
            <div className="create-new-activity">
              <button
                id="create-new-activity-button"
                onClick={() => {
                  setCreateNew(true);
                }}
              >
                <span className="material-icons"></span>
                Create New Activity
              </button>
              {createNew ? (
                <form onSubmit={handleSubmit} className="activityForm">
                  <input id="create-name" placeholder="Name" />
                  <input id="create-description" placeholder="Description" />
                  <button
                    id="new-routine-submit"
                    type="Submit"
                    onClick={() => {
                    }}
                  >
                    Create
                  </button>
                </form>
              ) : null}
            </div>
          ) : null}
        </> */}

{/* <>
                <h1>Welcome to FitnessTrackr!</h1>
            
            <form onSubmit={(event) => {
            event.preventDefault();
            addActivity();
        }}>
            <label>Enter Activity Name</label>
            <br></br>
            <input
                type='text'
                onChange={(event) => setName(event.target.value)} />
            <br></br>
            <label>Enter Activity Description </label>
            <br></br>
            <input
                type='text'
                onChange={(event) => setDescription(event.target.value)} />
            <br></br>
            <button type='submit'>Submit New Routine</button>
        </form>
</> */}