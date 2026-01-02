import {allNav} from './allNav.jsx';

export const getNav = (role) => {
    const findNavs = [];
    for(let i=0; i<allNav.length; i++){
        if(role === allNav[i].role){
            findNavs.push(allNav[i])
        }
    }
    return findNavs;
}