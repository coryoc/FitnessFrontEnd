import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPublicRoutines, createRoutine } from '../APIs/apis';


const Routines = () => {

  const [routines,setRoutines] =useState([]);

  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');


  async function fetchRoutines(){
    if(!routines.length){
        const retrievedRoutines = await getPublicRoutines();
        setRoutines(retrievedRoutines);
    }
}




async function addRoutine() {
  const newRoutine = {
      name: name,
      goal: goal,
      isPublic: true

  }
  const storedToken = window.localStorage.getItem('fitness_tracker_JWT');
  const results = await createRoutine(storedToken, newRoutine);

  fetchRoutines();
  window.alert(`${results.name}`);

}


const handleSubmitRoutine = async (event) => {
  event.preventDefault();
  try {
    await addRoutine();


  } catch (err) {
      console.error(err);
    }

};


useEffect(()=> {

  fetchRoutines();
}, []);
    


    return (
        <div>
            <h1>Welcome to FitnessTrackr!</h1>
            
            <form onSubmit={handleSubmitRoutine}>
            <label>Enter routine name</label>
            <br></br>
            <input
                type='text'
                onChange={(event) => setName(event.target.value)} />
            <br></br>
            <label>Enter goal </label>
            <br></br>
            <input
                type='text'
                onChange={(event) => setGoal(event.target.value)} />
            <br></br>
            <button type='submit'>Submit New Routine</button>
        </form>



            <h1>Public Routines</h1>

      <div>
      {routines.map((routine) => {


          const { id, creatorId, creatorName, isPublic, name, goal, activities } = routine;

          return (
            <div className="routine-card" key={id}>
              <h2>Routine Name | {name}</h2>
              <h3>Creator Name | {creatorName}</h3>
              <h4>Goal |  {goal}</h4>
              <h5>Id |  {id}</h5>
  

                {activities.map((activity) => {


                  const { id, name, description, duration, count, routineActivityId, routineId } = activity;

                  return (
                    <div className="routine-activities-card" key={id}>
                      <h3>Activity Name |  {name}</h3>
                      <h4>Description |  {description}</h4>
                      <h5>Duration |  {duration}</h5>
                      <h6>Count |  {count}</h6>
            
                    </div>
                  );
                })}
            </div>
          );
        })}
            
        </div>
      </div>
    )
}

export default Routines;