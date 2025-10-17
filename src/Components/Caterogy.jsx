import React, { use } from 'react';
import { Link } from 'react-router';
const caterogyPromise = fetch('/categories.json').then(res => res.json());

const Caterogy = () => {
    const cateroise = use(caterogyPromise)
    console.log(cateroise);
    
    return (
        <div>
            <h2 className='text-lg font-semibold'>All Caterogy</h2>
            {
                cateroise.map((element) => <div className='gap-3 flex-col space-y-4'>
                    <Link><p key={element.id}>{element.name}</p></Link>
                </div>)
            }
        </div>
    );
};

export default Caterogy;