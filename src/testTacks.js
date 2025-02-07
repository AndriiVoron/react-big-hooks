import React from 'react';

const arr = ['a', 'aa', 'aaa', 'food', 'foot', 'xxxxx'];
// longest common prefix // n*n

const TestTacks = () => {

const FindPrefix = (arr) => {
    let result = {
        name: '',
        length: 0,
        count: 0,
    };

    for ( let item of arr) {
        let testKey = item;

        while (testKey.length !== 1 ) {
            const tempCount = {
                name: testKey,
                length: testKey.length,
                count: 0,
            }
            arr.forEach(element => {
                if(element.includes(testKey)) {
                    tempCount.count += 1;
                }
            });

            if ( tempCount.length > result.length && tempCount.count > 1 ) {
                result = {...tempCount}
            }

            testKey = testKey.substr(0, testKey.length - 1);
        }     
    }

    return result.name;
}

const ansver = FindPrefix(arr);

    return (
        <div>
            <h1>Ansver is ::: {ansver}</h1>        
        </div>
    );
};

export default TestTacks;