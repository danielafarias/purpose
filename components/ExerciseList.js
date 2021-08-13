import React from 'react';
import { getExercises } from '../api/axios';
import ExerciseCard from './ExerciseCard';

export default function ExerciseList() {

    const [exercises, setExercises] = React.useState(undefined);

    if (!exercises) {
        getExercises().then((res) => setExercises(res))
    }

    if (!exercises) {
        return <div> carregando... </div>
    }
    return (
        <div>
            {exercises.map(exercises => (
                <ExerciseCard key={exercises.id} title={exercises.title} description={exercises.description}/>
            ))}
        </div>
    );
}