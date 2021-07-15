import React from 'react';

const HeaderChanger = ({cycleBack}) => {
    return (
        <div>
            <button id="cycle" onClick={() => cycleBack()}/>
        </div>
    );
}

export default HeaderChanger;
