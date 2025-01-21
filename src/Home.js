import { useEffect, useState } from 'react'

import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from '../context/WorkoutContext';


const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()
    // const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
                // setWorkouts(json)
            }
        }
        fetchWorkouts()

    }, [])
    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                    
                ))}
                <WorkoutForm />
            </div>
        </div>
    )
}


export default Home