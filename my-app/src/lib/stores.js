import {writable} from 'svelte/store';

export const count = writable(0, ()=>{
    console.log('sub start'); 
    return () => console.log('sub stop'); 
})

count.set(1); 